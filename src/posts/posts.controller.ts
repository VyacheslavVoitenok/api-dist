import * as express from 'express'
import Post from './post.interface'

export default class PostsController {
    public path = '/posts'
    public router = express.Router()

    private posts: Post[] = [
        {
            author: 'Marcus Lynn',
            content: 'Some random text',
            title: 'Learn Express'
        }
    ]

    constructor() {
        this.initRoutes()
    }

    initRoutes() {
        this.router.get(this.path, this.getAllPosts)
        this.router.post(this.path, this.createPost)
    }

    getAllPosts = (request: express.Request, response: express.Response) => {
        response.status(200).send(this.posts)
    }

    createPost = (request: express.Request, response: express.Response) => {
        const post = request.body
        this.posts.push(post)
        response.status(200).send(post)
    }
}
