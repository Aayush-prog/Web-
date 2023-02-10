/*console.log("Learning js")
let a=1; b=2; s=a+b;
console.log("The sum is",s)
console.log(typeof(s))
var a=2; b=3; a=a*b;
console.log(a)
a=a*b
console.log(a)
function input(){
    var r=document.getElementById("num").value;
    while (r<0){
        document.writeln("Invalid!");
        document.getElementById("invalid")=r
        r=window.prompt("Enter radius again");

    }
    return r;
}
function calc(r){
    const PI=3.14;
    var c=2*PI*r
    //document.getElementById("cir").innerHTML=c
    document.getElementById("cir").append("Circumference is:",c);
}
calc(input())

const person =new Object();
person.firstName="Jack";
person.lastName="Doe";
person.age=14;

document.getElementById("demo").innerHTML=person.firstName+person.lastName+person.age;

function Employee(id, name , salary){
    this.salary=salary;
    this.id=id;
    this.name=name;
 }
  x= new Employee(2,"anish",123);
  console.log(x.id)*/
  function validation(){
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;
  if (username==''&&password==''){
alert("Either your username or password doesnot has value")
  return false;
}else{
    alert("Thank you")
  }
}
