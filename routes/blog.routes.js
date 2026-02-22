import { Router } from "express";
import { createBlog ,  Blogbyid ,  updateBlog , deleteBlog   } from "../Controller/blogController.js";











const blogRoute = Router();

blogRoute.route('/create').post(createBlog)
blogRoute.route('/read/:id').get(Blogbyid)
blogRoute.route('/update/:id').put(updateBlog)
blogRoute.route('/delete/:id').delete(deleteBlog)

export default blogRoute;