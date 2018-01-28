var mongoose 	= require('mongoose'),
	bcrype		= require('bcrypt-')

//Schema

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, 'First name is required.']
	},
	last_name: {
		type: String,
		required: [true, 'Last name is required.']
	},

})
//Matt's Method for hashing password
UserSchema.methods = {
	encryptPassword: function(next) {
		var user = this;
		bcrypt.hash(user.password, 10)
		.then( (hashed_password) => {
			user.password = hashed_password;

			next();
		});
	},
	authenticate: function(password) {
		var user = this;
	}
	full_name: () => {
		return this.first_name + " " + this.last_name;
		// or using string interpolation:
		// return `${this.first_name} ${this.last_name};
	}
}

//Before Save
UserSchema.pre('save', function(next) {
	let user = this;
	user.encryptPassword(next)
}