//Importing the libraries
import mongoose from 'mongoose';
import express from 'express';
const app = express()

import {getPost} from './controllers/post.js'

//Setting up the database first
mongoose.connect('mongodb://127.0.0.1:27017/memories', {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
})

//Routes
app.get('/', getPost)


const port = process.env.PORT || 5000
app.listen(port, (req, res)=>{
    console.log("App is up and running")
})