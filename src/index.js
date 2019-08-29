import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { createServer } from 'http'
import socket from 'socket.io'
import dotenv from "dotenv";
import cors from 'cors'

import UserController from "./controller/UserController"  
const User = new UserController()

import DialogController from "./controller/DialogController"

import MessageController from "./controller/MessageController"
const Message = new MessageController()

import checkAuth from './middlewares/checkToken'

dotenv.config();
  
const app = express()  
const http = createServer(app)
const io = socket(http);
  
const Dialog = new DialogController(io)


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(checkAuth)

mongoose.connect("mongodb://localhost/chat", { useNewUrlParser: true })
 
app.get("/user",User.index)
app.post("/user/signup",User.create)
app.post("/user/signin",User.login)

app.get('/dialogs',Dialog.index)  
app.post('/dialog/create',Dialog.create)  

app.get('/message/:id',Message.index)  
app.post('/message/create',Message.create)  


io.on('connection',function(socket) {
  socket.emit('SERVER:NEW_MESSAGE', `user ${socket.id} connection`)
})

http.listen(process.env.PORT,() => {console.log("server it`s work!")})