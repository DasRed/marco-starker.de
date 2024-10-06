export default (number) => `
<div class="row pb-120 developer-row">
    <div class="col-lg-4 ${number === '02' ? 'col-md-5 offset-sm-1 offset-lg-2' : ''}">
        <div class="section-title-sm">
            <div class="top">
                <h2>Cloud & Architecture Skills</h2>
                <span>Highlight My Expertise in:</span>
            </div>
            <span class="serial">${number}.-</span>
        </div>
    </div>
    <div class="${number === '02' ? 'col-md-6' : 'col-12 col-lg-8'}">
        <div class="d-flex flex-column gap-3">
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Microservices</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>CI/CD</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>AWS</span>
                    <span>80%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar hundred" data-width="80%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Web Services</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Docker</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>SQL, NoSQL</span>
                    <span>70%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="70%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Softwarearchitektur</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Terraform</span>
                    <span>20%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="20%"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;