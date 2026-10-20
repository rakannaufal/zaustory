import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { site } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <BrandLogo />
        <p>
          &copy; {new Date().getFullYear()} Zaustory &middot; {site.location}
        </p>
        <div className="footer-links">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {site.instagramHandle}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/rakandevv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Credit by rakandev
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
