const mongoose = require('mongoose')
const {validation} = require('./validation')


const employeesSchema = new mongoose.Schema({
	cardId:  {
		type: String,
		required: [true, "please enter the card ID"],
		max: 16
	},
	employeeId:{
		type: String,
		required: [true, "please enter your employee ID"]
	},
	name:{ 
		type: String,
		validate: {
			validator: validation.name,
			message: "please enter a valid name"
		},
		required: [true, 'please enter your name']
	},
	email: {
		type: String,
		validate: {
			validator: validation.email,
			message: "please enter a valid email"
		},
		required: [true, "please enter your email address"]
	},
	mobileNumber: {
		type: String,
		validate: {
			validator: validation.mobileNumber,
			message: "please enter a valid mobile number"
		},
		required: [true, "please enter your mobile number"],
		max: 11
	},
	pin: {
		type: Number,
		validate: {
			validator: validation.pin,
			message: "please enter a valid pin"
		},
		required: [true, "please enter a 4 digit pin"],
		min: 1000,
		max: 9999
	},
	balance: {
		type: String,
		required: true
	}
	
})

module.exports = employeesSchema



