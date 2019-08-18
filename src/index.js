import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from 'cors'

import UserController from "./controller/UserController"
const User = new UserController()

import DialogController from "./controller/DialogController"
const Dialog = new DialogController()


import MessageController from "./controller/MessageController"
const Message = new MessageController()

import checkAuth from './middlewares/checkToken'

const app = express()  
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(checkAuth)

mongoose.connect("mongodb://localhost/chat")

app.get("/user/:id",User.index)
app.post("/user/create",User.create)
app.post("/user/signin",User.login)

app.get('/dialog/:id',Dialog.index)  
app.post('/dialog/create',Dialog.create)  

app.get('/message/:id',Message.index)  
app.post('/message/create',Message.create)  

dotenv.config();

app.listen(3333,() => {console.log("server it`s work!")})