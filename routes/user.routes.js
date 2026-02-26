import { Router } from "express";
import { register ,login, auth, byid, logout, allusers, deleteuser} from "../Controller/userController.js";
import verifyUser from "../middleware/auth.js";
import { upload } from "../middleware/multer.js";


const userRoute = Router();

userRoute.route('/register').post(upload.fields([{name:"avatar", maxcount:1}]),register)
userRoute.route('/login').post(login)
userRoute.route('/auth').get(verifyUser,auth)
userRoute.route("/byid/:id").get(byid)
userRoute.route("/logout").post(logout)
userRoute.route("/alluser").get(allusers)
userRoute.route("/delete").delete(deleteuser)



export default userRoute;