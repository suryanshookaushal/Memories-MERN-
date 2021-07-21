//Importing the libraries
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors'
const app = express()

import {getPost, addpost, updatepost} from './controllers/post.js'

//Setting up the database first
mongoose.connect('mongodb://127.0.0.1:27017/memories', {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
})

//Setting up the app
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

//Routes
app.get('/', getPost)
app.post('/', addpost)
app.patch('/:id', updatepost)


const port = process.env.PORT || 5000
app.listen(port, (req, res)=>{
    console.log("App is up and running")
})