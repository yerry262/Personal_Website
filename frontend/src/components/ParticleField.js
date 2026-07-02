import React, { useEffect, useRef } from 'react';

// Interactive particle network (ported from the Welcome repo's canvas
// background): drifting glow dots linked by fading lines, repelled from
// the pointer within REPEL_RADIUS. Works with mouse movement and taps.

const COLORS = [
  'rgba(59, 130, 246, 0.8)',   // blue-500
  'rgba(14, 165, 233, 0.7)',   // sky-500
  'rgba(6, 182, 212, 0.7)',    // cyan-500
  'rgba(147, 197, 253, 0.6)'   // blue-300
];
const LINK_DISTANCE = 120;
const REPEL_RADIUS = 150;
const MAX_SPEED = 2;

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const mouse = { x: null, y: null };
    let particles = [];
    let width = 0;
    let height = 0;
    let rafId;
    let tapTimeout;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const count = Math.min(80, Math.max(30, Math.floor((width * height) / 15000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      }));
    };

    const setPointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    };

    const onPointerMove = (e) => setPointer(e.clientX, e.clientY);
    const onPointerDown = (e) => {
      setPointer(e.clientX, e.clientY);
      // let a tap ripple the particles, then release so they settle
      clearTimeout(tapTimeout);
      tapTimeout = setTimeout(() => {
        mouse.x = null;
        mouse.y = null;
      }, 400);
    };
    const onPointerLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const onResize = () => {
      resize();
      init();
    };

    const update = () => {
      for (const p of particles) {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS) {
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 0.5;
            p.vy += Math.sin(angle) * force * 0.5;
          }
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, p.vx));
        p.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, p.vy));
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const opacity = 1 - dist / LINK_DISTANCE;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      update();
      draw();
      rafId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(tapTimeout);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full"
    />
  );
};

export default ParticleField;
