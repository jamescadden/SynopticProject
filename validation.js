const validation = {
	name: (v) =>{
		return /^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/.test(v);
	}, 
	email: (v) => {
		return /[a-z.0-9]+@+[a-z]+\.+[a-z]/.test(v)
	},
	mobileNumber: (v) =>{
		return /[0-9]/.test(v)
	},
	pin: (v) => {
		return /[0-9]/.test(v)
	}
}

module.exports = {validation}