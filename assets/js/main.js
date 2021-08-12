// Level 1_3
let i = 1;         
let lastName = "Johnson";
let j = "2";
let status=true;
let hello="hello";
let helloWorld = "hello";

console.log(typeof(i))
console.log(typeof(lastName))
console.log(typeof(j))
console.log(typeof(status))
console.log(typeof(hello))
console.log(typeof(helloWorld))


//Level 1_4

console.log(typeof("john")) //string
console.log(typeof(3.14))  //number            
console.log(typeof(NaN))  //number             
console.log(typeof(false)) //bolean
console.log(typeof([1,2,3,4]))   //object              
console.log(typeof({name:'John', age:34})) // object
console.log(typeof(new Date())) // object
console.log(typeof(function () {})) // function
console.log(typeof(null)) //object
console.log(typeof("")) //string
console.log(typeof(3+2==5 )) //boolean
console.log(typeof(3 + "3")) //string

// level 1_8
let x=20 
let y=30
console.log(x+y)
console.log(y-x)
console.log(x-y)
console.log(x*y)
console.log(x/y)
let z=10
console.log(x*y/z)

let resultOne= x*y/z
console.log(resultOne)

let a=15
let b=9
console.log(a%b)
let c=20
console.log(a+b*c)
let resultTwo=a+b*c
console.log(resultTwo)
console.log(a++)
console.log(b--)
console.log(a-b)
let resultThree= a-b
console.log(resultThree)
console.log(resultOne%resultTwo)

// lev 1_14
console.log(Boolean(100)) //true
console.log(Boolean(3.14)) //true
console.log(Boolean(-15)) //true
console.log(Boolean("hello")) //true
console.log(Boolean("false")) //true
console.log(Boolean(1 + 7 + 3.14)) //true
console.log(Boolean(0)) //false
console.log(Boolean(-0)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(null)) //false
console.log(Boolean(false)) //false

//lev 1_15
let num=5

let anotherNum=8

console.log(num==anotherNum)
console.log(num>anotherNum)
console.log(num<anotherNum)
console.log(num>=anotherNum)
console.log(num<=anotherNum)

console.log(num=="5") //true
console.log(num!= 8) //true
console.log(num!="5")//false

