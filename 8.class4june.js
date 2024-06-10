// nested condition is  if statement used with in if statement 
// -------------------------Program-----------------------------
// Program fot B.tech admission 
// let name= shivani 
// let 12 pass
// pcm
// enterance exam 


let stu_name="shivani"
if(stu_name){
    console.log("student is applied for B.tech")

    let matrix_12=70
    if(matrix_12>=60){
       console.log("Student is pass in 12 class")

       let stream="PCM"
       if(stream=="PCM")
        {
            console.log(stu_name,"Student has PCM")

            let counsling="pass"
            if(counsling=="fail"){
                console.log(stu_name,"Enterence exam pass")
            }
            else{
                console.log(stu_name,"Enterence exam is not pass")
            }
        }
        else{
            console.log(stu_name,"student has not pcm")
        }
    }
    else{
        console.log(stu_name,"student is not passed")
    }
}

else{
    console.log("Student not provided")
}