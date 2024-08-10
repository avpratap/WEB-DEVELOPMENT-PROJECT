/*alert("Hello");
alert("World");
alert(1+2+3);
prompt("What is your name?");
var myname = "Pratap";
var yourname = prompt("What is your name?");
alert("My name is " + myname + ", welcome to my course " + yourname + "!");
alert("Hello" + "world");
alert("Hello" + " " + "world");
alert("Hello " + "world");
var message = "Hello";
var myname = "Pratap";
alert(message + " " + myname);
alert(message + " there, " + myname);
var paragraph = prompt("Write a mini blog?");
var paragraphCount = paragraph.length;
alert("You have written "+ paragraphCount +" character, you have "+ (140 - paragraphCount) +" character left.");

*/



//var paragraph = prompt("Write a mini blog?");
//var paragraphCount = paragraph.length;
//alert("You have written "+ paragraphCount +" character, you have "+ (140 - paragraphCount) +" character left.");

//var name = "Pratap";
//name.slice(0,1);
//name.slice(5,6);
//name.slice(0,5);


//var paragraph = prompt("Write a mini blog?");
//var paragraphunder140 = paragraph.slice(0,140);
//alert(paragraphunder140);


//var myname = "Pratap";
//myname = myname.toUpperCase();
//myname = myname.toLowerCase();
//var name = prompt("What is your name?");
//var first = name.slice(0,1);
//var first1 = first.toUpperCase();
//var second = name.slice(1,name.length);
//var second1 = second.toLowerCase();

//alert("Hello " + first1 + second1);

//var dogAge = prompt("How old is your dog?");
//var humanAge = ((dogAge - 2) * 4) + 21;
//alert("Your dog is "+ humanAge + " years old in human years." );



/*function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    var bottles = Math.floor(money/1.5);
  console.log("Buy " + bottles + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

    return money % 1.5;
}



var change = getMilk(4);
console.log(change);

*/



/*function lifeInWeeks(age) {

    var Days = (365*90) - (age*365);
    var Weeks = (90*52) - ( age*52);
    var Months = (90*12) - (age*12);
    console.log("You have " + Days + " days, " + Weeks + " weeks " + " and " + Months + " months left.")

}

lifeInWeeks(56);   */





/*function bmiCalculator(weight, height){
    return weight/Math.pow(height, 2);
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

*/


/*var n = Math.random();
n = n*6;
n = Math.floor(n) + 1;
console.log(n);

*/




/*prompt("What is your name?");
prompt("What is their name? ")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
alert("Your love score is " + loveScore + "%");
*/


/*prompt("What is your name?");
prompt("What is their name? ")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
if(loveScore > 70){
    alert("Your love score is " + loveScore + " hnvbdscxvmnbsdMBDsdmnvcx ")
   
}else{
alert("Your love score is " + loveScore + "%");

}

*/

/*var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
if(loveScore > 70){
    alert("Your love score is " + loveScore + " hnvbdscxvmnbsdMBDsdmnvcx ")
   
}
if(loveScore >30 && loveScore<=70){
    alert("Your love score is " + loveScore + " nmbcnvnmb,,.mdgfnd,xcvmcxz ")
}
if(loveScore < 30){
    alert("Your love score is " + loveScore + " vbfnd,mbfd,.fzxnvb mzfx v")
}

*/


/*function bmiCalculator(weight, height){
    var BMI = weight/Math.pow(height, 2);
    if(BMI < 18.5){
        return "Your BMI is " + BMI + ", so you are underweight."; 
    }
    if(BMI >= 18.5 && BMI <= 24.9){
        return "Your BMI is " + BMI + ", so you are normal weight.";
    }
    if(BMI > 24.9){
        return "Your BMI is " + BMI + ", so you are overweight."; 
    }
    
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


*/

/*function isLeap(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if( year % 400 ===0){
                return "Leap year.";
            }
            
        }
        else{
            return " Leap year.";
        }
        
    }
    else{
        return "Not leap year.";
    }
}

var ab = isLeap(2000);
console.log(ab);

*/

/*var guestList = ["aman","azad","kapil","pratap","baba","nandu"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[4]);

*/

/*var guestList = ["aman","azad","kapil","pratap","baba","nandu"];
var guestName = prompt("What is your name?");
guestList.includes(guestName);

*/

/*var guestList = ["aman","azad","kapil","pratap","baba","nandu"];
var guestName = prompt("What is your name?");
if(guestList.includes(guestName)){
    console.log("Welcome!");
}
else{
    console.log("Sorry");
}


*/


/*var OUTPUT = [];
var COUNT = 1;
function FIZZBUZZ() {
    OUTPUT.push(COUNT);
    COUNT++;
    console.log(OUTPUT);
    
}
*/


/*function add(num1,num2) {
    return num1 + num2;
}

function sub(num1,num2) {
    return num1 - num2;
}

function mul(num1,num2) {
    return num1 * num2;
}

function div(num1,num2) {
    return num1 / num2;
}

function calculator(num1,num2,operator) {
    return operator(num1,num2);
}

*/


/*var houseKeeper1 = {
    yearOfExperience: 12,
    name: "Amit",
    cleaningReport: ["bathroom", "lobby","bathroom"]
}
*/

function HouseKeeper(yearOfExperience,name,cleaningReport) {
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningReport = cleaningReport
}