
//Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let x in students){
	//console.log(x)
	//console.log(students[x].name)
	console.log("Name: "+students[x].name+", Cohort: "+students[x].cohort);
}

//Challenge 2
console.log("******")
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
for (let x in users){
	console.log(x.toUpperCase())
	//console.log(users[x])
	for (var i=0;i<users[x].length;i++){
		console.log((i+1)+" - "+users[x][i].last_name.toUpperCase()+", "+users[x][i].first_name.toUpperCase()+" - " +(users[x][i].first_name.length + users[x][i].last_name.length) )
		//console.log(x[y].first_name)
	}
}
