import mongoose from 'mongoose';
const blog = new mongoose.Schema({
	title:{
		type:String,
		required:true,
	},
	body:{
		type:String,
		required:true,
	},
	 content: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  image: {
    type: String  
  },

  tags: [{
    type: String
  }],

  isPublished: {
    type: Boolean,
    default: false
  },

  views: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date
  }

})