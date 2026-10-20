'use client';

import Link from 'next/link';
import { Aperture, ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BrandLogo } from '@/components/brand-logo';

const navigation = [
  { href: '/#tentang', label: 'Tentang' },
  { href: '/#album', label: 'Album' },
  { href: '/#pengalaman', label: 'Pengalaman' },
  { href: '/#kontak', label: 'Kontak' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }

    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <BrandLogo />

        <nav className="desktop-navigation" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.label === 'Kontak'
                  ? 'navigation-contact photography-cta'
                  : ''
              }
            >
              {item.label === 'Kontak' && (
                <Aperture
                  size={16}
                  className="cta-aperture"
                  aria-hidden="true"
                />
              )}
              {item.label}
              {item.label === 'Kontak' && (
                <ArrowUpRight size={16} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation container"
        aria-label="Navigasi seluler"
        hidden={!isOpen}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
