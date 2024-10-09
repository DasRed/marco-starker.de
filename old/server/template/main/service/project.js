export default (number) => `
<div class="swiper-slide overflow-visible p-3" data-content="project">
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
            <h4>Project Management</h4>
            <ul class="service-list">
                <li><i class="ph ph-caret-double-right"></i> Agile Methods (Scrum, Kanban)</li>
                <li><i class="ph ph-caret-double-right"></i> Git (GitLab, GitHub)</li>
                <li><i class="ph ph-caret-double-right"></i> Version Control</li>
                <li><i class="ph ph-caret-double-right"></i> Communication with Stakeholders</li>
                <li><i class="ph ph-caret-double-right"></i> Implement customer requirements</li>
            </ul>
        </div>
    </div>
</div>
`;