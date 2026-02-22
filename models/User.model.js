import mongoose from "mongoose";
const user = new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	email:{	
		type:String,
		required:true,
		unique:true,
		lowwercase:true,
	},
	password:{
		type:String,
		required:true,
	},
	age:{
		type:Number,
		required:true,
		max:18,
	},
	
	role:{
	type:String,
	enum:["admin","user"],
	default:"user"
	}
},{timestamps:true});	
export const User= mongoose.model("user",user)