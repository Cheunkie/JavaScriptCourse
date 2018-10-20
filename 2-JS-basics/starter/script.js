/*jslint devel: true */
////////console.log("Script Loaded!");
////////
////////console.log("Hello World!"); 
////////var firstName = 'John';
////////console.log(firstName);
////////var lastName = 'Smith';
////////var age = 38;
////////
////////var fullAge = true;
////////console.log(fullAge)x
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

//var tipAmmount = [];
//var finalAmmount = [];
//
//var tipCalculator = function(price)
//{
//    if(price < 50){
//        var tip = price * 20/100
//         finalAmmount.push(price + tip) 
//        tipAmmount.push(tip);
//    }else if ( price > 50 && price < 200){
//        var tip = price * 15/100
//         finalAmmount.push(price + tip) 
//        tipAmmount.push(tip);
//    }else if(price > 200){
//        var tip = price * 10/100
//         finalAmmount.push(price + tip) 
//        tipAmmount.push(tip);
//    }
//}
//
////var finalCalculator = function(bill){
////var originBill = bill;
////    finalAmmount.push(originBill + tipCalculator(bill)); 
////}
//
//tipCalculator(124);
//tipCalculator(48);
//tipCalculator(268);
//console.log(tipAmmount);
//console.log(finalAmmount);


//
//var tipCal = function(bill){
//    var price;
//    if(bill < 50){
//       price = bill * .2;
//    } else if(bill >= 50 && bill < 200){
//      price = bill * .15;
//    } else{
//       price= bill *.1;
//    }
//    return price;
//}
//var priceAmount = [124,48,268];
//var tipAmmount = [tipCal(124),tipCal(48),tipCal(268)];
//
//console.log(tipAmmount[]);
//console.log(priceAmount[0]+tipAmmount[0],priceAmount[1]+tipAmmount[1],priceAmount[2]+tipAmmount[2]);


//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane','Mark','Bob','Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//console.log(john);
//console.log(john.isMarried);
////
////
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
////
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
//
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1980,
//    family: ['Jane','Mark','Bob','Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function(birthYear) {
//        this.age = 2018 - this.birthYear;
//    }
//};
//
//john.calcAge();
//console.log(john);

//var john = {
//    fullName : 'John Smith',
//    BMI : 0,
//    mass : 60,
//    height : 1.80,
//    calBMI : function(mass,height){
//    this.BMI = this.mass / (this.height * this.height);
//        return this.BMI;
//    }
//}
//
//var mark = {
//    fullName : 'Mark Smith',
//    BMI : 0,
//    mass : 70,
//    height : 1.70,
//    calBMI : function(mass,height){
//    this.BMI = this.mass/(this.height * this.height);
//        return this.BMI;
//    }
//}
//
//john.calBMI();
//mark.calBMI();
//
//if (mark.BMI > john.BMI){
//    console.log("Mark BMI is higher then John with score of " + mark.BMI);
//}else if(john.BMI > mark.BMI){
//    console.log("John BMI is higher then Mark with score of " + john.BMI);
//}else if(john.BMI == mark.BMI){
//    console.log("Both John and Mark BMI score are the same with John "+ john.BMI + " and Mark "+ mark.BMI);
//}else{
//    console.log("Something else");
//}

//for(var i = 0; i <= 20; i+= 2){
//    console.log(i);
//}


//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = 0; i < john.length; i++){
//    if (typeof john[i] !== 'string') break;
//    console.log(john[i]);
//    console.log(i);
//}
//var i = 0;
//while(i < john.length){
//      console.log(john[i]);
//    i++;
//      }
//
//for(var i = john.length - 1; i > 0; i-- ){
//    console.log(john[i]);
//}


var john = {
    fullName : "John Smith",
    bills : [124,48,180],
    tipArray : [],
    Total : [],
    //could move these arrays inside the function
    calTip : function(){    
            var percent; 
            //initialise the arrays here
    for(var i = 0; this.bills.length > i; i++){ 
        if(this.bills[i] >= 50) {
            //can make a variable that is equal to this.bills: var bill = this.bills[i];
            percent = 0.2;
        }else if(this.bills[i] > 50 && this.bills[i] < 200){
            percent = 0.15;
        }else if(this.bills[i] > 200){
            percent = 0.10;
        }
        //could change the method to this.tipArray[i] = bills* percentage;
        //and this.Total[i] = bill + bill * percentage;
            this.tipArray.push(percent * this.bills[i]);
            this.Total.push(this.tipArray[i]+this.bills[i]);
            }
        console.log(this.tipArray);
        console.log(this.Total);
        }
    };
 



//////////////////////////Mark's family
var mark = {
    fullName : "Mark Miller",
    bills : [77,375,110,45],
    calTip : function(){    
            
                this.tipArray = [];
                this.Total = [];
        
    for(var i = 0; this.bills.length > i; i++){ 
        var percentage;
        var bill = this.bills[i];
        if(bill < 100) {
            percent = 0.2;
        }else if(bill > 100 && bill < 300){
            percent = 0.1;
        }else if(bill > 300){
            percent = 0.25;
        }
            this.tipArray[i] = percent * bill;
            this.Total[i] = bill + bill * percent;
            }
        console.log(mark);
        }
    };

////Calculating average tip
var avgTip = function(tips){
    var sum = 0;
    for(var i = 0;tips.length > i; i++){
        sum = sum+ tips[i];
    }
    return sum / tips.length;
}
//calculate average; 
john.calTip();
mark.calTip();
console.log(john);
john.average = avgTip(john.tipArray);
mark.average = avgTip(mark.tipArray);

if (john.average > mark.average){
    console.log("John has higher average on tip " + john.average);
}else if(mark.average > john.average){
    console.log("Mark has higher average on tip "+ mark.average);
}else {
    console.log("Both have equal average on tip");
}
