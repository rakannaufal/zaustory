type PublicEnvironment = Readonly<{
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_WHATSAPP_NUMBER?: string;
  NEXT_PUBLIC_ALLOW_INDEXING?: string;
}>;

export function getPublicConfig(environment: PublicEnvironment) {
  let origin: string | null = null;

  try {
    const url = new URL(environment.NEXT_PUBLIC_SITE_URL ?? '');
    if (
      url.protocol === 'https:' &&
      !url.username &&
      !url.password &&
      url.pathname === '/' &&
      !url.search &&
      !url.hash
    ) {
      origin = url.origin;
    }
  } catch {
    // Missing or invalid configuration keeps canonical URLs and indexing off.
  }

  const number = environment.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const message = 'Halo Zaustory, saya ingin berdiskusi tentang pemotretan.';
  const whatsappUrl = /^[1-9]\d{7,14}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;

  return {
    origin,
    whatsappUrl,
    allowIndexing:
      environment.NEXT_PUBLIC_ALLOW_INDEXING === 'true' && origin !== null,
  };
}

export const publicConfig = getPublicConfig({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_ALLOW_INDEXING: process.env.NEXT_PUBLIC_ALLOW_INDEXING,
});
