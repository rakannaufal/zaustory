import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const albumRoutes = [
  ['minsoc', 'Minsoc', 20, '18046316087620940'],
  ['lapangan-bola', 'Football', 10, '17875753182361815'],
  ['basket', 'Basket', 10, '17963732528941047'],
  ['event', 'Event', 30, '17986710449824514'],
] as const;

test('shows the requested portfolio and filters the album collection', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Di lapangan.Dalam ingatan.',
  );
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(4);
  await expect(
    page.getByText('Kampanye Walikota', { exact: true }),
  ).toBeVisible();
  await expect(page.getByText('EPA PSPS', { exact: true })).toBeVisible();
  await expect(
    page.getByText('Piala Walikota x ISAC', { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText('Jelajahi foto pertandingan Minsoc', { exact: false }),
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
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(3);
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(4);
  expect(errors).toEqual([]);
});

test('shows the public Instagram identity, local contact, and profile credits', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page).toHaveTitle(
    'Zaustory | Fotografi olahraga & event Pekanbaru',
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /Pekanbaru, Riau/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    await page.title(),
  );
  await expect(page.locator('.hero-eyebrow')).toHaveText('Pekanbaru, Riau');
  const about = page.locator('#tentang');
  await expect(about.getByText('Zau Story | Agency Media')).toBeVisible();
  for (const [handle, url] of [
    ['@rzzwadzaky', 'https://www.instagram.com/rzzwadzaky/'],
    ['@langkaahsenja_', 'https://www.instagram.com/langkaahsenja_/'],
  ] as const) {
    const credit = about.getByRole('link', { name: handle, exact: true });
    await expect(credit).toHaveAttribute('href', url);
    await expect(credit).toHaveAttribute('rel', 'noopener noreferrer');
  }
  const contact = page.locator('#kontak');
  await expect(
    contact.getByRole('link', { name: 'Hubungi via Instagram' }),
  ).toHaveAttribute('href', 'https://www.instagram.com/zauustory/');
  await expect(
    contact.getByRole('link', { name: 'Telepon +62 838-5465-3003' }),
  ).toHaveAttribute('href', 'tel:+6283854653003');
  const footer = page.getByRole('contentinfo');
  await expect(footer.locator('.footer-copyright')).toHaveText(
    /^© \d{4} Zaustory · Website by rakandev$/,
  );
  const credit = footer.getByRole('link', { name: 'rakandev', exact: true });
  await expect(credit).toHaveAttribute(
    'href',
    'https://www.instagram.com/rakandevv/',
  );
  await expect(credit).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(footer.getByRole('link')).toHaveCount(2);
  await expect(footer.getByText('Credit by rakandev')).toHaveCount(0);
  await expect(footer.getByText('@zauustory')).toHaveCount(0);
  await expect(
    page.locator('a[href="https://www.instagram.com/zaustory/"]'),
  ).toHaveCount(0);
});

test('serves every planned photo slot with honest counts and unique titles', async ({
  page,
}) => {
  for (const [slug, name, count, highlight] of albumRoutes) {
    const publishedCount = ['minsoc', 'lapangan-bola', 'basket'].includes(slug)
      ? 10
      : 0;
    const response = await page.goto(`/album/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`Album ${name} | Zaustory`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      `${name}.`,
    );
    await expect(
      page.getByText('Foto belum tersedia', { exact: true }),
    ).toHaveCount(publishedCount ? 0 : 1);
    await expect(
      page.getByRole('link', { name: 'Kembali ke album' }),
    ).toHaveAttribute('href', '/#album');
    await expect(
      page.getByRole('button', { name: /Perbesar foto/ }),
    ).toHaveCount(publishedCount);
    const gallery = page.getByRole('list', { name: `Galeri ${name}` });
    await expect(gallery.getByRole('listitem')).toHaveCount(count);
    await expect(gallery.getByRole('img', { name: /^Slot foto/ })).toHaveCount(
      count - publishedCount,
    );
    await expect(
      page
        .locator('dl > div')
        .filter({ has: page.getByText('Tayang', { exact: true }) })
        .getByRole('definition'),
    ).toHaveText(`${publishedCount} foto`);
    if (publishedCount) {
      const firstPhoto = gallery.getByRole('button').first();
      await firstPhoto.scrollIntoViewIfNeeded();
      await expect(firstPhoto.locator('img')).toBeVisible();
      await expect
        .poll(() =>
          firstPhoto
            .locator('img')
            .evaluate((img: HTMLImageElement) => img.naturalWidth),
        )
        .toBeGreaterThan(0);
      await firstPhoto.click();
      const dialog = page.getByRole('dialog', { name: 'Pembesaran foto' });
      await expect(dialog).toBeVisible();
      await expect(dialog.locator('figcaption')).toHaveCount(0);
      await expect(dialog.getByRole('status')).toHaveText('Foto 1 dari 10');
      await page.keyboard.press('ArrowLeft');
      await expect(dialog.getByRole('status')).toHaveText('Foto 10 dari 10');
      await page.keyboard.press('ArrowRight');
      await expect(dialog.getByRole('status')).toHaveText('Foto 1 dari 10');
      await page.keyboard.press('Escape');
      await expect(dialog).toHaveCount(0);
      await expect(firstPhoto).toBeFocused();
    } else {
      await expect(
        page.getByRole('link', {
          name: highlight ? `Lihat sorotan ${name}` : 'Lihat Instagram',
          exact: true,
        }),
      ).toHaveAttribute(
        'href',
        highlight
          ? `https://www.instagram.com/stories/highlights/${highlight}/`
          : 'https://www.instagram.com/zauustory/',
      );
    }
  }
});

