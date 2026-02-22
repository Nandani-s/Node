import { Router } from "express";
import { register ,login } from "../Controller/userController.js";


const userRoute = Router();

userRoute.route('/register').post(register)
userRoute.route('/login').post(login)



export default userRoute;