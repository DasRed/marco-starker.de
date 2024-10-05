import shuffleLetters from 'shuffle-letters';

function handleClassChange(mutationsList) {
    mutationsList.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("active")) {
                const textElement = target.querySelector(".text");
                if (textElement) {
                    shuffleLetters(textElement, {iterations: 5});
                }
            }
        }
    });
}

export default () => {
    const navIcon = document.querySelector(".nav-icon");
    const nav     = document.querySelector(".navigation");

    navIcon && navIcon.addEventListener("click", () => {
        navIcon.classList.toggle("open");
        nav.classList.toggle("opened");
    });

    const navOverlay = document.querySelector(".nav-overlay");
    navOverlay && navOverlay.addEventListener("click", () => {
        nav.classList.remove("opened");
        navIcon.classList.remove("open");
    });

    // Select all the <a> elements you want to observe
    const links = document.querySelectorAll(".navigation ul li a");

    // Create a MutationObserver instance
    const observer = new MutationObserver(handleClassChange);

    // Observe each link for attribute changes
    links.forEach((link) => observer.observe(link, {attributes: true}));

    // close menu on link click
    links.forEach((link) => link.addEventListener("click", () => {
        nav.classList.remove("opened");
        navIcon.classList.remove("open");
    }));
}