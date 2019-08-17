import UserModel from "../schemas/user"

class UserController {

  index(req, res) {
    console.log(req)
    UserModel.find().then((err,post) => {
      if (err) {
        res.send(err)
      }
  
      res.json(posts)
    })
  }

  create(req,res) {
    const data = req.body;
  
    const post = new PostModel(data)
    post.save().then(() => { console.log("ok");})
  
    return res.send("Запись добавленна")
  }

  read(req, res) {
    console.log(req.params)
    UserModel.findOne({ _id : req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json({ mes : err }))
  }

  update(req,res) {
    UserModel.findByIdAndUpdate(req.params.id, {$set : req.body}, err => {
  
      if (err) {
        res.send(err)
      } 
  
      res.json({ status : "Запись изменнена" })
  
    })
  }

  delete(req,res) {
    console.log(req.params);
  
    UserModel.remove({
      _id : req.params.id
    }).then( post => {
      if (post) {
        res.json({ status : "Запись удалена" })
      } else {
        res.json({ status : "error" })
      }
    })
  }
  
}


export default UserController