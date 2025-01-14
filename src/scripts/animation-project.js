gsap.set("#project-1", { y: 100, opacity: 0 });
ScrollTrigger.batch("#project-1", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});
gsap.set("#project-2", { y: 100, opacity: 0 });
ScrollTrigger.batch("#project-2", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});
gsap.set("#project-3", { y: 100, opacity: 0 });
ScrollTrigger.batch("#project-3", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});