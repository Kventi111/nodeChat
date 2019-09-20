import UserModel from "../models/user"
import createJWToken from '../utils/createJWTToken'

class UserController {

  index(req, res) {
    const userId = req.user._id;

    UserModel.findById(userId,{ password : 0 },function(err,user) {
      // console.log(err)
      // if (!err) res.status(404).send("notFound")

      res.status(200).json(user)
    })
  }

  create(req,res) {
    const data = req.body;
    const user = new UserModel(data)

    user.save()
      .then(user => {
        return res.json({
          status: "success",
          token : createJWToken(user)
        });
      })
      .catch(err => res.status(400).json(err))
  }  

  login(req, res) {
    const postData = {
      email: req.body.email,
      password: req.body.password
    };

    UserModel.findOne({ email: postData.email }, (err, user) => {
      if (err || !user) {
        return res.json({
          message: "Incorrect password or email"
        });
      }
      
      if (postData.password === user.password) {
        const token = createJWToken(user);        
        res.json({
          status: "success",
          token
        });
      } else {
        res.json({
          status: "error",
          message: "Incorrect password or email"
        });
      }
    });
  };
}


export default UserController