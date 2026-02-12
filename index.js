import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';



dotenv.config({
	path:'./.env'
})


 const PORT = process.env.PORT || 5000;
 console.log(PORT);

//database connection
 connectDB()
 .then(()=>{
	console.log("database connected sucessfully");
	app.listen(PORT, ()=>{
		console.log("server connected successfully http://localhost:" + PORT);
	 });
 })
 .catch((error)=>{
	console.error("database connection failed",error);
 })

  




 const app = express();






 app.get('/',(req,res)=>{//server bata forntend ma pathaidinxa
 res.send('this server is working');
 });


 app.get('/about',(req,res)=>{
 res.send('this is about page');
 });

 app.get('/blog',(req,res)=>{
res.send('this is blog page');
 });


 app.get('/response',(req,res)=>{
	res.send({
		sucess:true,});
	})

	app.get('/array',(req,res)=>{
		res.send([1,2,3,4,5]);
	})


	app.get ('/json',(req,res)=>{
		res.json({
			status:'sucess',
			data:"user",
			name:"sudiksha",
			last:"duhbwuhdbu",
		});
	})
 app.get('/status',(req,res)=>{
	res.status(404).send('not found')

 });

 app.get('/jsonstatus',(req,res)=>{
	res.status(201).json({
		message:"user created",
	})
 })

 //api methods 
 //.send
 app.get('/apisend',(req,res)=>{
	res.send("this is .send method");
 })
 //.json
app.get('/apijson',(req,res)=>{
	res.json({
		message:"this is .json method",
	})
 })

 //.json and .status
app.get('/apijsonstatus',(req,res)=>{
	res.status(201).json({
		message:"this is .json and .status method",
	})
 })
//.json and .send
 app.get('/apistatus',(req,res)=>{
	res.status(404).send('this is .status .send method');
 });

//.end
app.get('/apiend',(req,res)=>{
	res.end('this is .end method');
});

//.redirect
app.get('/apiredirect',(req,res)=>{
	res.redirect('/login');
});










