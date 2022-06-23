// local reviews data
const reviews = [
    {
        id: 1,
        name: "Vishal Kandu",
        job: "web developer",
        img: 
        "img-1.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aliquam. Alias provident possimus quasi vero. Voluptas aliquam perferendis a quisquam!"
    },
    {
        id: 2,
        name: "Energy",
        job: "Problem Solver",
        img: 
        "img-2.jpg",
        text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores magni laboriosam reiciendis. Tenetur incidunt doloribus magnam dolor, tempore exercitationem?"
    },
    {
        id: 3,
        name: "Entropy",
        job: "Product Seller",
        img: 
        "img-3.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aliquam. Alias provident possimus quasi vero. Voluptas aliquam perferendis a quisquam!"
    },
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    
    showPerson(currentItem);
});

// show  person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
    // if(currentItem == reviews.length-1) { // ye hai last me rokne ke liye
    //     currentItem--;
    // }
    currentItem++;
    if(currentItem > reviews.length-1){ // ye hai wapas se repeat karne ke liye
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function(){
    // if(currentItem == reviews.length - reviews.length) { // ye hai start me rokne ke liye
    //     currentItem++;
    // }
    currentItem--;
    if(currentItem < 0){ // ye hai wapas se repeat karne ke liye
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});


// NOte :---
// Select karne ke liye querySelector use karne ka