// require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
// create the schema
var UserSchema = new mongoose.Schema({
 	first_name: {
 		type: String,
 		required: [true, "First name is required"],
 		trim: true,
 	},
 	last_name: {
 		type: String,
 		required: [true, "Last name is required"],
 		trim: true,
 	},	
	password: {
		type: String,
		required: [true, "A password is required"],
		minlength: 8,
		maxlength: 32,
		validate: {
			validator: function(value) {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
	  		},
	  		message: "Password must contain at least 1 number, uppercase, and special character"
		}
	},
	birthday: {
		type: Date,
		required: [true, "Birthday is required"] 
	},
	email: {
		type: String,
		required: [true, "Your email is required"],
		unique: [true, "Email is already taken. Please login."],
		validate: {
			validator: function(value) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
			},
			message: "You have entered an invalid email"
		}
	}
}, { timestamps: true });



//Custom Methods
UserSchema.methods = {
	encryptPassword: function(next){
		var user = this;
		bcrypt.hash(user.password, 10)
		.then( function(hashed_password){
			user.password = hashed_password;
			next();
		});
	}
}

UserSchema.path('email').validate( function(value, done){
	this.model('User').count({ email: value }, function(err, count){
		if (err) {
			return done (err);
		}
		//If 'count' > 0, 'invalidate'
		done(!count)
	});
}, 'Email already exists');

UserSchema.pre('save', function(next){
	let user = this;
	user.encryptPassword(next);
});

module.exports = mongoose.model('User', UserSchema)
