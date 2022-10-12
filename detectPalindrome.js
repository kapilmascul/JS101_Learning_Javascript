let palindromecheck=(name)=>{
  
    let bag="";
    for (let i=name.length-1;i>=0;i--){
        bag+=name[i]
    } if(name==bag){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }
    }
    palindromecheck("malayalam");