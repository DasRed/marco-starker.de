import architecture from './architecture.js';
import developer from './developer.js';
import language from './language.js';

export default () => `
<section id="attainments" class="attainments section position-relative">
    <span class="section-title-overlay-text">ATTAINMENTS</span>
    
    ${[developer, architecture, language].map((fn, index) => fn(`0${index + 1}`)).join('')}
    
    <div class="col-12">
        <a href="#fun_facts" class="d-flex gap-4 align-items-center next-chapter">
            <span class="page">04/08</span>
            <span class="next">Next Chapter</span>
            <span class="icon"><i class="ph ph-arrow-elbow-right-down"></i></span>
        </a>
    </div>
</section>
`;