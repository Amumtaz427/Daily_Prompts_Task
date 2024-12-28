// GSAP animation for gallery images
gsap.from(".gallery-item", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".gallery-container",
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
    }
});

// GSAP animation for header
gsap.from("header h1", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
});

// GSAP animation for section content
gsap.from("section h2", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
});