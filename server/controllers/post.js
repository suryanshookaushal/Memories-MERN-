import postModel from "../models/PostModel.js"

export const getPost = async(req, res)=>{
    try{
        const getallposts = await postModel.find()
        res.status(200).json(getallposts)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const addpost = async(req, res)=>{
    const body = req.body
    const newp = new postModel(body)
    try{
        await newp.save()
        res.status(201).json(newp)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const updatepost = async(req, res)=>{
    
}