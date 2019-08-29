import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  text : {
    type : String, 
    require : true
  },
  undear : {
    type : Boolean, 
    defaul : false
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    require: true 
  },
  dialog : {
    type : Schema.Types.ObjectId, 
    ref : "Dialog", 
    require : true
  }
}, {
  timestamp : true
})

const MessageModel = mongoose.model("Message",MessageSchema)

export default MessageModel;

