// console.log("hello world");
const person = new Object();
person.fname = "Jeevan";
person.lname = "Tamang";
person.age = 21;
document.getElementById("demo").innerHTML = person.fname + person.lname + person.age;
function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(80, "Jeevan", 50000);