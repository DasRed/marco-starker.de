export default () => `
<nav class="navigation" id="navigation">
    <img src="./images/logo.png" class="mb-4 d-xl-none" alt="logo"/> <span>Marco Starker</span>
    <ul>
        <li class="nav-link">
            <a href="#top" class="active"><span>01</span> <span class="text">top</span> </a>
        </li>
        <li class="nav-link">
            <a href="#about_me"><span>02</span> <span class="text">about me</span> </a>
        </li>
        <li class="nav-link">
            <a href="#services"><span>03</span> <span class="text">my services</span> </a>
        </li>
        <li class="nav-link">
            <a href="#skills"><span>04</span> <span class="text">skills</span> </a>
        </li>
        <li class="nav-link">
            <a href="#fun_facts"><span>05</span> <span class="text">facts</span> </a>
        </li>
        <li class="nav-link">
            <a href="#experience"><span>06</span> <span class="text">experiences</span> </a>
        </li>
        ${''
            /** TODO
             <li class="nav-link">
                <a href="#projects"><span>07</span> <span class="text">projects</span> </a>
             </li>
             */
        }
        ${''
            /** TODO
            <li class="nav-link">
                <a href="#how_i_work"><span>07</span> <span class="text">how i work</span> </a>
            </li>
         */
        }
        ${''
            /** TODO
            <li class="nav-link">
                <a href="#testimonials"><span>08</span> <span class="text">testimonials</span> </a>
            </li>
             */
        }
        <li class="nav-link">
            <a href="#contact"><span>07</span> <span class="text">contact</span> </a>
        </li>
    </ul>
    <div class="contact">
        <a href="mailto:marco.starker@gmx.net"><i class="ph ph-at"></i> marco.starker@gmx.net</a>
        <a href="tel:+491605543322"><i class="ph ph-phone-call"></i> +49 160 5543322</a>
        <div class="d-flex flex-row gap-3">
            <a href="https://storage.rxresu.me/clxbgu1nm003mv6lwyhrcjjta/resumes/CV (english) (long).pdf" download title="download CV"><i class="ph ph-download-simple"></i></a>
            <a href="https://github.com/DasRed" target="_blank"><i class="ph ph-github-logo"></i></a>
            <a href="https://www.linkedin.com/in/marco-starker-100090272/" target="_blank"><i class="ph ph-linkedin-logo"></i></a>
        </div>
    </div>
</nav>
`;