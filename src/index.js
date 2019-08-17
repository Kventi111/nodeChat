import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'

import UserController from "./controller/UserController"
const User = new UserController()

import DialogController from "./controller/DialogController"
const Dialog = new DialogController()


import MessageController from "./controller/MessageController"
const Message = new MessageController()

const app = express()  
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/chat")

app.get("/user/:id",User.index)
app.post("/user/create",User.create)

app.get('/dialog/:id',Dialog.index)  
app.post('/dialog/create',Dialog.create)  

app.get('/message/:id',Message.index)  
app.post('/message/create',Message.create)  

app.listen(3333,() => {console.log("server it`s work!")})