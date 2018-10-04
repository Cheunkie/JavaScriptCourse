////////console.log("Script Loaded!");
////////
////////console.log("Hello World!"); 
////////var firstName = 'John';
////////console.log(firstName);
////////var lastName = 'Smith';
////////var age = 38;
////////
////////var fullAge = true;
////////console.log(fullAge)
//////var x, y;
//////x = y = (3+5)*4 -6;
//////x = x * 2;
////////x *= 2;
//////Precendence, Associativity
//////console.log(x);
////
////
//////var markHeight = 1.80;
//////var markMass = 70;
//////var johnHeight = 1.90;
//////var johnMass = 60;
//////
//////var markBMI = markMass / (markHeight * markHeight);
//////var johnBMI = johnMass / (johnHeight * johnHeight);
//////
//////if (markBMI > johnBMI) {
//////    console.log('mark\'s BMI is higher then John ' + markBMI);
//////}else{
//////    console.log('john\'s BMI is higher then mark ' + johnBMI);
//////                }
////
////var firstName = 'john';
//var age = 12;
////if (age < 16){
////    console.log(firstName + ' is a boy.');
////}else if (age >= 13 && age <= 20){
////    console.log(firstName + ' is a teenager.');
////}else if(age >= 20 && age < 30){
////    console.log(firstName + ' is a young man.')
////}else{
////    console.log(firstName + ' is a man.');
////}
//
//var firstName = 'john';
////var age = 26;
////
////age >= 16 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
////
////var drink = age >= 18 ? 'beer' : 'juice';
////console.log(drink);
////
////if (age >= 18){
////    var 
////    
////}
//
//
//var job = 'teacher';
//switch (job) {
//    case 'teacher':
//        console.log(firstName + ' teaches kids how to code.');
//        break;
//    case 'driver':
//        console.log(firstName + ' drives an uber in Lisabon.');
//        break;
//    case 'designer':
//        console.log(firstName + ' designs beautifulwebsites');
//        break;
//        
//    default:
//        console.log(firstName + ' does something else.');
//}
//
//
//switch(true){
//    case age < 13:
//        console.log(firstName + ' is a boy.');
//        break;
//    case age >=13 && age <20:
//        console.log(firstName + ' is a teenager.');
//        break;
//    case age >= 20 && age < 30:
//        console.log(firstName + ' is a young man.');
//        break;
//    default:
//        console.log(firstName + ' is a man.');
//}



//falsy values: undefined, null, 0, '' ,NaN
//truthy values: not falsy values

//var height;
//
//if(height){
//    console.log('Variable is defined.')
//}else{
//    console.log('Variable is not defined.');
//}

//console.log("Script Loaded!");
//
////console.log("Hello World!"); 
//var firstName = 'John';
//console.log(firstName);
//var lastName = 'Smith';
//var age = 28;
// var fullAge = true;
//console.log(age);
// 
//
//var age;
//console.log(age);
//var firstName = 'John';
//var age = 28;
//
//console.log(firstName + ' ' + age);
//
//var job, married;
//
//job = 'teacher';
//isMarried = 'false';
//
//
//age =  'twenty eight';
//
//job =  'driver';
//var lastName = prompt(firstName + ' ' + lastName + ' is a ' +  age + ' year old ' + job + ' is he married? ' + isMarried);
//console.log(firstName + ' ' + lastName);


//
//var now, yearJohn, yearMark;
//now = 2018;
//ageJohn = 33;
//ageMark = 28;
////Math logicals
//yearMark = now - ageMark;
//yearJohn = now - ageJohn
//
//console.log(yearJohn);
//console.log(yearMark);
//
//console.log(now + 2);
//console.log(now * 2);
//console.log(now / 10);
//
////logical operator
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);
//
//
////typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof 'Mark is older than John');
//var x;
//console.log(typeof x);


//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);
//
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//
//console.log(average);

//var teamJohn = (92 + 120 + 103) /3;
//var teamMike = (116 + 94 + 123) /3;
//var teamMary = (97 + 134 + 105) /3;
//
//console.log(teamJohn);
//console.log(teamMike);
//console.log(teamMary);
//
//if(teamJohn > teamMike){
//    console.log("Team John wins with "+ teamJohn+" points.");
//}else if(teamMary > teamMike){
//    console.log("Team Mary wins with "+ teamMary+" points.");
//}else{
//    console.log("Team Mike wins with "+ teamMike+" points.");
//}





//function calculateAge(birthYear){
//    return 2018 - birthYear;
//}
//
//var ageJohn = calculateAge(1990);
//var ageMike = calculateAge(1948);
//var ageJane = calculateAge(1969);
//console.log(ageJohn, ageMike, ageJane);
//
////DRY, DONT REPEAD YOURSELF
//
//
//function yearsUntilRetirement(year, firstName)
//{
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//    if(retirement > 0){
//        console.log(firstName + ' retires in  '+ retirement + ' years.');
//    }else{
//         console.log(firstName + ' is already retired.');   
//        }
//    
//}
//
//yearsUntilRetirement(1990, "john");
//yearsUntilRetirement(1969, "jane");
//yearsUntilRetirement(1948, "mike");
//
//
//
//statements do NOT inmidetly produce results
//function declaration
//function whatDoYouDo(job, firstName){}

//function expression
//var whatDoYouDo = function(job, firstName)
//{
//    switch(job){
//        case 'teacher':
//            return firstName + " teaches kids how to code.";
//        case 'driver':
//            return firstName+ " drives a cab in Lisabon.";
//        case 'designer':
//            return  firstName+ " design beautiful websites.";
//        default:
//            return firstName + " does something else.";
//    }
//}
//
//
//console.log(whatDoYouDo("designer", "john"));
//
//
//
//
//

//initialize array
//var names = ['John', 'Mark', 'Jane'];
//var years = new Array(1990, 1969, 1948);
//
////mutate array
//console.log(names[2]);
//console.log(names.length);
//names[1] = 'Ben';
//console.log(names[1]);
//
//names[names.length] = 'Mary';
//console.log(names);
//
//
//
//
//var john = ['John','Smith',1990,'teacher',false];
//
//john.push('blue');
//john.unshift('Mr.');
//console.log(john);
//
//john.pop();
//console.log(john);
//john.shift();
//console.log(john);
//
//console.log(john.indexOf(1990));
//
//var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer';
//console.log(isDesigner);

var tipAmmount = [];
var finalAmmount = [];

var tipCalculator = function(price)
{
    if(price < 50){
        var tip = price * 20/100
         finalAmmount.push(price + tip) 
        tipAmmount.push(tip);
    }else if ( price > 50 && price < 200){
        var tip = price * 15/100
         finalAmmount.push(price + tip) 
        tipAmmount.push(tip);
    }else if(price > 200){
        var tip = price * 10/100
         finalAmmount.push(price + tip) 
        tipAmmount.push(tip);
    }
}

//var finalCalculator = function(bill){
//var originBill = bill;
//    finalAmmount.push(originBill + tipCalculator(bill)); 
//}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);
console.log(tipAmmount);
console.log(finalAmmount);