test('places the photographer profile directly after the photo rows', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.photo-reel + #tentang + #album')).toHaveCount(1);
  const about = page.getByRole('region', { name: /di balik setiap cerita\./i });
  await expect(about.getByRole('img')).toHaveCount(1);
  await expect(
    about.getByRole('img', {
      name: 'Potret fotografer Zaustory. Foto belum tersedia.',
    }),
  ).toBeVisible();
  await expect(page.locator('.desktop-navigation a')).toHaveText([
    'Tentang',
    'Album',
    'Pengalaman',
    'Kontak',
  ]);
});

test('reveals sections once and respects motion preferences and keyboard focus', async ({
  page,
}) => {
  for (const id of ['tentang', 'album', 'pengalaman', 'kontak']) {
    await page.goto('/');
    const content = page.locator(`#${id} > [data-scroll-reveal]`);
    const title = content.locator('[data-reveal]').first();
    const runningReveal = () =>
      title.evaluate((element) =>
        element
          .getAnimations()
          .some(
            (animation) =>
              animation.id === 'section-reveal' &&
              animation.playState === 'running',
          ),
      );

    expect(await runningReveal()).toBe(false);
    await expect(title).toHaveCSS('opacity', '0');
    const bounds = await title.boundingBox();
    expect(bounds).not.toBeNull();
    // Scroll without waiting for the entrance transform to become stable.
    await page.mouse.wheel(0, bounds!.y - 160);
    await expect.poll(runningReveal).toBe(true);
    await expect.poll(runningReveal).toBe(false);
    await expect(title).toHaveCSS('opacity', '1');
    await expect(title).toHaveCSS('transform', 'none');

    await page.locator('.hero').scrollIntoViewIfNeeded();
    await title.scrollIntoViewIfNeeded();
    expect(await runningReveal()).toBe(false);
  }

  await page.goto('/');
  const aboutContent = page.locator('#tentang > [data-scroll-reveal]');
  const bounds = await aboutContent
    .locator('[data-reveal]')
    .first()
    .boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.wheel(0, bounds!.y - 160);
  await expect
    .poll(() =>
      aboutContent.evaluate(
        (element) =>
          element
            .getAnimations({ subtree: true })
            .filter((animation) => animation.playState === 'running').length,
      ),
    )
    .toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect
    .poll(() =>
      aboutContent.evaluate(
        (element) => element.getAnimations({ subtree: true }).length,
      ),
    )
    .toBe(0);
  await expect(aboutContent).toHaveCSS('opacity', '1');
  await expect(aboutContent).toHaveCSS('transform', 'none');
  for (const target of await page.locator('[data-reveal]').all()) {
    await expect(target).toHaveCSS('opacity', '1');
    await expect(target).toHaveCSS('transform', 'none');
  }

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const albumContent = page.locator('#album > [data-scroll-reveal]');
  const albumBounds = await albumContent
    .locator('[data-reveal]')
    .first()
    .boundingBox();
  expect(albumBounds).not.toBeNull();
  await page.mouse.wheel(0, albumBounds!.y - 160);
  await expect
    .poll(() =>
      albumContent.evaluate(
        (element) =>
          element
            .getAnimations({ subtree: true })
            .filter((animation) => animation.playState === 'running').length,
      ),
    )
    .toBeGreaterThan(0);
  const filter = page.getByRole('button', { name: 'Semua', exact: true });
  await filter.focus();
  await expect(filter).toBeFocused();
  await expect
    .poll(() =>
      albumContent.evaluate(
        (element) => element.getAnimations({ subtree: true }).length,
      ),
    )
    .toBe(0);
  await expect(albumContent).toHaveCSS('opacity', '1');
  for (const target of await albumContent.locator('[data-reveal]').all()) {
    await expect(target).toHaveCSS('opacity', '1');
    await expect(target).toHaveCSS('transform', 'none');
  }
});

