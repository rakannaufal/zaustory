import { BrandLogo } from '@/components/brand-logo';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <BrandLogo />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Zaustory &middot; Website by{' '}
          <a
            href="https://www.instagram.com/rakandevv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link footer-credit"
          >
            rakandev
          </a>
        </p>
      </div>
    </footer>
  );
}
