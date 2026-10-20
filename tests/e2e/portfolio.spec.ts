import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const albumRoutes = [
  ['minsoc', 'Minsoc', 20],
  ['lapangan-bola', 'Lapangan bola', 10],
  ['basket', 'Basket', 10],
  ['padel', 'Padel', 10],
  ['event', 'Event', 30],
] as const;

test('shows the requested portfolio and filters the album collection', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Momen berlalu.Cerita tinggal.',
  );
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(5);
  await expect(
    page.getByText('Kampanye Walikota', { exact: true }),
  ).toBeVisible();
  await expect(page.getByText('EPA PSPS', { exact: true })).toBeVisible();
  await expect(
    page.getByText('Piala Walikota x ISAC', { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText('80 foto direncanakan', { exact: false }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /WhatsApp/ })).toHaveCount(0);
  await expect(
    page.getByRole('img', {
      name: 'Potret fotografer. Foto transparan belum tersedia.',
    }),
  ).toBeVisible();
  const experiences = page.getByRole('list', { name: 'Pengalaman Zaustory' });
  await expect(experiences.getByRole('listitem')).toHaveCount(3);
  for (const experience of await experiences.getByRole('listitem').all()) {
    await expect(experience.getByRole('img')).toHaveCount(1);
  }
  await page.getByRole('button', { name: 'Event', exact: true }).click();
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(1);
  await expect(page.getByRole('status')).toHaveText('1 album');
  await page.getByRole('button', { name: 'Olahraga', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(4);
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(5);
  expect(errors).toEqual([]);
});

test('serves every planned photo slot with honest counts and unique titles', async ({
  page,
}) => {
  for (const [slug, name, count] of albumRoutes) {
    const response = await page.goto(`/album/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`Album ${name} | Zaustory`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      `${name}.`,
    );
    await expect(
      page.getByText('Foto belum tersedia', { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Kembali ke album' }),
    ).toHaveAttribute('href', '/#album');
    await expect(
      page.getByRole('button', { name: /Perbesar foto/ }),
    ).toHaveCount(0);
    const gallery = page.getByRole('list', { name: `Galeri ${name}` });
    await expect(gallery.getByRole('listitem')).toHaveCount(count);
    await expect(gallery.getByRole('img', { name: /^Slot foto/ })).toHaveCount(
      count,
    );
    await expect(page.getByText('0 foto', { exact: true })).toBeVisible();
  }
});

test('moves photo rows in opposite directions and supports pause and reduced motion', async ({
  page,
}) => {
  await page.goto('/');
  const reel = page.getByRole('region', {
    name: 'Pilihan foto dari seluruh album',
  });
  const tracks = reel.locator('.reel-track');
  await expect(tracks).toHaveCount(2);
  const offsets = () =>
    tracks.evaluateAll((elements) =>
      elements.map(
        (element) => new DOMMatrix(getComputedStyle(element).transform).m41,
      ),
    );
  const start = await offsets();
  await expect
    .poll(async () => {
      const current = await offsets();
      return current[0]! < start[0]! && current[1]! > start[1]!;
    })
    .toBe(true);
  await reel.getByRole('button', { name: 'Jeda animasi' }).click();
  await expect(tracks.first()).toHaveCSS('animation-play-state', 'paused');
  const paused = await offsets();
  await expect(tracks.last()).toHaveCSS('animation-play-state', 'paused');
  expect(await offsets()).toEqual(paused);
  await reel.getByRole('button', { name: 'Putar animasi' }).click();
  await expect(tracks.first()).toHaveCSS('animation-play-state', 'running');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(tracks.first()).toHaveCSS('animation-name', 'none');
  await expect(reel.getByRole('button')).toBeHidden();
});

test('returns HTTP 404 for an unknown album and exposes a recovery link', async ({
  page,
}) => {
  const response = await page.goto('/album/tidak-ada');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'belum ditemukan.',
  );
  await page
    .getByRole('link', { name: 'Kembali ke album', exact: true })
    .click();
  await expect(page).toHaveURL('/#album');
});

test('opens the mobile menu, supports Escape, and follows anchors', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /^(Buka|Tutup) menu$/ });
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page
    .getByRole('navigation', { name: 'Navigasi seluler' })
    .getByRole('link', { name: 'Album', exact: true })
    .focus();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Navigasi seluler' })
    .getByRole('link', { name: 'Kontak', exact: true })
    .click();
  await expect(page).toHaveURL('/#kontak');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('provides a keyboard skip link and honors reduced motion', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Lewati ke konten utama' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  expect(
    await page
      .getByRole('heading', { level: 1 })
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none');
});

test('has no horizontal overflow on small, medium, or large screens', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/album/lapangan-bola', '/album/tidak-ada']) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: innerWidth,
      }));
      expect(dimensions.content, `${route} at ${width}px`).toBeLessThanOrEqual(
        dimensions.viewport,
      );
    }
  }
});

test('passes automated accessibility checks on the main route types', async ({
  page,
}) => {
  for (const route of ['/', '/album/minsoc', '/album/tidak-ada']) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map(({ id, impact, nodes }) => ({
        id,
        impact,
        targets: nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  }
});

test('keeps filters usable after going offline', async ({ page, context }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await context.setOffline(true);
  try {
    await page.getByRole('button', { name: 'Event', exact: true }).click();
    await expect(page.getByRole('status')).toHaveText('1 album');
  } finally {
    await context.setOffline(false);
  }
});

test('renders album links and empty details without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    await page.goto('http://127.0.0.1:3100/');
    await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(
      5,
    );
    await expect(page.locator('.reel-track').first()).toHaveCSS(
      'animation-name',
      'none',
    );
    await expect(
      page.getByRole('button', { name: 'Jeda animasi' }),
    ).toBeHidden();
    await page.getByRole('link', { name: /Minsoc/ }).click();
    await expect(
      page.getByText('Foto belum tersedia', { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole('list', { name: 'Galeri Minsoc' }).getByRole('listitem'),
    ).toHaveCount(20);
  } finally {
    await context.close();
  }
});

test('serves secure headers and keeps unfinished content out of search indexes', async ({
  request,
}) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);
  expect(response.headers()['x-content-type-options']).toBe('nosniff');
  expect(response.headers()['x-frame-options']).toBe('DENY');
  expect(response.headers()['content-security-policy']).toContain(
    "frame-ancestors 'none'",
  );
  expect(response.headers()['x-powered-by']).toBeUndefined();
  expect(await response.text()).toContain('noindex, nofollow');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain('<loc>');
});

test('captures the portfolio for visual inspection', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: testInfo.outputPath('home.png'),
    fullPage: true,
    animations: 'disabled',
  });
  await page.goto('/album/minsoc');
  await page.screenshot({
    path: testInfo.outputPath('album.png'),
    fullPage: true,
    animations: 'disabled',
  });
});
