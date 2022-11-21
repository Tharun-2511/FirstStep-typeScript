import express ,{NextFunction, Request , Response}from 'express'
import {AppRoutes} from '../routes/routes'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
// import addC
// import addRoutes from './addRoutes'
// import app from 'express'


class App{
    public app=express()
    // public app.express:Appli
    private routesprev: AppRoutes = new AppRoutes()
    public mongourl:string='mongodb+srv://Dharun:Mongodb.com@dharunonenet.xml3dcx.mongodb.net/testing'
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
            .then(()=> (console.log('DB-UP')))
            .catch(()=>(console.log('DB-DOWN')))
    }
    // public routesprev= new AppRoutes()
}
console.log('To add user- 3009/api/add/create');


export default new App().app