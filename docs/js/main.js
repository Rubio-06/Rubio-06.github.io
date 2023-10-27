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