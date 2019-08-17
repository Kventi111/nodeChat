import MessageModel from "../models/message"

class MessageController {

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

  create(req,res) {
    const userId = "5d5879384a754d8587fce05b";

    const postData = {
      user : userId,
      text : req.body.text,
      dialog : req.body.dialog
    }

    const message = new MessageModel(postData)

    message.save()
      .then(message => console.log(`message ${message._id} created`))
      .catch(err => res.status(400).json(err))
  
    return res.status(200).send("Запись добавленна")
  }  
}


export default MessageController