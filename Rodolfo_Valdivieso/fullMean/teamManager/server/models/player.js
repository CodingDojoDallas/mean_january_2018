var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-as-promised');
//var bcrypt = require('bcryptjs');
var PlayerSchema = new mongoose.Schema({
    name: { type: String, 
    			  required: [true, "Name is required"], 
    			  minlength: 2, 
    			  maxlength: 200,
    			  trim: true
    			},
    position: { type: String, 
                  maxlength: 200,
                  trim: true
                },
    status1: { type: Boolean },
    status2: { type: Boolean },
    status3: { type: Boolean }

}, {timestamps: true });


PlayerSchema.pre('save', function(done){
	// var salt = bcrypt.genSaltSync(10);
	// var hash = bcrypt.hashSync(this.password, salt);
	// this.password = hash;
	done();
});

var Player = mongoose.model('Player', PlayerSchema);