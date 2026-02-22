import bcrypt from "bcrypt"
import { User } from "../models/User.model.js"


const register = async (req, res) => {
	try {
		const { name, email, password, age, role } = req.body

		if (!name || !email || !password || !age || !role) {
			return res.status(400).json({ message: "All fields are required" })
		}

		const newpassword = await bcrypt.hash(password, 10)
		
		const user= await User.create({
			name,
			email,
			password: newpassword,
			age,
			role
		})

		if (!user) {
			return res.status(400).json({ message: "User registration failed" })
		}

		res.status(201).json({ message: "User registered successfully", 
			username: user.name })


	} catch (error) {
		return res.status(500).json({
			message: "Internal server error",
		})

	}
}


const login = async (req, res) => {

	try{
		const {password ,email} = req.body

		if(!password || !email){
			return res.status(400).json({
				message:"all feilds are required"
			})
		}


		const user = await User.findOne({email})
		if (!user){
			return res.status(400).json({
				message:"user not found"
			})
		}

		const ispasswordcorrect = await bcrypt.compare(password,user.password)
		if (!ispasswordcorrect){
			return res.json({
				message:"password invalid"
			})
		}
     
		return res.status(201).json({
			message:"login success  "
		})

	}catch(error){
     return res.json({
		message:"internal error",
	 })
	}
};



export {
	register,
	login
}