const btnProject = document.querySelector(".more-project");
const projectSection = document.querySelector(".project");

btnProject.addEventListener("click", function (e) {
  projectSection.scrollIntoView({ behavior: "smooth" });
});
