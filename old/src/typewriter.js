import Typewriter from '../node_modules/typewriter-effect/dist/core.js';

// typewritter effect on hero
export default () => document.querySelectorAll('[data-typewriter]')
                             .forEach((element) => new Typewriter(element, {
                                 strings:   element.getAttribute('data-typewriter').split(',').map((entry) => entry.trim()),
                                 autoStart: true,
                                 loop:      true,
                                 delay:     200,
                             }))
