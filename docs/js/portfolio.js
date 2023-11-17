// Change Language

const langAll = document.querySelector(".lang-all"),
lang_fr = document.querySelector(".lang-fr"),
lang_en = document.querySelector(".lang-en"),
langImg = document.querySelector("button.lang-img img")

// Change Translate Text

const h1 = document.querySelector("h1.head-project"),
h2 = document.querySelector("h2"),
cardMidle1 = document.querySelector(".card-midle-1"),
cardMidle1_1 = document.querySelector(".card-midle-1-1"),
cardMidle2 = document.querySelector(".card-midle-2"),
cardMidle2_1 = document.querySelector(".card-midle-2-1")


// Event IMG

langImg.addEventListener("click", () =>{
    langAll.style.display = "flex";
    console.log(langImg)
});

// Event Translate

lang_fr.addEventListener("click", () => {
    langAll.style.display = "none";
    langImg.src = "img/france.png";

    h1.textContent = "Mes différents projets";
    h2.textContent = "Explorer les projets sur lesquels j’ai travaillé jusqu’à présent";
    cardMidle1.textContent = "Mon Site Personnel";
    cardMidle1_1.textContent = "Mon site personnel, j’ai créé ce site Web pour afficher mon profil, mes compétences et mes projets. Ainsi que ma place pour essayer de nouvelles technologies.";
    cardMidle2.textContent = "Bubble Bot Site";
    cardMidle2_1.textContent = "Bubble Bot Site, j’ai créé ce site Web pour promouvoir mon propre bot Discord, bot de configuration ou tutoriel regardé les tutoriel pour apprendre à utiliser bubble bot.";
});

lang_en.addEventListener("click", () =>{
    langAll.style.display = "none";
    langImg.src = "img/united-kingdom.png";

    h1.textContent = "My project";
    h2.textContent = "Explore the projects I've worked on so far";
    cardMidle1.textContent = "Personal Website";
    cardMidle1_1.textContent = "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.";
    cardMidle2.textContent = "Bubble Bot Website";
    cardMidle2_1.textContent = "Bubble Bot Website, I created this website to promote my own Discord bot, config bot or look tutorial to learn how to use bubble bot.";
});
    
