export default () => `
<section id="top" class="hero">
    <div class="row gx-4 align-items-center">
        <div class="col-12 col-md-6 col-xl-6 hero-content">
            <div>
                <h4 class="text-uppercase freelancer">HI, I'M A FREELANCER</h4>
                <h1 class="text-uppercase overflow-hidden developer" id="typewriter"></h1>
                <p class="description">based in Munich, Bavaria.</p>
            </div>
            <div class="d-flex gap-4">
                <a href="#projects" class="btn work-btn text-capitalize btn-secondary">view my work</a>
                <a href="#contact" class="btn contact-btn text-capitalize btn-outline-secondary">contact me</a>
            </div>
        </div>
        <div class="col-12 col-md-5 offset-md-1 offset-xxl-2 col-xl-4">
            <div class="img-wrapper">
                <div class="waves-top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img class="img-fluid rounded-circle hero-img" src="./images/hero.png" alt=""/>
                <div class="waves-bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <a href="#about_me" class="d-flex gap-4 align-items-center next-chapter mt-5">
                <span class="page">01/11</span>
                <span class="next">Next Chapter</span>
                <span class="icon"><i class="ph ph-arrow-elbow-right-down"></i></span>
            </a>
        </div>
    </div>
</section>
`;