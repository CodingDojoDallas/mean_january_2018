var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-as-promised');
//var bcrypt = require('bcryptjs');
var NoteSchema = new mongoose.Schema({
    content: { type: String, 
    			  required: [true, "Content is required"], 
    			  minlength: 2, 
    			  maxlength: 200,
    			  trim: true
    			}

}, {timestamps: true });


NoteSchema.pre('save', function(done){
	// var salt = bcrypt.genSaltSync(10);
	// var hash = bcrypt.hashSync(this.password, salt);
	// this.password = hash;
	done();
});

var Note = mongoose.model('Note', NoteSchema);