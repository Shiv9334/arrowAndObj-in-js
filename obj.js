const student = {
    name : "Rahul",
     age : 22,
     occupation : "Student",
     greet() {
        console.log('My name is' + this.name);
     }
}
student.greet();
console.log(student);