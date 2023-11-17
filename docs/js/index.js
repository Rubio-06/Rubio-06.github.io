// Change Language

const langAll = document.querySelector(".lang-all"),
lang_fr = document.querySelector(".lang-fr"),
lang_en = document.querySelector(".lang-en"),
langImg = document.querySelector("button.lang-img img")

// Change Translate Text

const h2 = document.querySelector("h2"),
typing = document.querySelector(".typing-demo"),
h3 = document.querySelector("h3")

// Event IMG

langImg.addEventListener("click", () =>{
    langAll.style.display = "flex";
    console.log(langImg)
});

// Event Translate

lang_fr.addEventListener("click", () => {
    langAll.style.display = "none";
    langImg.src = "img/france.png";

    h2.textContent = "Bonjour tout le monde, je suis";
    typing.textContent = "Front-End Developeur";
    h3.textContent = "Bienvenue sur mon site internet 😁"
})

lang_en.addEventListener("click", () =>{
    langAll.style.display = "none";
    langImg.src = "img/united-kingdom.png";

    h2.textContent = "Hello World, I'm";
    typing.textContent = "Front-End Developer";
    h3.textContent = "Welcome to My personal website 😁"
})

