//Challenge 1
let students = [
	{name: 'Remy', cohort: 'Jan'},
	{name: 'Genevieve', cohort: 'March'},
	{name: 'Chuck', cohort: 'Jan'},
	{name: 'Osmund', cohort: 'June'},
	{name: 'Nikki', cohort: 'June'},
	{name: 'Boris', cohort: 'June'}
];
for(let x in students){
	console.log("Name: " + students[x].name + ", " + "Cohort: " + students[x].cohort);
}


//Challenge 2
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

for(let y in users){
	console.log(y.toUpperCase());
	var z = users[y];
	for(var i = 0; i < z.length; i++){
		n = i + 1 + ` - ${z[i].last_name}, ${z[i].first_name} - ${z[i].last_name.length + z[i].first_name.length}`;
		console.log(n.toUpperCase());
	}
}
