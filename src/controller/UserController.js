import UserModel from "../models/user"

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
    const user = new UserModel(data)

    user.save()
      .then(user => console.log(`user ${user.fullname} created`))
      .catch(err => res.status(400).json(err))
  
    return res.send("Запись добавленна")
  }  
}


export default UserController