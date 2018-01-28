1.8 - Primitive datatypes pass by value
Non-primitive datatypes pass by reference

======String interpolation=====
let firstName = "Oscar";
let lastName = "Vazquez";
let message = `Hello, my name is ${firstName} ${lastName}`;
// Take note of the backticks instead of quotes
console.log(message);
===============================
1.9 - OOP
immediate function -- Look this up

var cat = new Cat('Fluffy')
methods are functions within classes

this.walk = function(){
	console.log('walking');
}

cat.walk()

.prototype 

Cat.prototype.walk = function()
{
	console.log('walking');
}

Cat.prototype = { lots of functions }

{} = Object

ES6 Way of doing things

prototype is automatic as such:

class Cat {
	constructor

}

class Cat extends Animal{

the this problem:
let self = this;

self.name IS the new reference call
}

1.10 - Advanced concepts

-- Callback
$(document).ready(function()){};

.ready is a method of the $document object;

callback - passing a //function as an arguement
why? To make an event-based system

-- Closure
closure is when you return a //function

-- Immediate functions

function Cat(name)
{
	(function (name)
	{
		this.name;
	})
	(name);
}

var _ = (function()
{
	var i = 3;
})();

iteratee - iterative function
//predicate - true/false check//

-- Node

click makes POST request to localhost 6000/submit (request to server)
Server - if I see "submit" in URL, run submit method
Node will build out a response to send to the browser
Examples: request body, return response "..."

1.11

templates for express = .ejs

npm init -y

1.12

focus on operators

1.16
required [true, "Name is required"]

, {timestamps: true}

_id
ninja._id
Name: <a href="/ninas/<%= ninja._id %>"

app.get('ninjas/:id', (req, res))
//for getting one object
Ninja.findOne({_id: req.params.id}, (err, data ninja) =>{
	if(err){
		console.log(err);
	}
	return res.render('show', {key: data ninja});
})

===Associations
- Make new Schema 
- add attributes
- link it 

===Modularization
- plug and play