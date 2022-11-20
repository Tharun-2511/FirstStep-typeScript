import AddController from "./addController";
import { Router } from "express";
class AddRoutes{
    private addcontroller= new AddController()
    router:Router
        constructor(){
            this.router=Router()
            this.init()
        }
        init(){{
            this.router.post('/add', this.addcontroller.AddUser)
        }}

}
let addRoutes= new AddRoutes
addRoutes.init
export default addRoutes.router

