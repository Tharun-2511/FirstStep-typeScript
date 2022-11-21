import { Application, Router } from "express";
import addRoutes from "../controller/Add/addRoutes";
export class AppRoutes{
    public AddRoutes(app:Application) : void{
        app.use("/api/add", addRoutes)

    }
}