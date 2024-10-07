import emailjs from '@emailjs/browser';

export default () => {
    emailjs.init('na7RqYLsX4imRD9Ly');

    const submitBtn = document.getElementById('submit-btn');
    window.onload   = function () {
        const contactForm = document.getElementById('contact-form');
        contactForm && contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            submitBtn.innerText = "Sending...";
            try {
                await emailjs.sendForm('service_8o4dyfp', 'template_3zf8sbs', this);
                contactForm.reset();
                submitBtn.innerText = 'Success';
                setTimeout(() => submitBtn.innerHTML = `Submit`, 3000);
            }
            catch (error) {
                console.log("FAILED...", error);
            }
        });
    };
}