import UserModel from "../schemas/user"

class UserController {

  index(req, res) {
    const id = req.params.id;

    UserModel.findById(id,function(err,user) {
      if (err) res.status(404).send("notFound")
    
      res.json(user)
    })
  }

  create(req,res) {
    const data = req.body;
    const user = new PostModel(data)

    user.save()
      .then(user => console.log(`user ${user.fullname} created`))
      .catch(err => res.status(400).json(err))
  
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