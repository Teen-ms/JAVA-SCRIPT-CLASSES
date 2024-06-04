// primitive data type
    //1. define data type
    //2. undefine data type
    // 3. Null data type
     
    
    // define 
    // it is also known as define data type 
    // it is use when we declare varibale and assign value 
    var a=10;
    console.log(a)


    // undefine
    // it is also known as undefine data type 
    // is use when we declare variable but do not assign any value to them.
    var p;
    console.log(p)

    // Null
    var a=null;
    console.log(a)
//  example
var a=110;
console.log(a)

// opeartors
//1. Arithmatic Opeators
//2. Logical Opeators
//3. Relational Opeators
//4. Assignement 
//5. Ternary opeartor

// 1. Arithmatic Opeators
var num1=100;
var num2=200;
var res=num1+num2
console.log(`Result of Addition: ${res}`)

// 2. subtract
var res=num1-num2
console.log(`Result of Subtract: ${res}`)

//3. multiply
var res=num1*num2
console.log(`Result of Multiply: ${res}`)

// Divition
var res=num1%num2
console.log(`Result of Division: ${res}`)

// modulus ( it gives the reminder of result)
var res=num1/num2
console.log(`Result of Modulus: ${res}`)

// power 
var n1=2
var n2=5
var res=n1**n2
console.log(`Result of Power: ${res}`)


// logical opeartors(it retrun the value true or false)
// 1.And 2. or 3. not(!)
var n1=2
var n2=5
var res=(n1==2) && (n2==5)
console.log(`Result of And : ${res}`)

// or 
var res=(n1==2) || (n2==5) (n1>=2)||(n2<=5)
console.log(`Result of or : ${res}`)

// not
var res= !(n1==2)
console.log(`Result of not : ${res}`)


// 3. Relational opeartor
console.log("---------------Relational opdeartors------------")
 var A=200;
 var B=300;
 var C=A>B;
 console.log("greator",C)

//  <less
var C=A<B;
console.log("less",C)
// >=
var C=A>=B;
console.log("greator equal",C)
// <=
var C=A<=B;
console.log("less then equal",C)

// ==
var C=A==B;
console.log("equal",C)

//4. Assignement 
console.log("Assignment Opeartor")
n=5;
n=n+5;
console.log(n)

n2=20;
n2=n2-5;
console.log(n2)

n=n=-5;
console.log(n)

n=n=+5;
console.log(n)


//5. Ternary opeartor
let student_name="shivani"
Name=(student_name=="shivani" ? "true": "false")
console.log(Name)

// difference between == and ===
let K=123;
let L="124"
// assign value
console.log(K==L);  
// assign value +type
console.log(K===L);


