var mySubmit = document.querySelectorAll('input')[1];

function reverse(number){
    var ans ="";
    for(var i = number.length-1;i>=0;i--) ans+=number[i];
    return ans;
}
function checkDecimal(number){
   
    for(var i=0;i<number.length;i++){
        var value = parseInt(number[i]);
      //  console.log(value);
        if(0<=value && value<=9){
            
        }else{
            return 0;
        }
    }
    return 1;
}

function convertBinary(number){
    var value = parseInt(number);
    console.log(value);
    var res ="";
    while(number>0){
        //console.log(number + " "+ number%2);
        res+=(number%2);
        number/=2;
        number = Math.floor(number);
    }
   return reverse(res);
}

function convertDecimal(number){
    var res=0;
    var cnt=0;
    for(var i = number.length-1;i>=0;i--){
        res = res + Math.pow(2,cnt)*parseInt(number[i]);
        cnt++;
    }
    return res;
}
function convertOctal(number){

    var res="";
    if(number.length%3!=0){
        while(number.length%3!=0) number = "0"+number;
    }
    for(var i = number.length-1;i>=0;i-=3){

        res = res + convertDecimal(number[i-2]+number[i-1]+number[i]);
    }
    return reverse(res);


}
function convertHexal(number){

    var res="";
    if(number.length%4!=0){
        while(number.length%4!=0) number = "0"+number;
    }
  //  console.log(number);
    for(var i = number.length-1;i>=0;i-=4){

       var value = convertDecimal(number[i-3]+number[i-2]+number[i-1]+number[i]);
      // console.log(value);
       if(value === 10) res+="A";
       else if(value===11) res+="B";
       else if(value===12) res+="C";
       else if(value===13) res+="D";
       else if(value===14) res+="E";
       else if(value===15) res+="F";
       else res+=value;
    }
    return reverse(res);


}
mySubmit.addEventListener('click',function(event){
    event.preventDefault();
    var number = document.querySelectorAll('input')[0].value;
    if(number[0]==0){
        alert("You have to enter a decimal number");
    }
    else if(!checkDecimal(number)){
       // number = number+"0";
       alert("You have to enter a decimal number");
    }
    else{
        
        var binaryNumber = convertBinary(number);
        var octalNumber = convertOctal(binaryNumber);
        var hexalNumber = convertHexal(binaryNumber);
        var myDiv = document.querySelectorAll('div')[1];
        myDiv.className = "show-ans";
        var textBinary = document.getElementById('Binary');
        textBinary.innerHTML= " "+binaryNumber;
        var textOctal = document.getElementById('Octal');
        textOctal.innerHTML= " "+octalNumber;
        var textHexa = document.getElementById('Hexa');
        textHexa.innerHTML=" "+hexalNumber;

        //var res = convertDecimal(binaryNumber);
       // console.log(binaryNumber+" "+octalNumber+" "+hexalNumber);
    }
});