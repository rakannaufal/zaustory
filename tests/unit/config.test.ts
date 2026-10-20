import { describe, expect, it } from 'vitest';
import { getPublicConfig } from '@/lib/config';

describe('public configuration', () => {
  it('defaults to no indexing, no invented origin, and no WhatsApp', () => {
    expect(getPublicConfig({})).toEqual({
      origin: null,
      allowIndexing: false,
      whatsappUrl: null,
    });
  });

  it.each([
    'http://example.com',
    'https://example.com/path',
    'https://user:password@example.com',
    'javascript:alert(1)',
    'https://example.com/?token=1',
    'https://example.com/#fragment',
    'not a url',
  ])('keeps indexing off for invalid origin %s', (origin) => {
    const config = getPublicConfig({
      NEXT_PUBLIC_SITE_URL: origin,
      NEXT_PUBLIC_ALLOW_INDEXING: 'true',
    });
    expect(config.origin).toBeNull();
    expect(config.allowIndexing).toBe(false);
  });

  it('requires an explicit indexing flag in addition to a valid origin', () => {
    expect(
      getPublicConfig({ NEXT_PUBLIC_SITE_URL: 'https://example.com/' })
        .allowIndexing,
    ).toBe(false);
    expect(
      getPublicConfig({
        NEXT_PUBLIC_SITE_URL: 'https://example.com/',
        NEXT_PUBLIC_ALLOW_INDEXING: 'true',
      }),
    ).toMatchObject({ origin: 'https://example.com', allowIndexing: true });
  });

  it.each([
    '',
    '08123456789',
    '+628123456789',
    '62812 345',
    '1234567',
    '1234567890123456',
    'https://example.com',
  ])('hides WhatsApp for unsupported number %s', (number) => {
    expect(
      getPublicConfig({ NEXT_PUBLIC_WHATSAPP_NUMBER: number }).whatsappUrl,
    ).toBeNull();
  });

  it('creates a WhatsApp link with an encoded message for a valid number', () => {
    const config = getPublicConfig({
      NEXT_PUBLIC_WHATSAPP_NUMBER: '628123456789',
    });
    const url = new URL(config.whatsappUrl!);
    expect(url.origin).toBe('https://wa.me');
    expect(url.pathname).toBe('/628123456789');
    expect(url.searchParams.get('text')).toContain('Halo Zaustory');
  });
});
