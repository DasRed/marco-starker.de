import shuffleLetters from 'shuffle-letters';

function handleClassChange(mutationsList) {
    mutationsList.forEach((mutation) => {
        const target = mutation.target;
        if (mutation.type === "attributes" && mutation.attributeName === "class" && target.classList.contains("active")) {
            const textElement = target.querySelector(".text");
            if (textElement) {
                textElement.innerTextInitial ??= textElement.innerText;
                textElement.shuffleLettersClear?.();
                textElement.shuffleLettersClear = shuffleLetters(textElement, {
                    iterations: 5,
                    onComplete: () => {
                        textElement.shuffleLettersClear = undefined;
                        textElement.innerText           = textElement.innerTextInitial;
                    }
                });
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

    window.document.addEventListener('DOMContentLoaded', () => {
        let lastValue = 0;
        window.document.addEventListener('scroll', (event) => {
            if (window.scrollY < 80) {
                return;
            }
            if (window.scrollY - lastValue > 0) {
                document.querySelector('header').classList.add('shrink');
            }
            else if (window.scrollY - lastValue < 0) {
                document.querySelector('header').classList.remove('shrink');
            }
            lastValue = window.scrollY;
        });
    });
}