import { Blog } from "../models/blogs.model.js";




const createBlog = async (req, res) => {
	try {

		const { title, body, content, readtime } = req.body;

		if (!title || !body || !content || !readtime) {
			return res.status(400).json({
				success: false,
				message: "All fields are required"
			});
		}

		const user = req.user

		const blog = await Blog.create({
			title,
			body,
			content,
			readtime,
			author: user._id,
		});

		return res.status(201).json({
			success: true,
			message: "Blog created successfully",
			data: blog
		});

	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong while creating blog",
			error: error.message
		});
	}
};
const Blogbyid = async (req, res) => {
	try {
		const blogId = req.params.id;

		const blog = await Blog.findById(blogId);

		if (!blog) {
			return res.status(404).json({ message: "Blog not found" });
		}

		return res.status(200).json({
			message: "Blog found",
			data: blog
		});

	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong while finding blog",
			error: error.message
		});
	}
};

const updateBlog = async (req, res) => {
	try {
		const blogId = req.params.id;

		const blog = await Blog.findById(blogId);

		if (!blog) {
			return res.status(404).json({
				success: false,
				message: "Blog not found"
			});
		}

		if (blog.author.toString() !== req.user._id.toString()) {
			return res.status(403).json({
				message: "You are not authorized to update this blog"
			});
		}

		const { title, body, content } = req.body;

		const updatedBlog = await Blog.findByIdAndUpdate(
			blogId,
			{ title, body, content },
			{ new: true }
		);

		return res.status(200).json({
			success: true,
			message: "Blog updated successfully",
			data: updatedBlog
		});

	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong while updating blog",
			error: error.message
		});
	}
};




const deleteBlog = async (req, res) => {
	try {
		const blogId = req.params.id;

		const blog = await Blog.findByIdAndDelete(blogId);

		if (!blog) {
			return res.status(404).json({
				success: false,
				message: "Blog not found"
			});
		}

		return res.status(200).json({
			success: true,
			message: "Blog deleted successfully",
			data: blog.title
		});

	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong while deleting blog",
			error: error.message
		});
	}
};



export {
	createBlog,
	deleteBlog,
	Blogbyid,
	updateBlog,
}