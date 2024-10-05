export default (number) => `
<div class="row pb-120 developer-row">
    <div class="col-lg-4 ${number === '02' ? 'col-md-5 offset-sm-1 offset-lg-2' : ''}">
        <div class="section-title-sm">
            <div class="top">
                <h2>Developer Skills</h2>
                <span>Highlight My Expertise in:</span>
            </div>
            <span class="serial">${number}.-</span>
        </div>
    </div>
    <div class="${number === '02' ? 'col-md-6' : 'col-12 col-lg-8'}">
        <div class="d-flex flex-column gap-3">
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Front-End Development</span>
                    <span>90%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="90%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Back-End Development</span>
                    <span>85%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="85%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Full-Stack Development</span>
                    <span>88%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="88%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Database Management</span>
                    <span>80%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="80%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Version Control</span>
                    <span>95%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="95%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>API Integration</span>
                    <span>87%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="87%"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;