test('reveals each album card when it enters the viewport', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  const cards = page
    .getByTestId('album-grid')
    .getByRole('link')
    .locator('[data-reveal]');
  const lastCard = cards.last();
  await expect(lastCard).toHaveCSS('opacity', '0');
  await cards.first().scrollIntoViewIfNeeded();
  await expect(cards.first()).toHaveCSS('opacity', '1');
  await expect(lastCard).toHaveCSS('opacity', '0');

  const bounds = await lastCard.boundingBox();
  expect(bounds).not.toBeNull();
  const timing = await lastCard.evaluate((element) => {
    const animation = element
      .getAnimations()
      .find((animation) => animation.id === 'section-reveal')!;
    return {
      duration: animation.effect!.getTiming().duration,
      initialTransform:
        animation.effect instanceof KeyframeEffect
          ? animation.effect.getKeyframes()[0]?.transform
          : null,
    };
  });
  expect(timing.duration).toBe(400);
  expect(timing.initialTransform).toContain('scale(0.985)');
  // Subscribe before scrolling so a busy test runner cannot miss a short effect.
  const finished = lastCard.evaluate((element) => {
    const animation = element
      .getAnimations()
      .find((animation) => animation.id === 'section-reveal')!;
    return animation.finished.then(() => true);
  });
  await page.mouse.wheel(0, bounds!.y - 180);
  expect(await finished).toBe(true);
  await expect(lastCard).toHaveCSS('opacity', '1');
  await expect(lastCard).toHaveCSS('transform', 'none');
  await page.screenshot({
    path: testInfo.outputPath('album-revealed.png'),
    animations: 'disabled',
  });
});

test('keeps content and filters available without animation APIs', async ({
  browser,
}) => {
  for (const capability of ['observer', 'animation']) {
    const context = await browser.newContext();
    try {
      await context.addInitScript((missing) => {
        if (missing === 'observer')
          Reflect.deleteProperty(window, 'IntersectionObserver');
        else Reflect.deleteProperty(Element.prototype, 'animate');
      }, capability);
      const page = await context.newPage();
      await page.goto('http://127.0.0.1:3100/');
      for (const target of await page.locator('[data-reveal]').all()) {
        await expect(target).toHaveCSS('opacity', '1');
        await expect(target).toHaveCSS('transform', 'none');
      }
      await page.getByRole('button', { name: 'Event', exact: true }).click();
      await expect(
        page.getByTestId('album-grid').getByRole('link'),
      ).toHaveCount(1);
    } finally {
      await context.close();
    }
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
  const reelBounds = await reel.boundingBox();
  expect(reelBounds!.y).toBeGreaterThanOrEqual(
    await page.evaluate(() => window.innerHeight),
  );
  await reel.scrollIntoViewIfNeeded();
  await expect(reel).toBeInViewport();
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
  const removedAlbum = await page.request.get('/album/padel');
  expect(removedAlbum.status()).toBe(404);
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
  for (const id of ['tentang', 'album', 'pengalaman', 'kontak']) {
    const content = page.locator(`#${id} > [data-scroll-reveal]`);
    await content.scrollIntoViewIfNeeded();
    await expect(content).toHaveCSS('opacity', '1');
    await expect(content).toHaveCSS('transform', 'none');
    expect(
      await content.evaluate(
        (element) => element.getAnimations({ subtree: true }).length,
      ),
    ).toBe(0);
  }
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
  await page.emulateMedia({ reducedMotion: 'reduce' });
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

test('renders album links, photos and empty details without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    await page.goto('http://127.0.0.1:3100/');
    await expect(page.getByTestId('album-grid').getByRole('link')).toHaveCount(
      4,
    );
    await expect(page.locator('.reel-track').first()).toHaveCSS(
      'animation-name',
      'none',
    );
    await expect(
      page.getByRole('button', { name: 'Jeda animasi' }),
    ).toBeHidden();
    await expect(page.locator('.photo-reel + #tentang')).toHaveCount(1);
    await expect(page.locator('#tentang').getByRole('img')).toBeVisible();
    await expect(page.locator('#tentang > .container')).toHaveCSS(
      'opacity',
      '1',
    );
    await page.getByRole('link', { name: /Minsoc/ }).click();
    await expect(
      page.getByRole('list', { name: 'Galeri Minsoc' }).locator('img'),
    ).toHaveCount(10);
    await expect(
      page.getByRole('list', { name: 'Galeri Minsoc' }).getByRole('listitem'),
    ).toHaveCount(20);
    await page.goto('http://127.0.0.1:3100/album/event');
    await expect(
      page.getByText('Foto belum tersedia', { exact: true }),
    ).toBeVisible();
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
