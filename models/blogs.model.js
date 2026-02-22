import mongoose from 'mongoose';
const blog = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	body: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true
	},

	author: {
		type: String,
		required: true
	}

	
	

},{ timestamps: true });
export const Blog = mongoose.model("blog", blog)
