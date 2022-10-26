const colors = ["green", "pink", "yellow", "rgba(133, 122, 200)", "#f15025"];
// const colors = ["#f12323", "#f69263", "#f35343", "#f34234", "grey", "pink"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('onclick',function(){
    console.log("color changed");
})
btn.addEventListener('click', function(){
    // get random number between 0 - 3 
    
alert("you are changing the bg color");
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];       // The textContent property sets or returns the text content of the specified node, and all its descendants.
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// console.log(document.body);
// console.log(document.head);