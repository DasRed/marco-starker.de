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
                    <span>Full-Stack Development</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Backend Development</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Frontend Development</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>PHP</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>Node.js</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar hundred" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>JavaScript</span>
                    <span>100%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="100%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>TypeScript</span>
                    <span>60%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="60%"></div>
                </div>
            </div>
            <div class="skill">
                <div class="d-flex justify-content-between align-items-center">
                    <span>React.js</span>
                    <span>40%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar ninety" data-width="40%"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;