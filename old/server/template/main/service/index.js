import architecture from './architecture.js';
import backend from './backend.js';
import devops from './devops.js';
import frontend from './frontend.js';
import project from './project.js';

export default () => `
<section id="services" class="services section position-relative">
    <span class="section-title-overlay-text">my services</span>
    <div class="section-title text-capitalize">
        <h4>How I can help your next project</h4>
        <h2>What I Do?</h2>
    </div>
    <div dir="ltr" class="swiper service-swiper">
        <div class="swiper-wrapper">
            ${[backend, frontend, devops, architecture, project].map((fn, index) => fn(`0${index + 1}`)).join('')}
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="col-12">
        <a href="#skills" class="d-flex gap-4 align-items-center next-chapter">
            <span class="page">03/07</span>
            <span class="next">Next Chapter</span>

            <i class="ph ph-arrow-elbow-right-down"></i>
        </a>
    </div>
</section>
`;