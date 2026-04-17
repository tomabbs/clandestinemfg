// Clandestine Manufacturing - Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for links that just open/close things
      if (href === '#' || href === '#login') {
        return;
      }
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offset = 100; // Account for fixed nav
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements on scroll
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
  
  // Observe product cards and benefit cards
  document.querySelectorAll('.product-card, .benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  // Track CTA clicks for analytics
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      console.log('CTA clicked:', buttonText);
      
      // If you have analytics (GA4, etc.), track it here:
      // gtag('event', 'cta_click', { button_text: buttonText });
    });
  });
  
  // Log page view for analytics
  console.log('Clandestine Manufacturing landing page loaded');
  
  // If you have analytics, track page view:
  // gtag('event', 'page_view', { page_title: 'Landing Page' });
  
});

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition-fast', '0ms');
  document.documentElement.style.setProperty('--transition-medium', '0ms');
  document.documentElement.style.setProperty('--transition-slow', '0ms');
}
