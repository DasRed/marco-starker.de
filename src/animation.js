import gsap from 'gsap';
import {ScrollTrigger} from '../node_modules/gsap/ScrollTrigger.js';

export default () => {
    gsap.registerPlugin(ScrollTrigger);

    if (document.getElementById("about_me")) {
        gsap.from(".nav-link", {duration: 0.8, delay: 0.5, opacity: 0, scale: 0, stagger: 0.1});
        gsap.from(".img-wrapper", {duration: 1.5, scale: 1.5, ease: "back", delay: 0.3, opacity: 0});
        gsap.from(".work-btn", {duration: 1.2, scale: 0, opacity: 0, ease: "bounce"});
        gsap.from(".contact-btn", {duration: 1.2, scale: 0, opacity: 0, ease: "bounce"});
        gsap.from(".freelancer", {duration: 0.8, y: 200, scale: 0});
        gsap.from(".description", {duration: 0.8, y: 200, scale: 0});
        gsap.to(".navigation", {"--height": "100%", duration: 1, ease: "power1.inOut"});

        // about section
        gsap.from(".about-desc", {
            opacity:       0,
            duration:      0.8,
            ease:          "back",
            scrollTrigger: {
                trigger: ".about-desc",
            },
        });

        gsap.from(".experience-card", {
            opacity:       0,
            scale:         0,
            ease:          "elastic",
            duration:      1,
            scrollTrigger: {
                trigger: ".experience-card",
                // scrub: true,
                start: "top 50%",
            },
        });

        // services section
        gsap.from(".service-card", {
            y:             500,
            stagger:       0.2,
            scale:         0,
            duration:      1.5,
            scrollTrigger: {
                trigger: ".services",
                start:   "top 60%",
                end:     "top 20%",
            },
        });

        // attainments section

        gsap.from(".developer-row", {
            opacity:       0,
            scale:         0,
            duration:      1.5,
            scrollTrigger: {
                trigger: ".design-row",
                start:   "top 60%",
                end:     "top 20%",
            },
        });
        // fun fact
        gsap.from(".fun-fact", {
            scale:         0,
            duration:      1,
            stagger:       0.2,
            scrollTrigger: {
                trigger: ".fun-fact",
            },
        });

        // experience
        gsap.from(".experience-item", {
            opacity:       0,
            duration:      1,
            stagger:       0.5,
            scale:         0,
            scrollTrigger: {
                trigger: ".experience-item",
            },
        });

        gsap.utils.toArray(".experience-item").forEach((item) => {
            gsap.to(item, {
                "--item-height": "100%",
                stagger:         0.5,
                delay:           0.5,
                scrollTrigger:   {
                    trigger: item,
                    start:   "top 80%",
                    end:     "top 20%",
                },
            });
        });

        gsap.to(".experience-wrapper", {
            duration:      2,
            ease:          "back",
            delay:         0.5,
            "--height":    "100%",
            scrollTrigger: {
                trigger: ".experience-wrapper",
            },
        });

        // services section
        gsap.from(".single-project", {
            opacity:       0,
            stagger:       0.2,
            scale:         0,
            scrollTrigger: {
                trigger: ".project-list",
                start:   "top 60%",
                end:     "top 20%",
            },
        });

        // how i work
        gsap.from(".process", {
            stagger:       0.15,
            scale:         0,
            duration:      2.8,
            ease:          "elastic",
            scrollTrigger: {
                trigger: ".process-list",
                start:   "top 60%",
                end:     "top 20%",
            },
        });

        // testimonials
        gsap.from(".testimonial-card", {
            opacity:       0,
            scale:         0,
            duration:      1.2,
            stagger:       0.2,
            scrollTrigger: {
                trigger: ".testimonial-card",
            },
        });

        // contacct
        gsap.from(".contact-item", {
            scale:         0,
            duration:      0.8,
            ease:          "back",
            scrollTrigger: {
                trigger: ".contact-items",
            },
        });

        gsap.from(".more-info", {
            scale:         0,
            duration:      1.2,
            ease:          "elastic",
            delay:         0.5,
            scrollTrigger: {
                trigger: ".more-info",
            },
        });
        gsap.from(".download-cv", {
            scale:         0,
            duration:      2,
            ease:          "elastic",
            delay:         0.3,
            scrollTrigger: {
                trigger: ".download-cv",
            },
        });

        // title overlay
        document.querySelectorAll(".section").forEach((section) => {
            let text = section.querySelector(".section-title-overlay-text");

            gsap.fromTo(
                text,
                {y: "50%"},
                {
                    y:             "-50%",
                    scrollTrigger: {
                        trigger: section,
                        start:   "top bottom",
                        end:     "bottom top",
                        scrub:   true,
                    },
                },
            );
        });

        gsap.utils.toArray(".section-title").forEach((title) => {
            gsap.to(title, {
                "--height":    "100%",
                delay:         0.5,
                scrollTrigger: {
                    trigger: title,
                    start:   "top 80%",
                    // end: "top 30%",
                    // scrub: true,
                    // toggleActions: "play none none reverse",
                },
            });
        });

        // section titles
        gsap.utils.toArray(".section-title").forEach((title) => {
            gsap.from(title, {
                opacity:       0,
                scale:         0,
                scrollTrigger: {
                    trigger: title,
                },
            });
        });
    }
}