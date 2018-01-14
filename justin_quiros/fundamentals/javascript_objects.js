// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// for(let student in students){
	// console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
// }

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

 	console.log("EMPLOYEES");
 	for(let human in users.employees){
 		console.log(`${parseInt(human) + 1} - ${users.employees[human].last_name.toUpperCase()}, ${users.employees[human].first_name.toUpperCase()} - ${users.employees[human].last_name.length + users.employees[human].first_name.length} `);
 	}
 	console.log("MANAGERS");
 	for(let boss in users.managers){
 		console.log(`${parseInt(boss) + 1} - ${users.managers[boss].last_name.toUpperCase()}, ${users.managers[boss].first_name.toUpperCase()} - ${users.managers[boss].last_name.length + users.managers[boss].first_name.length} `);
 	}
 

 // console.log(users.employees[0].first_name)

