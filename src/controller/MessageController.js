import MessageModel from "../models/message"

class MessageController {

  constructor(io) {
    this.io = io
  }

  index(req, res) {
    const dialogId = req.params.id;

    MessageModel
      .find({ dialog : dialogId })
      .populate('dialog')
      .exec(function(err,message) {
        if (err) return res.status(404).send('messages not found')

        return res.status(200).json(message)
      })
  }

  create = (req,res) => {
    const userId = req.user._id;

    const postData = {
      user : userId,
      text : req.body.text,
      dialog : req.body.dialog
    }


    const message = new MessageModel(postData)

    message.save()

    this.io.emit('NEW:MESSAGE', message)    
    return res.status(200).json({ text : "Запись добавленна" })
  }  
}


export default MessageController