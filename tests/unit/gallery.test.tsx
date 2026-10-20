import { createElement, type ImgHTMLAttributes } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { PhotoGallery } from '@/components/photo-gallery';
import { testPhotos } from '../fixtures/photos';

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
    onError,
  }: ImgHTMLAttributes<HTMLImageElement>) =>
    createElement('img', { src, alt, width, height, className, onError }),
}));

describe('photo gallery', () => {
  it('provides an honest empty state and a usable contact link', () => {
    render(<PhotoGallery photos={[]} albumName="Minsoc" />);
    expect(screen.getByText('Foto belum tersedia')).toBeVisible();
    expect(
      screen.queryByRole('button', { name: /Perbesar foto/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Lihat Instagram' }),
    ).toHaveAttribute('href', 'https://www.instagram.com/zaustory/');
  });

  it('shows every planned slot without making placeholders interactive', () => {
    render(<PhotoGallery photos={[]} albumName="Minsoc" plannedCount={20} />);
    const gallery = screen.getByRole('list', { name: 'Galeri Minsoc' });
    expect(within(gallery).getAllByRole('listitem')).toHaveLength(20);
    expect(
      within(gallery).getAllByRole('img', { name: /^Slot foto/ }),
    ).toHaveLength(20);
    expect(within(gallery).queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('replaces slots with real photos and excludes remaining slots from the lightbox', async () => {
    const user = userEvent.setup();
    render(
      <PhotoGallery photos={testPhotos} albumName="Test" plannedCount={4} />,
    );
    const gallery = screen.getByRole('list', { name: 'Galeri Test' });
    expect(within(gallery).getAllByRole('listitem')).toHaveLength(4);
    expect(
      within(gallery).getAllByRole('img', { name: /^Slot foto/ }),
    ).toHaveLength(2);
    expect(within(gallery).getAllByRole('button')).toHaveLength(2);
    await user.click(
      within(gallery).getByRole('button', {
        name: 'Perbesar foto: Tim di tepi lapangan',
      }),
    );
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      'Foto 2 dari 2',
    );
    await user.keyboard('{ArrowRight}');
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      'Foto 1 dari 2',
    );
  });

  it('opens the requested image, moves by keyboard with wrap, and restores focus on close', async () => {
    const user = userEvent.setup();
    render(<PhotoGallery photos={testPhotos} albumName="Test" />);
    const trigger = screen.getByRole('button', {
      name: 'Perbesar foto: Pemain membawa bola',
    });
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Pembesaran foto' });
    const closeButton = within(dialog).getByRole('button', {
      name: 'Tutup foto',
    });
    expect(closeButton).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      'Foto 1 dari 2',
    );
    await user.keyboard('{ArrowLeft}');
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      'Foto 2 dari 2',
    );
    expect(within(dialog).getByText('Tim di tepi lapangan')).toBeVisible();
    await user.keyboard('{ArrowRight}');
    expect(within(dialog).getByText('Caption foto pertama')).toBeVisible();
    await user.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });

  it('handles the native Escape cancel event without leaving the page locked', async () => {
    const user = userEvent.setup();
    render(<PhotoGallery photos={testPhotos} albumName="Test" />);
    const trigger = screen.getByRole('button', {
      name: 'Perbesar foto: Tim di tepi lapangan',
    });
    await user.click(trigger);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      'Foto 2 dari 2',
    );
    fireEvent(dialog, new Event('cancel', { bubbles: true, cancelable: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });

  it('shows an image failure while keeping close and navigation controls available', async () => {
    const user = userEvent.setup();
    render(<PhotoGallery photos={testPhotos} albumName="Test" />);
    await user.click(
      screen.getByRole('button', {
        name: 'Perbesar foto: Pemain membawa bola',
      }),
    );
    const dialog = screen.getByRole('dialog');
    fireEvent.error(
      within(dialog).getByRole('img', { name: 'Pemain membawa bola' }),
    );
    expect(within(dialog).getByText('Foto tidak dapat dimuat.')).toBeVisible();
    await user.click(
      within(dialog).getByRole('button', { name: 'Foto berikutnya' }),
    );
    expect(
      within(dialog).getByRole('img', { name: 'Tim di tepi lapangan' }),
    ).toBeVisible();
    await user.click(
      within(dialog).getByRole('button', { name: 'Tutup foto' }),
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('disables navigation for a single photo', async () => {
    const user = userEvent.setup();
    render(<PhotoGallery photos={[testPhotos[0]!]} albumName="Test" />);
    await user.click(screen.getByRole('button', { name: /Perbesar foto/ }));
    const dialog = screen.getByRole('dialog');
    expect(
      within(dialog).getByRole('button', { name: 'Foto sebelumnya' }),
    ).toBeDisabled();
    expect(
      within(dialog).getByRole('button', { name: 'Foto berikutnya' }),
    ).toBeDisabled();
  });
});
