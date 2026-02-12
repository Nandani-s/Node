import mongoose from "mongoose";

const connectDB = async () => {
	try{
		const  client = await mongoose.connect(process.env.MONGODBURI)
		console.log(process.env.MONGODBURI);
		console.log("mongodb connected");

	}
	catch(error){
		console.error(error);
		
	}
}
export default connectDB;