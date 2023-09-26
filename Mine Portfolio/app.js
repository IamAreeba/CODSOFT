

//  =============== JS For Toggle Icon Navbar JS ============== 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// ============== JS For Scroll Sections Active Links  ============== 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });


    // ============= JS For Sticky NavBar =============== 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);



    // ========= JS For Removing toggle icon and navbar when click we click on navbar link (when scroll)  ===================

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


//   ============ JS For Scroll Reveal =============== 
ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-content', {origin: 'left'});
ScrollReveal().reveal('.home-content p, about-content', {origin: 'right'});


// ================= Typed JS =======================
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'C# Programmer', '.NET Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})