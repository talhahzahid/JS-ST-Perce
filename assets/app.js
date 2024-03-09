


var math = document.querySelector('#math-marks');
var computer = document.querySelector('#cb-marks');
var physics = document.querySelector('#phy-marks');
var chemistry = document.querySelector('#chem-marks');
var english = document.querySelector('#eng-marks');
var urdu = document.querySelector('#urd-marks');
var islamiat = document.querySelector('#isl-marks');
var tot = document.querySelector('#OBTAINED');
var studentpercentage = document.querySelector('#PERCENTAGE');
var studentgrade = document.querySelector('#GRADE');

function cal(){
    console.log(math.value);
    console.log(computer.value);
    console.log(physics.value);
    console.log(chemistry.value);
    console.log(english.value);
    console.log(urdu.value);
    console.log(islamiat.value);

    let totalmarks = 565;
    let obtainmarks = +math.value + +computer.value + +physics.value + +chemistry.value + +english.value + +urdu.value + +islamiat.value ;
    console.log("obtained Marks ======>" , obtainmarks);
    tot.innerHTML = obtainmarks;
    let percentage = obtainmarks / totalmarks * 100 ;
    console.log("Your Percentage is ======>" , percentage);
    studentpercentage.innerHTML = percentage;
    if(percentage > 80){
        studentgrade.innerHTML = ("A+")
    }else if(percentage > 70){
        studentgrade.innerHTML = ("A")
    }else if(percentage > 60){
        studentgrade.innerHTML = ("B");
    }else if (percentage > 50){
        studentgrade.innerHTML = ("C")
    }else{
        studentgrade.innerHTML = ("FAIL")
    }

}