//Question no = 01;
document.getElementById("task1").innerHTML="This is exp1.JS.";
// console.log("This is exp1.js.");

//Question no = 02;
var firstName = "Ammad"
var lastName = "khan"
var fullName =firstName+" "+lastName;
var dateOfBirth="2000"
var currentYear= new Date().getFullYear();
var age =  currentYear-dateOfBirth;
// var age = 23;
document.getElementById("task2").innerHTML = `Hy my name is ${fullName} I'm, ${age} age,"years old and i'm learning Javascript.`;
// console.log("Hy my name is",fullName,"I'm",age,"years old and i'm learning Javascript.");

//Question no = 03;
const number1 = 101; 
const number2 = 7;
const Average = number1/number2;
document.getElementById("task3").innerHTML= `The average of two number with two decimals places is:${Average.toFixed(2)}`;
// console.log(Average.toFixed(2));

//Question no = 04;
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

// phone1=phone1.toString();
// phone1=phone2.toString();
// phone1=phone3.toString();

if(phone1.length === 9) {
    document.getElementById("statement1").innerHTML = `Phone Number ${phone1} is valid`;
}
else {
    document.getElementById("statement1").innerHTML = `Phone Number ${phone1} is invalid`;
}
if(phone2.length === 9) {
    document.getElementById("statement2").innerHTML = `Phone Number ${phone2} is valid`;
}
else {
    document.getElementById("statement2").innerHTML = `Phone Number ${phone2} is invalid`;
}
if(phone3.length === 9) {
    document.getElementById("statement3").innerHTML = `Phone Number ${phone3} is valid`;
}
else {
    document.getElementById("statement3").innerHTML = `Phone Number ${phone3} is invalid`;
}

//Question no = 05; 
var power = Math.pow(32,6);
document.getElementById("task4").innerHTML= `The power of 32*6 is : ${power}`;
// console.log(power);

//Question no = 06; 
var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);

    //Question no = 08;
    
    var url = "www.udemy.com"; 
    document.getElementById("links1").innerHTML=`The www.udemy.com is replaced by :: ${url.replace("www.udemy.com","https://www.udemy.com")}`
    var url = "https://www.udemy.com"; 
    document.getElementById("links2").innerHTML=`The https://www.udemy.com is replaced by  :: ${url.replace("https://www.udemy.com","www.udemy.com")}`