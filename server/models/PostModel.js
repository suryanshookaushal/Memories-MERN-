import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    tags: [String],
    selectedfile: String,
    message: String,
    likecount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date, 
        default: new Date()
    }
})

const postModel = mongoose.model('postModel', postSchema)

export default postModel;