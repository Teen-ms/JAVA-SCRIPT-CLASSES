// conditional statement / decision making statement (if, else, elseif , nested)

// if(condition)
// {
//   // code to be exceuted
// }
1.  //  if (true){
//     console.log(" I m Javascript");
//  }

2.  //  let n=0;
//  if(n){
//     console.log("Dremer infotech")
//     console.log("positive babita")
//  }

user_name="shivani"
user_mob=786896578687;
user_addhar=65874598479759;
usedr_address="faridabad"
            // false            false                       false
if(user_addhar.Length==10 || usedr_address.Length==12 && user_mob.Length==15)
{
    console.log("Ticket Book")
}
else{
    console.log("Ticket is not book")
}


// program License

var Name="shivani"
var Mobile_no=9958602879;
var Addhar_no=123456789012;
var pen_card=55878908786878;
var Address="Faridabad";
if(Name.length=5 && pen_card && Addhar_no && Mobile_no && Address)
    {
        console.log("Your License Details is Ok")
    }
    else{
        console.log("Your License Details is not ok")
    }

    // Input/ Output
    // promot is a built-in  function that allow to display a dilog box to the user and prompt them for input 
    let num= Number(prompt("Enter your Number 1;"))
    let num2= Number(prompt("Enter your Number 2;"))
    let res=num+num2
    document.write(`The sum of ${num} and ${num2} is ${res}`);

    