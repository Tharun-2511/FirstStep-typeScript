import { returnStatus } from "./config"
import AddModel from "./model"
import Iam from "./schema"


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