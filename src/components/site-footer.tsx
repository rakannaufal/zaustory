import { BrandLogo } from '@/components/brand-logo';
import { site } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <BrandLogo />
        <a
          href="https://www.instagram.com/rakandevv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link footer-copyright"
        >
          &copy; {new Date().getFullYear()} Zaustory &middot; {site.location}
        </a>
      </div>
    </footer>
  );
}
