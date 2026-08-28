// ==========================================
// GameVerse - JavaScript
// ==========================================


// ==========================================
// Load Games from JSON
// ==========================================

const gamesContainer = document.querySelector(".games-container");

async function loadGames() {

    if (!gamesContainer) {
        return;
    }

    gamesContainer.innerHTML = "<p>Loading games...</p>";

    try {

        const response = await fetch("data/games.json");

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const games = await response.json();

        gamesContainer.innerHTML = "";

        games.forEach(function (game) {

            const gameCard = document.createElement("div");

            gameCard.className = "game-card game";

            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}">

                <h3>${game.name}</h3>

                <p>${game.description}</p>

                <a href="${game.link}"
                   target="_blank"
                   class="btn">
                    View Game
                </a>
            `;

            gamesContainer.appendChild(gameCard);

        });

    } catch (error) {

        console.error("Error loading games:", error);

        gamesContainer.innerHTML =
            "<p>Error loading games.</p>";

    }

}

loadGames();





// ==========================================
// Search Games
// ==========================================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = searchBox.value.toLowerCase();

        const games = document.querySelectorAll(".game");

        games.forEach(function (game) {

            const text = game.innerText.toLowerCase();

            if (text.includes(value)) {

                game.style.display = "block";

            } else {

                game.style.display = "none";

            }

        });

    });

}


// ==========================================
// 4. Dark / Light Mode
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = "🌞";

        } else {

            themeBtn.innerHTML = "🌙";

        }

    });

}


// ==========================================
// 5. Back to Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// 6. Contact Form
// ==========================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();


        if (name === "" || email === "") {

            alert("Please fill in all required fields!");

            return;

        }


        alert(
            "Thank you! Your message has been sent successfully."
        );

        form.reset();

    });

}


// ==========================================
// 7. Hero Background Slider
// ==========================================

const hero = document.querySelector(".hero");

if (hero) {

    const backgrounds = [

        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg"

    ];

    let current = 0;


    setInterval(function () {

        current++;

        if (current >= backgrounds.length) {

            current = 0;

        }

        hero.style.backgroundImage =
            `url(${backgrounds[current]})`;

    }, 4000);

}