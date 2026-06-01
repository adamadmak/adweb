'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Typing Effect
    const typedTextEl = document.getElementById('typed-text');
    const phrases = [
      'Spring Boot Architect',
      'DevOps Engineer',
      'Kubernetes Expert',
      'Angular Developer',
      'VAS Specialist',
      'AI-Powered Coder',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;
    let typeTimeout;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeDelay = 50;
      } else {
        typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeDelay = 100;
      }
      if (!isDeleting && charIndex === currentPhrase.length) {
        typeDelay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeDelay = 500;
      }
      typeTimeout = setTimeout(typeEffect, typeDelay);
    }
    if (typedTextEl) {
      typeTimeout = setTimeout(typeEffect, 1000);
    }

    // Scroll Animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    animateElements.forEach((el) => observer.observe(el));

    // Navbar
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        navbar.classList.add('nav--scrolled');
      } else {
        navbar.classList.remove('nav--scrolled');
      }
      if (scrollY > lastScrollY && scrollY > 400) {
        navbar.classList.add('nav--hidden');
      } else {
        navbar.classList.remove('nav--hidden');
      }
      lastScrollY = scrollY;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll);

    // Active Nav Link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function updateActiveLink() {
      const scrollY = window.scrollY + 200;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('nav__link--active');
            }
          });
        }
      });
    }
    window.addEventListener('scroll', updateActiveLink);

    // Mobile Menu
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    function toggleMenu() {
      navToggle.classList.toggle('nav__toggle--active');
      mobileMenu.classList.toggle('mobile-menu--open');
      document.body.classList.toggle('no-scroll');
    }

    function closeMenu() {
      navToggle.classList.remove('nav__toggle--active');
      mobileMenu.classList.remove('mobile-menu--open');
      document.body.classList.remove('no-scroll');
    }

    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', toggleMenu);
      mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));
    }

    // Counters
    let countersAnimated = false;
    const heroStats = document.querySelector('.hero__stats');

    function animateCounters() {
      if (countersAnimated) return;
      const counters = document.querySelectorAll('.hero__stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        const duration = 2000;
        const startTime = performance.now();
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(eased * target);
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        }
        requestAnimationFrame(updateCounter);
      });
      countersAnimated = true;
    }

    if (heroStats) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateCounters();
            counterObserver.unobserve(heroStats);
          }
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(heroStats);
    }

    // Skill Bars
    const skillBars = document.querySelectorAll('.skill-bar__fill');
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = `${width}%`;
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    skillBars.forEach((bar) => skillObserver.observe(bar));

    // Smooth Scrolling
    function handleAnchorClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target && navbar) {
          const navHeight = navbar.offsetHeight;
          const targetPosition = target.offsetTop - navHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick));

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    function handleSubmit(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/></svg> Sending...';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
        submitBtn.classList.add('btn--success');
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn--success');
          contactForm.reset();
        }, 3000);
      }, 1500);
    }
    if (contactForm) {
      contactForm.addEventListener('submit', handleSubmit);
    }

    // Parallax Float Cards
    const floatCards = document.querySelectorAll('.hero__float-card');
    function handleMouseMove(e) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;
      floatCards.forEach((card, index) => {
        const intensity = (index + 1) * 8;
        card.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
      });
    }
    if (floatCards.length > 0 && window.matchMedia('(min-width: 768px)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    document.body.classList.add('loaded');

    // Cleanup
    return () => {
      clearTimeout(typeTimeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('mousemove', handleMouseMove);
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick));
      if (contactForm) contactForm.removeEventListener('submit', handleSubmit);
      if (navToggle) navToggle.removeEventListener('click', toggleMenu);
      mobileLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return null;
}
