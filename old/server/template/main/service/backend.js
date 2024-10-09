export default (number) => `
<div class="swiper-slide overflow-visible p-3" data-content="backend">
    <div class="service-card">
        <div class="card-inner"></div>
        <div class="content">
            <div class="number-circle">
                <div class="waves-top-sm">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>${number}</h2>
                <div class="waves-bottom-sm">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <h4>Backend Development</h4>
            <ul class="service-list">
                <li><i class="ph ph-caret-double-right"></i> PHP</li>
                <li><i class="ph ph-caret-double-right"></i> NodeJS, TypeScript</li>
                <li><i class="ph ph-caret-double-right"></i> API Development</li>
                <li><i class="ph ph-caret-double-right"></i> Database Management</li>
                <li><i class="ph ph-caret-double-right"></i> Unit-, Feature-, Integration Tests</li>
            </ul>
        </div>
    </div>
</div>
`;