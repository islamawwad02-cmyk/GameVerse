// ==========================================
// GameVerse - JavaScript
// ==========================================


// ==========================================
// 1. Games Data - Array + Objects
// ==========================================

const gameData = [

    {
        name: "Grand Theft Auto VI",
        genre: "Action / Open World",
        platform: "PC / PlayStation / Xbox",
        image: "images/gta6.jpg",
        description: "Explore Vice City in the most anticipated open-world game.",
        link: "https://www.rockstargames.com/VI"
    },

    {
        name: "Elden Ring",
        genre: "Action RPG",
        platform: "PC / PlayStation / Xbox",
        image: "images/eldenring.jpg",
        description: "A fantasy action RPG full of adventures and powerful bosses.",
        link: "https://en.bandainamcoent.eu/elden-ring/elden-ring"
    },

    {
        name: "Call of Duty",
        genre: "First-Person Shooter",
        platform: "PC / PlayStation / Xbox",
        image: "images/cod.jpg",
        description: "Experience intense multiplayer battles and realistic combat.",
        link: "https://www.callofduty.com/"
    },

    {
        name: "Resident Evil 9",
        genre: "Survival Horror",
        platform: "PC / PlayStation / Xbox",
        image: "images/re7.jpg",
        description: "Enter the terrifying Baker family mansion and survive a true survival horror experience.",
        link: "https://www.residentevil.com/7/"
    },

    {
        name: "Rocket League",
        genre: "Sports",
        platform: "PC / PlayStation / Xbox",
        image: "images/rocketleague.jpg",
        description: "Drive, jump, and score amazing goals in this fast-paced soccer game.",
        link: "https://www.rocketleague.com/"
    },

    {
        name: "EA FC 26",
        genre: "Sports",
        platform: "PC / PlayStation / Xbox",
        image: "images/fc26.jpg",
        description: "Experience realistic football with new players, clubs, and competitions.",
        link: "https://www.ea.com/games/ea-sports-fc"
    },

    {
        name: "Valorant",
        genre: "Tactical Shooter",
        platform: "PC",
        image: "images/valorant.jpg",
        description: "Play tactical 5v5 matches using unique agents and powerful abilities.",
        link: "https://playvalorant.com/"
    },

    {
        name: "Cyberpunk 2077",
        genre: "Action RPG",
        platform: "PC / PlayStation / Xbox",
        image: "images/cyberpunk.jpg",
        description: "Explore the futuristic Night City and shape your own adventure.",
        link: "https://www.cyberpunk.net/"
    },

    {
        name: "Red Dead Redemption 2",
        genre: "Action / Adventure",
        platform: "PC / PlayStation / Xbox",
        image: "images/rdr2.jpg",
        description: "Ride across the Wild West and experience an unforgettable story.",
        link: "https://www.rockstargames.com/reddeadredemption2"
    }

];


// ==========================================
// 2. Display Games using JavaScript
// ==========================================

// ==========================================
// 2. Load Games from JSON using Fetch API
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

                <p>
                    ${game.description}
                </p>

                <a href="${game.link}"
                   target="_blank"
                   class="btn">
                    View Game
                </a>

            `;

            gamesContainer.appendChild(gameCard);

        });

    } catch (error) {

        gamesContainer.innerHTML =
            "<p>Error loading games.</p>";

        console.error("Error loading games:", error);

    }

}

loadGames();




// ==========================================
// 3. Search Games
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