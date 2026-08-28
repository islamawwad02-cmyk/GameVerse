const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML="🌞";

    }else{

        themeBtn.innerHTML="🌙";

    }

});

const searchBox = document.getElementById("searchBox");

const games = document.querySelectorAll(".game");

searchBox.addEventListener("keyup", function(){

    let value = searchBox.value.toLowerCase();

    games.forEach(function(game){

        let text = game.innerText.toLowerCase();

        if(text.includes(value)){

            game.style.display = "block";

        }

        else{

            game.style.display = "none";

        }

    });

});

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

}

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    if(name === "" || email === ""){

        alert("Please fill in all required fields!");

        return;

    }

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

const hero = document.querySelector(".hero");

const backgrounds = [

"images/hero1.jpg",

"images/hero2.jpg",

"images/hero3.jpg"

];

let current = 0;

setInterval(function(){

current++;

if(current >= backgrounds.length){

current = 0;

}

hero.style.backgroundImage = `url(${backgrounds[current]})`;

},4000);

// ===============================
// GameVerse Games Data
// ===============================

const gameData = [
    {
        name: "GTA 6",
        genre: "Action",
        platform: "PC / PlayStation / Xbox"
    },

    {
        name: "Elden Ring",
        genre: "Action RPG",
        platform: "PC / PlayStation / Xbox"
    },

    {
        name: "Cyberpunk 2077",
        genre: "RPG",
        platform: "PC / PlayStation / Xbox"
    },

    {
        name: "FC 26",
        genre: "Sports",
        platform: "PC / PlayStation / Xbox"
    }
];