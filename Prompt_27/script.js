gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".hero-title", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".hero-subtitle", { duration: 1, x: 100, opacity: 0, delay: 0.3 });
gsap.from(".hero-btn", {
  duration: 1,
  scale: 0,
  ease: "back.out(1.7)",
  delay: 0.5,
});
gsap.from(".about h2", { duration: 1, opacity: 0, scale: 0.5, delay: 0.3 });
gsap.from(".portfolio-item", { duration: 1, opacity: 0, y: 100, stagger: 0.3 });
gsap.from(".contact h2", { duration: 1, x: -50, opacity: 0 });
