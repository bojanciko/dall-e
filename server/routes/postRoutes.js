import express from "express";
import * as dotenv from 'dotenv'

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()


router.route('/').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });

  router.route('/').post((req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        //client.uploadFile(photo).then((file) => {
            const newPost = Post.create({
                name,
                prompt,
                photo
            });
            //console.log(file.uuid)
            
            res.status(200).json({ success: true, data: newPost });
        //}).catch((err) => console.log(err))
        //console.log(prompt)
            
    } catch {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
  })

export default router
