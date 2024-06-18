// let a = 0;    initalization 
// while(a<=10){       condition
//     console.log(a); 
//     a++;              incremental decremental
// }

// let b = 10;
// while(b>=0){
//     console.log(b);
//     b--;
// }


// a=0;
// while(a<=10)
//  {
//     if(a==5){
//         // break stop the program execution
//         break;     
//     }
//     console.log(a);
//     a++
//  }


// let c=1;
// while(c<10){
//     if(c==5){
//         c++;
//         continue
//     }
//     console.log(c)
//     c++;
// }

// let i=1;
// while(i<10){
//     if(i%5==0){
//         i++;
//         continue;
//     }
//     if(i==5){
//         break;
//     }
//     console.log(i)
//     i++;
// }

// // loop in string
// let data="shiavni panchal"
// let i=0;
// while(data.length>i){
//     if(data[i]=="s" || data[i]=="p"){
//         i++;
//         continue
//     }
//     console.log(data[i])
//     i++;
// }


// nesting while loop
let a=0;
while(a<3)
    {
        console.log(a)
        a++;
    
        let b=0;
        while(b<=5){
            console.log(b)
        b++;
        }
    }