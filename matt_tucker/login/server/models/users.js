var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-as-promised');

// Schema
var UserSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: [true, 'First Name is required.'] 
    },
    last_name: { 
        type: String, 
        required: [true, 'Last Name is required.'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required.'],  
        unique: [true, 'Email is already taken. Please log in.']
    },
    dob: { 
        type: Date 
    },
    password: { 
        type: String, 
        required: [true, 'Password is required.']
    },
    quotes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Quote' 
    }]
}, { timestamps: true });


// Custom Methods
UserSchema.methods = {
    encryptPassword: function(next) {
        let user = this;

        bcrypt.hash(user.password, 10)
        .then( (hashed_password) => { 
            user.password = hashed_password;

            next();
        });

    },
    authenticate: function(password) {
        var user = this;
    },
    full_name: () => {
        return `${this.first_name} ${this.last_name}`;
    }
}

// UserSchema.path('email').validate(function(value, done) {
//     this.model('User').count({ email: value }, function(err, count) {
//         if (err) {
//             return done(err);
//         } 
//         // If `count` is greater than zero, "invalidate"
//         done(!count);
//     });
// }, 'Email already exists');

// Before Save
UserSchema.pre('save', function(next) {
    let user = this;

    user.encryptPassword(next);
});

module.exports = mongoose.model('User', UserSchema);
