
// // part 1
// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];
// for(let student in students){
// 	console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
// }

//part 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
for(let key in users){
	console.log(key.toUpperCase());
	for(let key1 in users[key]){
		let count = key1 + 1;
		let last_name = users[key][key1].last_name;
		let first_name = users[key][key1].first_name;
		let length = users[key][key1].first_name.length + users[key][key1].last_name.length;
		console.log(`${count} - ${last_name}, ${first_name} - ${length}`)
	}
}


// console.log(users.managers)

// // // here is an object literal with four key-value pairs
// let sandwich = {
//     cheese: 'Smoked Gouda',
//     meat: 'Dry-aged Bison',
//     sauce: 'Chipotle Aioli',
//     veggies: 'Caramelized Onions'
// }
// // the variable 'topping' is used instead of an index
// for(let topping in sandwich){
//     // when we log 'topping', we notice it's a key
//     console.log(topping);
//     // when we pass the key to the 'sandwich' object, we can pull values
//     console.log(sandwich[topping]);
// }
