import Link from 'next/link';

export function BrandLogo() {
  // Serve this precompressed asset directly to avoid suspending the no-JS shell.
  return (
    <Link href="/" className="brand-logo" aria-label="Zaustory, beranda">
      <img
        src="/brand/zaustory-light.png"
        alt="Zaustory"
        width={640}
        height={138}
        loading="eager"
        className="brand-logo-image"
      />
    </Link>
  );
}
