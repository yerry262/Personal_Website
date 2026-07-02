// Shared framer-motion presets so every section animates consistently.

// Fade-up entrance when scrolled into view.
export const fadeUp = (delay = 0, duration = 0.8, y = 50) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration, delay },
  viewport: { once: true }
});

// Slide-in from the left when scrolled into view.
export const fadeLeft = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration, delay },
  viewport: { once: true }
});

// Scale-in pop when scrolled into view.
export const popIn = (delay = 0, duration = 0.5) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration, delay },
  viewport: { once: true }
});

// Hover lift for glass cards (framer owns the transform, so it never
// fights the entrance animation).
export const cardHover = {
  y: -5,
  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
};
