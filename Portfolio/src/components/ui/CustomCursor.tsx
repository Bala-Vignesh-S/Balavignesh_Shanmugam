import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
          border: '1px solid rgba(0, 212, 255, 0.3)',
          boxShadow: '0 0 12px rgba(0, 212, 255, 0.15)',
          transform: `scale(${isPointer ? 1.2 : 1})`,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[var(--accent-cyan)]"
        style={{
          left: position.x - 3,
          top: position.y - 3,
          width: 6,
          height: 6,
          boxShadow: '0 0 8px rgba(0, 212, 255, 0.5)',
        }}
      />
    </>
  );
}
