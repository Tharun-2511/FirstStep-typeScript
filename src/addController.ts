import { Request,Response } from "express"
import AddService from "./addServices"
import { returnStatus, statusCode } from "./config"
import AddModel from "./model"

export default class AddController {
    public async AddUser(req:Request,res:Response) {
        try{
        let as:AddService= new AddService()
        let user:AddModel= new AddModel()
        user=req.body

        let result = await as.addUser(user)
        console.log(result);

            if (result?.status=== returnStatus.success){
            res.status(statusCode.success).json({
                message:"user created",
                data:result?.data
            })
        } else {
            console.log('user not added');
            
        }
    } catch {
        console.log('something not added');
    }
}
}