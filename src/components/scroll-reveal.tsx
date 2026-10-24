'use client';

import { useEffect, useRef, type ReactNode } from 'react';

function milliseconds(value: string) {
  const time = value.trim();
  // Production CSS can normalize milliseconds to seconds.
  return parseFloat(time) * (time.endsWith('ms') ? 1 : 1000);
}

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
      element.contains(document.activeElement) ||
      typeof IntersectionObserver !== 'function' ||
      typeof element.animate !== 'function'
    ) {
      return;
    }

    const styles = getComputedStyle(element);
    const duration = milliseconds(styles.getPropertyValue('--duration-reveal'));
    const mediaDuration = milliseconds(
      styles.getPropertyValue('--duration-reveal-media'),
    );
    const stagger = milliseconds(styles.getPropertyValue('--reveal-stagger'));
    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        let mediaOrder = 0;
        let textOrder = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          const animation = animations.get(target);
          if (!animation) continue;
          const media =
            target.dataset.reveal === 'media' || target.matches('video');
          const order = media ? mediaOrder++ : textOrder++;

          animation.effect?.updateTiming({
            delay: Math.min(order, 3) * stagger,
          });
          animation.play();
        }
      },
      { rootMargin: '0px 0px -24px 0px', threshold: 0.08 },
    );

    const showImmediately = () => {
      observer.disconnect();
      for (const animation of animations.values()) animation.cancel();
      animations.clear();
    };
    const onMotionChange = () => {
      if (motion.matches) showImmediately();
    };

    const targets = Array.from(
      element.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    if (!targets.length) targets.push(element);

    for (const target of targets) {
      // Only prepare content below the fold; never hide content already in view.
      if (target.getBoundingClientRect().top < window.innerHeight) continue;
      const media = target.dataset.reveal === 'media';
      const fadeOnly = target.dataset.reveal === 'fade';
      // Keep interactive hit areas still, including when focus ends an entrance.
      const interactive =
        target.matches('a, button, video[controls]') ||
        target.querySelector('a, button, video[controls]');
      const animation = target.animate(
        [
          {
            opacity: 0,
            transform:
              interactive || fadeOnly
                ? 'none'
                : media
                  ? 'translateY(24px) scale(0.96)'
                  : 'translateY(24px)',
          },
          { opacity: 1, transform: 'none' },
        ],
        {
          duration: media ? mediaDuration : duration,
          easing: styles.getPropertyValue('--ease-out').trim(),
          fill: 'both',
        },
      );
      animation.id = 'section-reveal';
      animation.pause();
      animation.currentTime = 0;
      animation.onfinish = () => {
        animation.cancel();
        animations.delete(target);
      };
      animations.set(target, animation);
      observer.observe(target);
    }

    element.addEventListener('focusin', showImmediately);
    motion.addEventListener('change', onMotionChange);

    return () => {
      showImmediately();
      element.removeEventListener('focusin', showImmediately);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <div ref={ref} className={className} data-scroll-reveal>
      {children}
    </div>
  );
}
