import mongoose, { Schema } from 'mongoose';


const UserSchema = new Schema({
  fullname : {
    type : String, 
    required : true
  },
  email : {
    type : String, 
    required : true
  },
  password : {
    type : String, 
    required : true
  },
  confirmed :{
    type : Boolean, 
    default : false
  },
  last_seen : Date,
  avatar : String
}, {
  timestamp : true
})

const UserModel = mongoose.model("User",UserSchema)

export default UserModel;

