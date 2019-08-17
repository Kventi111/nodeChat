import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'

import UserController from "./controller/UserController"
const User = new UserController()

const app = express()  
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/chat")

app.get("/user/:id",User.index)

app.listen(3333,() => {console.log("server it`s work!")})