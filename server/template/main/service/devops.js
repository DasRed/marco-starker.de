export default (number) => `
<div class="swiper-slide overflow-visible p-3" data-content="devops">
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
            <h4>DevOps and Cloud</h4>
            <ul class="service-list">
                <li><i class="ph ph-caret-double-right"></i> Docker, Kubernetes</li>
                <li><i class="ph ph-caret-double-right"></i> CI/CD-Pipelines</li>
                <li><i class="ph ph-caret-double-right"></i> Automation</li>
                <li><i class="ph ph-caret-double-right"></i> AWS (EC2, Lambda, S3)</li>
                <li><i class="ph ph-caret-double-right"></i> Cloud Infrastructure</li>
            </ul>
        </div>
    </div>
</div>
`;