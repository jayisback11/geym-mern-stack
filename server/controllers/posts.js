import PostMessage from '../models/postMessage.js'

export const getMessage = async (req, res) => {
    try {
        const messages = await PostMessage.find()

        res.status(200).json(messages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createMessage = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}