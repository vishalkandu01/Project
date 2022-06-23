let count = 0;
let select = document.getElementById("demo");
select.innerHTML=count;
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");

function myDecreaseFunction() {
    count--;
    if (count < 0) {
        document.querySelector('#demo').style.color = "red";
    }
    else if (count == 0) {
        document.querySelector('#demo').style.color = "black";
    }
    select.innerHTML=count;
}

function myResetFunction() {
    count = 0;
    document.querySelector('#demo').style.color = "black";
    select.innerHTML=count;
}

function myIncreaseFunction() {
    count++;
    if (count > 0) {
        document.querySelector('#demo').style.color = "green";
    }
    else if (count == 0){
        document.querySelector('#demo').style.color = "black";
    }
    select.innerHTML=count;
}

decrease.addEventListener('click', myDecreaseFunction);
reset.addEventListener('click', myResetFunction);
increase.addEventListener('click', myIncreaseFunction);