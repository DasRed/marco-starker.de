export default (number) => `
<div class="row pb-120 design-row">
    <div class="col-lg-4 ${number === '02' ? 'col-md-5 offset-sm-1 offset-lg-2' : ''}">
        <div class="section-title-sm">
            <div class="top">
                <h2>Design Skills</h2>
                <span>Highlight My Expertise in:</span>
            </div>
            <span class="serial">${number}.-</span>
        </div>
    </div>
    <div class="${number === '02' ? 'col-md-6' : 'col-12 col-lg-8'}">
        <div class="row">
            <div class="col-md-4">
                <div class="d-flex flex-column align-items-center mb-4">
                    <div class="design-chart mb-4"></div>
                    <button class="btn btn-outline-secondary px-5">Design</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column align-items-center mb-4">
                    <div class="branding-chart mb-4"></div>
                    <button class="btn btn-outline-secondary px-5">Branding</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column align-items-center mb-4">
                    <div class="ecommerce-chart mb-4"></div>
                    <button class="btn btn-outline-secondary px-5">Ecommerce</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;