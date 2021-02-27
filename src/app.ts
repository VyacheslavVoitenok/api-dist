import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Expression } from 'typescript'
import Post from './posts/post.interface'

export default class App {
    public app: express.Application
    public port: number

    constructor(port: number, controllers) {
        this.app = express()
        this.port = port
		this.initMiddlewares()
        this.initControllers(controllers)
    }

	private initMiddlewares(){
		this.app.use(bodyParser.json())
	}

    private initControllers(controllers) {
		controllers.forEach(controller => this.app.use('/', controller.router))
    }

    public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is runnung on the port ${this.port}`)
		})
    }
}

