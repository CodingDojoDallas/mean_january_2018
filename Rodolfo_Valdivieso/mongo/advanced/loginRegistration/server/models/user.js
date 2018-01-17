var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-as-promised');
var bcrypt = require('bcryptjs');
var UserSchema = new mongoose.Schema({
    first_name: { type: String, 
    			  required: [true, "First Name is required"], 
    			  minlength: 2, 
    			  maxlength: 200,
    			  trim: true
    			},
    last_name:  { 
    			  type: String, 
    			  required: [true, "Last Name is required"], 
    			  minlength: 2, 
    			  maxlength: 200,
    			  trim: true
    			},
    email:      { 
    			  type: String, 
    			  required: [true, "Email is required"],  
    			  unique:true,
    			  validate: {
			        validator: function( value ) {
			          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
			        },
			        message: "Email failed validation"
			      }
    			},
    password:   {
    			  type: String,
			      required: [true, "Password is required"],
			      minlength: 8,
			      maxlength: 32,
			      validate: {
			        validator: function( value ) {
			          	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			      	  
			        },
			        message: "Password failed validation, you must have at least 1 number, uppercase and special character and password must match confirmation"
			      }
    			},
    birthday:   {
    			  type: Date,
			      required: [true, "Birthdate is required"]
   			    }

}, {timestamps: true });


UserSchema.pre('save', function(done){
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(this.password, salt);
	this.password = hash;
	done();
});

var User = mongoose.model('User', UserSchema);