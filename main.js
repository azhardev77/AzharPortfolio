/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
/*===== ACTIVE NAV LINK ON SCROLL =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute('id');

        const navLink = document.querySelector(
            `.nav__menu a[href="#${sectionId}"]`
        );

        if (!navLink) return;

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*===== SCROLL REVEAL ANIMATION =====*/
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: false
})

/*===== HOME =====*/
sr.reveal('.home__title', {})
sr.reveal('.home__img', { origin: 'right', delay: 300 })
sr.reveal('.home__social a', { delay: 400, interval: 150 })
sr.reveal('.home__scroll', { delay: 600 })

/*===== ABOUT =====*/
sr.reveal('.about__img', { delay: 300 })
sr.reveal('.about__subtitle', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social a', { delay: 600, interval: 150 })

/*===== SKILLS =====*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { interval: 120 })
sr.reveal('.skills__img', { delay: 300 })
sr.reveal('.skill-name', { interval: 120 })


/*===== PROJECTS =====*/
sr.reveal('#projects .project-card', { interval: 200 })

/*===== CONTACT =====*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { delay: 200 })
sr.reveal('.contact__input', { interval: 150 })
sr.reveal('.contact__button', { delay: 400 })



                    // darkmode



    
function copyPhone() {
    const number = "+917747047876";
    navigator.clipboard.writeText(number).then(() => {
        const feedback = document.getElementById("copy-feedback");
        feedback.textContent = "Number copied ✔";
        setTimeout(() => {
            feedback.textContent = "";
        }, 1500);
    });
}


function copyEmail() {
    const email = "azhardev97@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const feedback = document.getElementById("email-copy-feedback");
        feedback.textContent = "Email copied ✔";
        setTimeout(() => {
            feedback.textContent = "";
        }, 1500);
    });
}



//     const toggle = document.querySelector(".dark-mode-btn");

// toggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// });
/*===== DARK MODE WITH LOCAL STORAGE =====*/
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

/* Apply saved theme on load */
if (toggleSwitch) {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        toggleSwitch.checked = true;
    }

    /* Switch theme */
    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme);
}

                        /* skills bar animation*/

// ===== SKILL BAR ANIMATION =====
// ===== SKILL BAR ANIMATION =====
// ===== SKILL BAR ANIMATION (FIXED) =====
/*===== SKILL BAR ANIMATION (FINAL FIX) =====*/
document.addEventListener("DOMContentLoaded", () => {
    const skillSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skills-progress');

    if (!skillSection || skillBars.length === 0) return;

    const animateSkills = () => {
        skillBars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.width = level;
        });
    };

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.disconnect(); // run once
            }
        },
        { threshold: 0.25 }
    );

    observer.observe(skillSection);
});

document.querySelectorAll(".skill-bar").forEach(bar => {
    const progress = bar.querySelector(".skills-progress");

    bar.addEventListener("mousemove", e => {
        const rect = bar.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        progress.style.setProperty("--glow-x", `${x}%`);
    });

    bar.addEventListener("mouseleave", () => {
        progress.style.setProperty("--glow-x", "50%");
    });
});


