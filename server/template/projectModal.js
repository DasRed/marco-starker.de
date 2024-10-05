export default () => `
<div class="modal fade" id="project-details" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close">
                    <i class="ph ph-x"></i>
                </button>
                <img src="./images/edumaster-big.png" class="w-100 img-fluid project-details-img rounded-3 mb-3 mb-xl-4" alt=""/>
                <div class="row gx-4 gy-4 gy-md-0">
                    <div class="col-md-7 col-xl-9">
                        <h1 class="mb-3 fw-semibold" id="project-title">EduMaster</h1>
                        <p class="mb-4 mb-xl-5">Designed and developed a fully functional e-commerce platform for a startup specializing in handcrafted goods. The project involved creating a visually appealing user interface, and ensuring an overall smooth shopping experience.</p>
                        <h2 class="mb-3 fw-semibold">Project Goals</h2>
                        <p class="mb-4">Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.</p>
                        <ul class="list-plus">
                            <li>Create a visually cohesive blog that aligns with the influencer's personal brand.</li>
                            <li>Implement a secure and reliable payment gateway.</li>
                            <li>Ensure the website is responsive and performs well across all devices.</li>
                            <li>Optimize the site for search engines to increase organic traffic.</li>
                        </ul>
                    </div>
                    <div class="col-md-5 col-xl-3">
                        <div class="right-bar">
                            <div>
                                <p class="mb-1">Client</p>
                                <h6 class="fw-semibold">Mashroom</h6>
                            </div>
                            <div>
                                <p class="mb-1">Category</p>
                                <h6 class="fw-semibold">User Experience</h6>
                            </div>
                            <div>
                                <p class="mb-1">Start Date</p>
                                <h6 class="fw-semibold">02/08/2023</h6>
                            </div>
                            <div>
                                <p class="mb-1">End Date</p>
                                <h6 class="fw-semibold">01/03/2024</h6>
                            </div>
                            <div>
                                <p class="mb-1">Tools</p>
                                <h6 class="fw-semibold">Adobe Xd, Figma</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="fw-medium mb-2">Challenges and Solutions</h3>
                    <p class="mb-4">
                        One of the main challenges was optimizing the website's load time while maintaining high-quality images of the products. To address this, I implemented lazy loading for images and used optimized image formats, resulting in a faster, smoother browsing experience without compromising
                        visual quality.
                    </p>
                    <div class="row gx-4 gy-4 gy-md-0 mb-4 mb-xl-5 pb-3">
                        <div class="col-md-6">
                            <img src="./images/project-details-1.png" class="w-100 img-fluid rounded-3" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <img src="./images/project-details-2.png" class="w-100 img-fluid rounded-3" alt=""/>
                        </div>
                    </div>
                    <h4 class="mb-3">Key Features:</h4>
                    <p class="mb-4">Developed a website for a non-profit organization aimed at raising awareness and funds for environmental conservation. The site features educational content, event management, and donation capabilities.</p>
                    <ul class="bullet mb-4 pb-3 mb-xl-5">
                        <li>Custom Blog Layouts: Designed multiple blog layouts to cater to different content types, including image-heavy posts and long-form articles.</li>
                        <li>Content Management System: Integrated WordPress for easy content updates and management, allowing the influencer to focus on creating content without technical hurdles.</li>
                        <li>Responsive Design: Ensured the blog is fully responsive, providing a seamless experience on smartphones, tablets, and desktops.</li>
                        <li>SEO and Social Media Integration: Implemented SEO best practices and integrated social media sharing buttons, making it easy for readers to share posts across platforms.</li>
                        <li>Newsletter Signup: Added a newsletter signup form to help the influencer grow their email list and maintain engagement with followers.</li>
                    </ul>
                    <div class="outcome">
                        <h5 class="mb-3">Outcome:</h5>
                        <p>The blog quickly gained traction, attracting a growing audience and enhancing the influencer’s online presence. The user-friendly design and seamless social media integration led to higher engagement rates and increased content sharing.</p>
                    </div>
                    <form class="contact-form full-width">
                        <h3 class="mb-3">Have project in mind? Let's discuss</h3>
                        <p class="mb-4 mb-xl-5 pb-2">Get in touch with us to see how we can help you with your project</p>
                        <div class="row g-4 g-xl-5">
                            <div class="col-sm-6 contact-input">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="user_name" placeholder="Your name" required/>
                            </div>
                            <div class="col-sm-6 contact-input">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="user_email" placeholder="Your e-mail" required/>
                            </div>
                            <div class="col-12 contact-input">
                                <label for="service">Service</label>
                                <input name="service" id="service" placeholder="Your Service"/>
                            </div>
                            <div class="col-12 contact-input">
                                <label for="message">Message</label>
                                <textarea name="message" placeholder="Your message"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="submit-btn position-relative">
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
                </div>
            </div>
        </div>
    </div>
</div>
`;