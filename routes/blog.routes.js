import { Router } from "express";
import { createBlog ,  Blogbyid ,  updateBlog , deleteBlog   } from "../Controller/blogController.js";
import verifyUser from "../middleware/auth.js";

const blogRoute = Router();

blogRoute.route('/create').post(verifyUser, createBlog)
blogRoute.route('/read/:id').get(Blogbyid)
blogRoute.route('/update/:id').put(verifyUser, updateBlog)
blogRoute.route('/delete/:id').delete(deleteBlog)


export default blogRoute;