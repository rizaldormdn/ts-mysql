import { Router } from "express";
import userController from '../controller/userController'

class userRoutes {
     public route: Router

     constructor() {
          this.route = Router()
          this.routes()
     }

     public routes(): void {
          this.route.post('/', userController.createUser)
          this.route.get('/', userController.getUser)
          this.route.get('/:id', userController.getUSerById)
          this.route.put('/:id', userController.updateUSer)
          this.route.delete('/:id', userController.deleteUser)
     }
}

export default new userRoutes().route