import { returnStatus } from "../config/config"
import AddModel from "../modules/add/model"
import Iam from "../modules/add/schema"


export default class AddService{
    public async addUser(data:AddModel) {
        try{
            const result =await Iam.create(data)
            if(result){
                return {status:returnStatus.success, data:result}
            } else {
                return {status: returnStatus.failure, dtaa:result}
            }
        } catch{
            console.log("catch err-Addservice ");
        }
    }
}