import { Application, Router } from "express";
import addRoutes from "./addRoutes";
export class AppRoutes{
    public AddRoutes(app:Application) : void{
        app.use("/api/add", addRoutes)

    }
}