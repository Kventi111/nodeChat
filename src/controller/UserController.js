import UserModel from "../models/user"
import createJWToken from '../utils/createJWTToken'

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

  login(req, res) {
    const postData = {
      email: req.body.email,
      password: req.body.password
    };

    UserModel.findOne({ email: postData.email }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      if (postData.password === user.password) {
        const token = createJWToken(user);
        res.json({
          status: "success",
          token
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "Incorrect password or email"
        });
      }
    });
  };
}


export default UserController