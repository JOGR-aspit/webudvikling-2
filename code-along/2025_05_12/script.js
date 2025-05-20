console.log("Hello AspIT!");

let firstName = "Jonas";
var lastName = "Greve";

console.log("Hello " + firstName + " " + lastName);

firstName = "Kasper";
lastName = "Jacobsen";
console.log("Hello " + firstName + " " + lastName);

const pi = 12;
console.log(pi);

if (pi == 3.14) {
  console.log("Pi is 3.14");
} else if (pi == 10 ) {
  console.log("Pi is 10");
} else {
  console.log("Pi is not 3.14 or 10");
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today is " + day);

//Input a number, the age of a person
//If person is under 18, print "You are a minor"
//If person is between 18 and 65, print "You are an adult"
//If person is over 65, print "You are a senior citizen"