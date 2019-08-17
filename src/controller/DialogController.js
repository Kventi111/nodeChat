import DialogModel from "../models/dialog"

class UserController {

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

  create(req,res) {
    const authorId = "5d5879384a754d8587fce05b";
    
    const postData = {
      author : authorId,
      partner : req.body.partnerId,
      lastMessage : req.body.lastMessage
    }
    
    const dialog = new DialogModel(postData)

    dialog.save()
      .then(dialog => console.log(`dialog ${dialog._id} created`))
      .catch(err => res.status(400).json(err))
  
    return res.status(200).send('Диалог создан')
  }
}


export default UserController