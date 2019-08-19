import DialogModel from "../models/dialog"

class UserController {

  constructor(io) {
    this.io = io
  }

  index(req, res) {
    const authorId = req.params.id;

    DialogModel
      .find({ author : authorId })
      .populate(['author','partner'])
      .exec(function(err,dialog) {
        if (err) return res.status(404).send('dialog not found')

        return res.json(dialog)
      })
  }

  create = (req,res) => {
    const authorId = req.user._id;
    
    const postData = {
      author : authorId,
      partner : req.body.partnerId,
      lastMessage : req.body.lastMessage
    }
    
    const dialog = new DialogModel(postData)

    dialog.save()
      .then(dialogObj => {
        // TODO - сделать персонализированную отправку
        this.io.emit("SERVER:NEW_MESSAGE",dialogObj._id)

        return res.status(200).json(dialogObj)
      })
      .catch(err => res.status(400).json(err))
  }
}


export default UserController