
var mongoose = require('mongoose');
var User   = mongoose.model('User');
var ObjectId = require('mongodb').ObjectId;
var moment   = require('moment');

module.exports = {

	index: function(req, res) {
		res.render("session");

	},
	main: function(req, res) {
		res.render("result");

	},

	create: function(req, res) {
		var user = new User(req.body);
		if(req.body.password != req.body.password_confirm){
			return res.render("session", 
					{
				      errors:
				          {
				          schemaInThing_that_had_error:
				              {
				                message:"Password doesn't match password_confirm",
				                kind:"what didn't work",
				                path:"reference to the schema's name",
				                value:"cause of the initial error"
				              }
				          },
				      name: "Validation error"
				      }

				);
		}

	    user.save(function(err){
	        if(err){
	            console.log(err);
	            return res.render("session", err);
	        }
	        
	        res.redirect('/main');
	       
	    });
	},

	login: function(req, res) {
		var bcrypt = require('bcryptjs');
		pass = req.body.password;

		var user = User.findOne({email:req.body.email}, function(err, user) {
	    	if(err){
	    		console.log(err);
	    		res.render("session", err)
	    	}
	    	else if(user==null){
	    		console.log("Invalid Email")
	    		res.render("session", {
				      errors:
				          {
				          schemaInThing_that_had_error:
				              {
				                message:"Invalid Email",
				              }
				          },
				      name: "Validation error"
				      }
				      )
	    	}
	    	else{
	    		//console.log(bcrypt.compareSync(pass, user.password));
	    		if(bcrypt.compareSync(pass, user.password)){
	    			//Valid email and password
	    			//set session with user ID.
	    			res.redirect("/main");
	    		}
	    		else{
	    			//invalid password
	    			console.log("Invalid Password")
	    			res.render("session", 
		    				{
					     	 errors:
					          {
					          schemaInThing_that_had_error:
					              {
					                message:"Invalid Password",
					              }
					          },
					      name: "Validation error"
					      }			
				      )
	    		}
	    	}
	    	
	    })

	}


}