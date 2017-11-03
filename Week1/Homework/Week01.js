//Q1
let arabic="اهلا وسهلا بالعالم";
let english="welcome world";
let spanish="Hola, mundo!";
let italian="Ciao, mondo!";
console.log(arabic,english,spanish,italian);
console.log(arabic);
console.log(english);
console.log(spanish);
console.log(italian);
//Q2
console.log("'I'm awesome'");
//Q3
let x=10;
let vx="the value of my X will be:"
console.log(vx,x);
x=x+5
console.log(vx,x);
//Q4
let y="Mobile";
let vy="the value of my X will be:"
console.log(vy,y);
y="laptop"
console.log(vy,y);
//Q5
const z=7.25;
const a=7;
var s;
console.log("a=",a);
console.log("z=",z);
if (z>a) console.log ("z>a=",z>a)
if (z>a) s=z;
console.log("new s value =",s);
console.log("z<a=",z<a);
//Q6
let myAnimals=["cat","dog","bird","frogs","lion","tiger"];
console.log("my Animals are",myAnimals);
let Daans="baby pig";
console.log("Daan animal is",Daans  )
let newAnimals=[myAnimals,Daans];
console.log("my Animals and Daans animal are",newAnimals);
//Q7
let myString = "this,is,a,test";
console.log(myString);
console.log("my string length is",myString.length);
//Q8
let first="1st";
let second=2;
let third="3rd";
let fourth=4;
console.log(first,second,third,fourth);
console.log(typeof first,typeof second,typeof third,typeof fourth);
if (typeof first===typeof second) console.log ("the type of first and second: SAME TYPE");
else console.log ("the type of first and second:DIFFERENT TYPE");
if (typeof first===typeof third) console.log ("the type of first and third: SAME TYPE");
else console.log ("the type of first and third:DIFFERENT TYPE");
if (typeof first===typeof fourth) console.log ("the type of first and fourth: SAME TYPE");
else console.log ("the type of first and fourth:DIFFERENT TYPE");
if (typeof second===typeof third) console.log ("the type of second and third: SAME TYPE");
else console.log ("the type of second and third:DIFFERENT TYPE");
if (typeof second===typeof fourth) console.log ("the type of second and fourth: SAME TYPE");
else console.log ("the type of second and fourth:DIFFERENT TYPE");
//Q9
x=7;
console.log ("x =",x);
x =  x % 3;
console.log ("x =",x);
y=133;
console.log ("y =",y);
y =  y % 4;
console.log ("y =",y);

//Q10
let testArray=["mobile",12,"TV",102,"tree",x];
console.log ("yes we can store multi types in an array","my array is ",testArray);
let c = 6/0;
let b =10/0;
if (c===b) console.log("possible to compare infinities");
else console.log ("not possible");
