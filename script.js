// =========================
// MOBILE MENU TOGGLE
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// =========================
// AUTO TYPING EFFECT
// =========================
const roles = ["Java Developer", "AI/ML Enthusiast", "Full-Stack Developer & Problem Solver"];
let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (index >= roles.length) return;

    if (charIndex < roles[index].length) {
        typingElement.innerHTML += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        typingElement.innerHTML += "<br>";
        index++;
        charIndex = 0;
        setTimeout(typeEffect, 400);
    }
}

typeEffect();

// =========================
// SKILLS TAB FUNCTIONALITY
// =========================
function openTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}

// =========================
// SMOOTH SCROLL ANIMATION
// =========================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project and experience cards
    document.querySelectorAll('.project-card, .experience-card').forEach(card => {
        observer.observe(card);
    });

    // =========================
    // NAVBAR BACKGROUND ON SCROLL
    // =========================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(43, 0, 102, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(43, 0, 102, 0.7)';
        }
    });

    // =========================
    // TILT EFFECT ON CARDS
    // =========================
    const cards = document.querySelectorAll('.project-card, .experience-card, .edu-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});


