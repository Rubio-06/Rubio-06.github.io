const techBtn = document.querySelector(".tech-btn"),
toolBtn = document.querySelector(".tool-btn"),
tech = document.querySelector(".tech"),
tool = document.querySelector(".tool")

toolBtn.addEventListener("click", () => {
    techBtn.classList.remove("active")
    toolBtn.classList.add("active")
    tech.style.display = "none";
    tool.style.display = "grid";
    console.log(toolBtn)
});

techBtn.addEventListener("click", () => {
    toolBtn.classList.remove("active")
    techBtn.classList.add("active")
  	tech.style.display = "grid";
    tool.style.display = "none";
    console.log(techBtn)
});

// Change Language

const langAll = document.querySelector(".lang-all"),
lang_fr = document.querySelector(".lang-fr"),
lang_en = document.querySelector(".lang-en"),
langImg = document.querySelector("button.lang-img img");
skill = document.querySelector("h1.skills")

// Change Translate Text

const  h1_about = document.querySelector(".info-title"),
infoText1 = document.querySelector(".info-text-1"),
infoText2 = document.querySelector(".info-text-2")

// Event IMG

langImg.addEventListener("click", () =>{
    langAll.style.display = "flex";
    console.log(langImg)
});

// Event Translate

lang_fr.addEventListener("click", () => {
    langAll.style.display = "none";
    langImg.src = "img/france.png";

    h1_about.textContent  = "A propos de moi";
    infoText1.textContent = "Bonjour à tous! Mon nom est Rubio Abela Je suis un développeur web, j'habite Lyon, j’ai 1 an d’expérience dans le développement front-end, j’aime vraiment ce que je fais en ce moment, à mon avis, créer une application web, non seulement est un travail, mais aussi un art qui a une valeur esthétique.";
    infoText2.textContent = "Mon travail est de construire et de concevoir votre site Web pour être fonctionnel et convivial, mais toujours attrayant. Je donne une touche personnelle à votre produit et m’assure que le site attire l’attention et est facile à utiliser. Mon objectif est de transmettre votre message et votre identité de la manière la plus créative. Si vous êtes intéressé de m’embaucher, vous pouvez me contacter ci-dessous.";
    techBtn.textContent = "Technologies";
    toolBtn.textContent = "Outils";
    skill.textContent = "compétences"
})

lang_en.addEventListener("click", () =>{
    langAll.style.display = "none";
    langImg.src = "img/united-kingdom.png";

    h1_about.textContent  = "About Me";
    infoText1.textContent = "Hi everyone! My name is Rubio Abela I'm a web developer from Lyon, i have 1 year of experience in front-end development, i realy enjoy what i do right now, in my opinion, creating web app i not just a job, but also an art that has aesthetic value.";
    infoText2.textContent = "My jobs is to build & design your website to be functional and user friendly, yet still attractive. I provide a personal touch to you product and ensure that the website catches attention and is easy to use. My goal is to convey your message and identity in the most creative way. If you're interested to hire me, please dm me in the listed contact below.";
    techBtn.textContent = "Tech Stack";
    toolBtn.textContent = "Tools";
    skill.textContent = "skills"
})