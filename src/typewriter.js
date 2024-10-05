import Typewriter from '../node_modules/typewriter-effect/dist/core.js';

// typewritter effect on hero
export default () => {
    if (document.getElementById("typewriter")) {
        new Typewriter("#typewriter", {
            strings:   ["Developer", "Architect", "Fullstack", "Solver"],
            autoStart: true,
            loop:      true,
            delay:     200,
        });
    }
}
