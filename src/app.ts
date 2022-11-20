import express ,{NextFunction, Request , Response}from 'express'
import {AppRoutes} from './routes'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
// import addC
// import addRoutes from './addRoutes'
// import app from 'express'


class App{
    public app=express()
    // public app.express:Appli
    private routesprev: AppRoutes = new AppRoutes()
    public mongourl:string='mongodb+srv://Dharun:Mongodb.com@dharunonenet.xml3dcx.mongodb.net/'
    constructor() {
        this.config()
        this.mongosetup()
        this.routesprev.AddRoutes(this.app)
    }
    private config (): void {
        this.app.use(bodyparser.urlencoded({extended:true}))
        this.app.use(bodyparser.json())
    }
    private mongosetup (): void {
        mongoose
            .connect(this.mongourl)
            .then(()=> (console.log('db in maja agaya')))
            .catch(()=>(console.log('margaya')))
    }
    // public routesprev= new AppRoutes()
}


export default new App().app