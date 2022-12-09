let students = [`Elen`,`Sam`,`Piolo`,`Dingdong`,`Pia`, `Barbie`, `Jessie`, `Luis`, `Robi`, `Marian`];
//1.use loop to console.log all the students
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
   

//2. Remove Robi from the array
 let del = students.splice(8,1);
    console.log(students);

//3.find where Pis is located
let find = students.indexOf("Pia", 0);
console.log(find);


//4. Add my name to the end of the array 
const add = students.push(`Fatima`);
console.log(students);


// 5. Unsure of this command for the number 5
const girls = students.filter(checkGirls);
console.log(students);

function checkGirls(girls){

    return students = [`Elen`, `Sam`, `Pia`, `Barbie`, `Jessie`, `Fatima`];
}


// 5. Write the command that return all the girls name in the array of students
let student = [ 
    {name: `Elen` , gender: `Female`},
    {name: `Sam` , gender: `Female`},
    {name: `Piolo` , gender: `Male`},
    {name: `Dingdong` , gender: `Male`},
    {name: `Pia` , gender: `Female`},
    {name: `Barbie` , gender: `Female`},
    {name: `Jessie` , gender: `Female`},
    {name: `Luis` , gender: `Male`},
    {name: `Robi` , gender: `Male`},
    {name: `Marian` , gender: `Female`},
    
]

let female = student.filter(fem => fem.gender == `Female`);

console.log(female);


let hname = 'joseprizal';
let newName = hname.substring(4, 5)
console.log(hname);