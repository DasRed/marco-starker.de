export default () => `
<section id="contact" class="contact section position-relative">
    <span class="section-title-overlay-text">contact</span>
    <div class="section-title text-capitalize">
        <h4>Let's get in touch</h4>
        <h2>Contact me</h2>
    </div>
    <div class="row pb-120 contact-items">
        <div class="row g-4">
            <div class="col-sm-6 col-xl-4 col-xxl-3">
                <div class="contact-item">
                    <div class="icon-box">
                        <i class="ph ph-phone-call"></i>
                    </div>
                    <p>+46 160 5543322</p>
                </div>
            </div>
            <div class="col-sm-7 col-xl-5 col-xxl-4">
                <div class="contact-item">
                    <div class="icon-box">
                        <i class="ph ph-envelope-open"></i>
                    </div>
                    <p>marco.starker@gmx.net</p>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4 col-xxl-3">
                <div class="contact-item">
                    <div class="icon-box">
                        <i class="ph ph-map-pin"></i>
                    </div>
                    <p>85256 Vierkirchen, Germany</p>
                </div>
            </div>
            <div class="col-sm-5 col-xl-3 col-xxl-2 d-flex align-items-center">
                <div class="d-flex gap-3 social-icons">
                    <a href="#"><i class="ph ph-linkedin-logo"></i></a>
                    <a href="#"><i class="ph ph-github-logo"></i></a>
                </div>
            </div>
        </div>
    </div>
    <form id="contact-form" class="contact-form">
        <h4>Leave a Message</h4>
        <div class="row g-4 g-xl-5">
            <div class="col-sm-6">
                <label for="name">Name</label>
                <input type="text" id="user_name" name="user_name" placeholder="Your name" required/>
            </div>
            <div class="col-sm-6">
                <label for="email">Email</label>
                <input type="email" id="user_email" name="user_email" placeholder="Your e-mail" required/>
            </div>
            <div class="col-12">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message"></textarea>
            </div>
            <div class="col-12">
                <button type="submit" id="submit-btn" class="submit-btn position-relative">
                    <div class="waves-top-md">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    submit
                    <div class="waves-bottom-md">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </div>
    </form>
    <div class="col mt-5 pt-5 next-chapter">
        <span class="page">11/11</span>
    </div>
</section>
`;