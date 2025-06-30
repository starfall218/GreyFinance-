// src/utils/borderGlow.js

export const applyBorderGlow = (element) => {
  if (!element) return () => {}; // Return a no-op cleanup if element is null

  element.style.setProperty('--mouse-x', '50%');
  element.style.setProperty('--mouse-y', '50%');
  element.style.setProperty('--glow-opacity', '0');

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
    element.style.setProperty('--glow-opacity', '1');
  };

  const handleMouseLeave = () => {
    element.style.setProperty('--glow-opacity', '0');
    element.style.setProperty('--mouse-x', `50%`);
    element.style.setProperty('--mouse-y', `50%`);
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};