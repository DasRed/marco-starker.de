export default (number) => `
<div class="row pb-120 language-row">
    <div class="col-lg-4 ${number === '02' ? 'col-md-5 offset-sm-1 offset-lg-2' : ''}">
        <div class="section-title-sm">
            <div class="top">
                <h2>Language Skills</h2>
                <span>Highlight My Expertise in:</span>
            </div>
            <span class="serial">${number}.-</span>
        </div>
    </div>
    <div class="${number === '02' ? 'col-md-6' : 'col-12 col-lg-8'}">
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-4">
                <div class="d-flex flex-column align-items-center mb-4">
                    <div class="chart-language mb-4" data-level="100"></div>
                    <button class="btn btn-outline-secondary px-5">German</button>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="d-flex flex-column align-items-center mb-4">
                    <div class="chart-language mb-4" data-level="80"></div>
                    <button class="btn btn-outline-secondary px-5">English</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;