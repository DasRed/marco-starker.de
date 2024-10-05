// show project details
export default () => {
    const projects = document.querySelectorAll(".single-project");
    if (projects.length) {
        projects.forEach((project) => {
            project.addEventListener("click", function () {
                const img          = project.getAttribute("data-img");
                const title        = project.getAttribute("data-title");
                const ImgTag       = document.querySelector(".project-details-img");
                const TitleTag     = document.getElementById("project-title");
                ImgTag.src         = `./assets/images/${img}.png`;
                TitleTag.innerText = title;
            });
        });
    }
}