var myBtn = document.getElementById('Generate');
function getRandomNumber(min, max) {

    var num = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);

    return num;
}
function createOne(N, A, B) {

    var array = "";

    for (var i = 0; i < N; i++) {
        //  console.log(A + " " + B + " " + radomNumber(A,B));
        array += parseInt(getRandomNumber(A, B)) + " ";
    }

    return array;

}
function createAns(N, A, B, C) {

    var myDiv = document.getElementById('hide');
    myDiv.innerHTML = "";

    for (var i = 0; i < C; i++) {

        var node = document.createElement('div');
        node.className = "sequence-container";

        var button = document.createElement('button');
        button.className = "copy-button";
        button.innerHTML = "Copy";
        button.id=i+1;

        var myBox = document.createElement('div');
        myBox.className = "sequence";
        var value = N + "<br>" + createOne(N,A,B);
        //value += createOne(N, A, B);
        myBox.innerHTML = value;
        myBox.id = "sequence" +(i+1);

        node.appendChild(button);
        node.appendChild(myBox);
        myDiv.appendChild(node);



    }
}

function check(number) {


    return number[0] != 0;

}
function copy(){
    var myButton = document.querySelectorAll('button');
   // console.log(myButton);
    for (var i = 1; i < myButton.length; i++) {
       
        myButton[i].addEventListener('click',function(event){
            var value = "sequence" + event.target.id;
          //  console.log(value);
          var textElement = document.getElementById(value);
          var textContent = textElement.innerHTML.replace(/<br\s*[\/]?>/gi, "\n");
          navigator.clipboard.writeText(textContent).then(() => {
              alert('Copied to clipboard');
          });
           //  console.log(listText);
        });
    
    }
    
}
myBtn.addEventListener('click', function (event) {
    var N = document.getElementById('N').value;
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    if (!check(N) || !check(A) || !check(B) || !check(C)||N<0||C<0) {
        alert("You should enter right a input");
    }
    else {
        if (A > B) {
            var t = A;
            A = B;
            B = t;

        }
        createAns(N, A, B, C);
        copy();

    }

});




