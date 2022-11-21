import { Request,Response } from "express"
import AddService from "../../service/addServices"
import { returnStatus, statusCode } from "../../config/config"
import AddModel from "../../modules/add/model"

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