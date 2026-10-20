'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (
      !element ||
      motion.matches ||
      !('IntersectionObserver' in window) ||
      typeof element.animate !== 'function'
    ) {
      return;
    }

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        if (motion.matches || element.contains(document.activeElement)) return;

        const styles = getComputedStyle(element);
        const duration = styles.getPropertyValue('--duration-enter').trim();

        // Animate only on entry; server-rendered content stays visible without JS.
        animation = element.animate(
          [
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          {
            // Production CSS can normalize milliseconds to seconds.
            duration:
              parseFloat(duration) * (duration.endsWith('ms') ? 1 : 1000),
            easing: styles.getPropertyValue('--ease-out').trim(),
          },
        );
        animation.id = 'section-reveal';
      },
      { rootMargin: '0px 0px -40px 0px' },
    );

    const cancelAnimation = () => animation?.cancel();
    const onMotionChange = () => {
      if (motion.matches) {
        observer.disconnect();
        cancelAnimation();
      }
    };

    observer.observe(element);
    element.addEventListener('focusin', cancelAnimation);
    motion.addEventListener('change', onMotionChange);

    return () => {
      observer.disconnect();
      cancelAnimation();
      element.removeEventListener('focusin', cancelAnimation);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <div ref={ref} className={className} data-scroll-reveal>
      {children}
    </div>
  );
}
