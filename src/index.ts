import express, { Application } from "express";
import * as dotenv from "dotenv"
import morgan from 'morgan'

// router
import userRoutes from "./routes/userRoutes";

class App {
     public app: Application

     constructor() {
          this.app = express()
          this.middle()
          this.routes()
          dotenv.config()
     }

     protected middle(): void {
          this.app.use(express.json())
          this.app.use(morgan('dev'))
     }
     protected routes(): void {
          this.app.use('/users', userRoutes)
     }
}

const app = new App().app
app.listen(process.env.PORT, () => {
     console.log(`server running on port: ${process.env.PORT}`);
})