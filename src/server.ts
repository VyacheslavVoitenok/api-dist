import App from './app'
import PostsController from './posts/posts.controller'

const { PORT = 3000 }: any = process.env

const server = new App(PORT, [new PostsController()])
   
server.listen()