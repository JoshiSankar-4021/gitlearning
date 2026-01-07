console.log("hello world");

//var,let,const  - variable types
// var a = 10;
// console.log(a);
// a="hello";
// console.log(a);
// a=1.5;
// console.log(a);
// a=true;
// console.log(a);

let a = 10;
console.log(a);
a="hello";
console.log(a);
a=1.5;
console.log(a);
a=true;
console.log(a);


const b = true;
console.log(b);

var num1=10;
var num2=20;
var num3
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1+=num2)

if(10==="10"){
    console.log("if condition")
}else{
    console.log("else statement")
}
var expression=9;

switch(expression){
    case 10:
        console.log("expression is 10");
        break;
    case 11:
        console.log("expression is 11");
        break;
    default:
        console.log("none of the above")
        break;
}


var arr =[1,2,3,4,5,6,7,8,9,"hello",'hello',`hello`,7.8,false];
console.log(arr);
//push
arr.push("hello world");
console.log(arr);
arr.unshift(true);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);



for(let i=0;i<=10;i++){
    console.log(i);
}

let i=0;
while(i<=10){
    console.log(i);
    i++;
}

//object
var obj={
    name:'joshi',
    dob:'15-08-2000',
    age:26
};

console.log(obj.name);
console.log(obj.dob);
console.log(obj.age);

var arr1=[{name:'joshi',dob:'15-08-2000',age:26},
    {name:'Nani',dob:'01-01-2001',age:25}];
console.log(arr1);

function name(){
    console.log("this is name function");
}
name();
function name1(age,dob){
    console.log(age);
    console.log(dob);
}
name1(10,'10-10-2000');

name2=()=>{
    console.log("arrow functions")
}
name2();
name3=(age,dob)=>{
    console.log(age);
    console.log(dob);
}
name3(10,'10-10-2000');



