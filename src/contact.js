import emailjs from '@emailjs/browser';

export default () => {
    // add public key here
    const PUBLIC_KEY = ''
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(PUBLIC_KEY);

    const submitBtn = document.getElementById("submit-btn");
    window.onload   = function () {
        const contactForm = document.getElementById("contact-form");
        contactForm && contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // add template id and service id here

            const SERVICE_ID  = ""
            const TEMPLATE_ID = ""
            if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                alert("Please add your service id and template id");
                return;
            }
            submitBtn.innerText = "Sending...";
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this).then(
                function () {
                    console.log("SUCCESS!");
                    contactForm.reset();
                    submitBtn.innerText = "Success";
                    setTimeout(function () {
                        submitBtn.innerHTML = `Submit`;
                    }, 3000);
                },
                function (error) {
                    console.log("FAILED...", error);
                },
            );
        });
    };
}