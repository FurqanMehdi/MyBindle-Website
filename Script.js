// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".logo-title, .content .left h2, .content .left p, .cta, .phone", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  }
});

// Features Section
gsap.from(".features-title, .features-subtitle, .feature-card", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
  }
});

// Connection Section
gsap.from(".connection-left img, .connection-right h2, .highlight-text, .card-box", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".connection-section",
    start: "top 80%",
  }
});

// Install Section
gsap.from(".install h1, .subtitle, .step, .number", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".install",
    start: "top 85%",
  }
});

// Donation Banner
gsap.from(".banner-text h1, .banner-text p, .banner-text button, .banner-images img", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".donation-banner",
    start: "top 80%",
  }
});

// Testimonials Section
gsap.from(".section-title, .testimonial-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 85%",
  }
});

// Footer / Download Section (Content only)
gsap.from(".download-content h2, .download-content p, .store-buttons img", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 90%",
  }
});

// Animate mockup images separately (no opacity reset)
// Animate mockup images separately (from bottom to top)
gsap.from(".mockup-images img", {
  y: -18, // 👈 Changed from 40 to -40
  delay: 0.5,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 90%",
  }
});




