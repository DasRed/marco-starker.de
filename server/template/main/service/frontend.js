export default (number) => `
<div class="swiper-slide overflow-visible p-3" data-content="frontend">
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
            <h4>Frontend Development</h4>
            <ul class="service-list">
                <li><i class="ph ph-caret-double-right"></i> HTML, CSS</li>
                <li><i class="ph ph-caret-double-right"></i> JavaScript, TypeScript</li>
                <li><i class="ph ph-caret-double-right"></i> React, Next.js</li>
                <li><i class="ph ph-caret-double-right"></i> UI/UX Optimization</li>
                <li><i class="ph ph-caret-double-right"></i> Responsive Design</li>
            </ul>
        </div>
    </div>
</div>
`;