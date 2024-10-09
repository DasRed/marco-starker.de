export default () => `
<section id="projects" class="projects section position-relative">
    <span class="section-title-overlay-text">projects</span>
    <div class="section-title text-capitalize">
        <h4>Some of my most recent projects</h4>
        <h2>My Featured Projected</h2>
    </div>
    <div class="row pb-60 project-list g-4">
        <div class="col-sm-6 col-lg-4">
            <div class="single-project" data-bs-toggle="modal" data-bs-target="#project-details" data-title="TechShop" data-img="techshop-big">
                <div class="project-card">
                    <div class="card-inner"></div>
                    <img src="./images/project-one.png" class="img-fluid w-100 card-img h-100" alt=""/>
                    <div class="card-arrow">
                        <div class="arrow-inner">
                            <i class="ph ph-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h2>TechShop</h2>
                    <p>E-commerce Platform</p>
                    <div class="tags d-flex align-items-center gap-1">
                        <span>design</span> - <span>frontend</span> -
                        <span>backend</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-lg-4">
            <div class="single-project" data-bs-toggle="modal" data-bs-target="#project-details" data-title="Edumaster" data-img="edumaster-big">
                <div class="project-card">
                    <div class="card-inner"></div>
                    <img src="./images/project-two.png" class="img-fluid w-100 card-img h-100" alt=""/>
                    <div class="card-arrow">
                        <div class="arrow-inner">
                            <i class="ph ph-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h2>Edumaster</h2>
                    <p>Online Learning Platform</p>
                    <div class="tags d-flex align-items-center gap-1">
                        <span>design</span> - <span>frontend</span> -
                        <span>backend</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-lg-4">
            <div class="single-project" data-bs-toggle="modal" data-bs-target="#project-details" data-title="QuickBite" data-img="quickbite-big">
                <div class="project-card">
                    <div class="card-inner"></div>
                    <img src="./images/project-three.png" class="img-fluid w-100 card-img h-100" alt=""/>
                    <div class="card-arrow">
                        <div class="arrow-inner">
                            <i class="ph ph-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h2>QuickBite</h2>
                    <p>Food Delivery Mobile App</p>
                    <div class="tags d-flex align-items-center gap-1"><span>ui/ux design</span> - <span>mobile development</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12">
        <a href="#how_i_work" class="d-flex gap-4 align-items-center next-chapter">
            <span class="page">07/11</span>
            <span class="next">Next Chapter</span>

            <i class="ph ph-arrow-elbow-right-down"></i>
        </a>
    </div>
</section>
`;