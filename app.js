const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const employeesSchema = require('./schema/employeesSchema')


const app = express()

mongoose.connect('mongodb://localhost:27017/kioskDB', {useNewUrlParser: true, useUnifiedTopology: true})

	.then(() => {
		app.use(bodyParser.urlencoded({extended: true}))
		app.use(bodyParser.json())
		console.log('reached database')

		const Employee = mongoose.model("Employee", employeesSchema)
		
		app.post('/', function(req, res) {
			const newEmployee = new Employee({
				cardId: req.body.cardId,
				employeeId: req.body.employeeId,
				name: req.body.name,
				email: req.body.email,
				mobileNumber: req.body.mobileNumber,
				pin: req.body.pin,
				balance: req.body.balance
			})

			newEmployee.save((err) => {
				if (!err){
					res.status(201).json,
					res.send("Successfully added employee")
				}else if(
					res.status(406).json,
					res.send(err)) {
				}else {
					res.status(500)
					res.send(err)
				}
			});
		})

		app.get('/employees', function(req, res){
			Employee.find((err, foundEmployees)=> {
				if(!err){
					res.status(200).json,
					res.send(foundEmployees)
				}else if(
					res.status(404).json,
					res.send(err)) {
				}else {
					res.status(500)
					res.send(err)
				}
			})
		})

		app.get('/employees/:cardId', function(req, res){
			Employee.findOne({cardId: req.params.cardId},
			function (err, foundEmployee){
				if(foundEmployee){
					res.status(200).json,
					res.send(foundEmployee)
				}else if(
					res.status(404).json,
					res.send("Your card is not registerd please register")) {
				}else {
					res.status(500)
					res.send(err)
				}
			})
		})

		app.put('/employees/:employeeId', function(req, res){
			Employee.update({employeeId: req.params.employeeId},{
				cardId: req.body.cardId,
				employeeId: req.body.employeeId,
				name: req.body.name,
				email: req.body.email,
				mobileNumber: req.body.mobileNumber,
				pin: req.body.pin,
				balance: req.body.balance 
			},
			function(err){
				if(!err){
					res.status(202).json,
					res.send("Sucessfully updated the employee")
				}else if(
					res.status(400).json,
					res.send("err")) {
				}else {
					res.status(500)
					res.send(err)
				}
			});
		});

		app.delete('/employees/:employeeId', function(req, res){
			Employee.deleteOne({employeeId: req.params.employeeId},
			function(err){
				if(!err){
					res.status(200).json,
					res.send("Succesfully delted the corresponding employee")
				}else if(
					res.status(404).json,
					res.send(err)) {
				}else {
					res.status(500)
					res.send(err)
				}
			});
		});

		app.listen(3001, () => {
			console.log("Sever stared on port 3001");
		});
	})
	.catch((error) => {
		console.log(`the error is ...${error}`);
	})

