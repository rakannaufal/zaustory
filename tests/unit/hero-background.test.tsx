import { createElement, type ImgHTMLAttributes } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HeroBackground } from '@/components/hero-background';
import { testPhotos } from '../fixtures/photos';

vi.mock('next/image', () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) =>
    createElement('img', props),
}));

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('hero photo background', () => {
  it('changes after three seconds and retains the previous image until load', () => {
    const { container } = render(<HeroBackground photos={testPhotos} />);
    const current = () => container.querySelector('img[data-current="true"]')!;
    expect(current()).toHaveAttribute('src', testPhotos[0]!.src);
    act(() => vi.advanceTimersByTime(2999));
    expect(current()).toHaveAttribute('src', testPhotos[0]!.src);
    act(() => vi.advanceTimersByTime(1));
    expect(current()).toHaveAttribute('src', testPhotos[1]!.src);
    expect(current()).toHaveAttribute('data-visible', 'false');
    expect(container.querySelectorAll('img')).toHaveLength(2);
    act(() => vi.advanceTimersByTime(3000));
    expect(current()).toHaveAttribute('src', testPhotos[1]!.src);
    fireEvent.load(current());
    expect(current()).toHaveAttribute('data-visible', 'true');
    act(() => vi.advanceTimersByTime(3000));
    expect(current()).toHaveAttribute('src', testPhotos[0]!.src);
  });

  it('keeps the previous image if the replacement fails', () => {
    const { container } = render(<HeroBackground photos={testPhotos} />);
    act(() => vi.advanceTimersByTime(3000));
    fireEvent.error(container.querySelector('img[data-current="true"]')!);
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      testPhotos[0]!.src,
    );
    expect(container.querySelectorAll('img')).toHaveLength(1);
  });

  it('stays static for reduced motion and handles empty or single-photo collections', () => {
    vi.stubGlobal('matchMedia', () => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    const { container, rerender } = render(
      <HeroBackground photos={testPhotos} />,
    );
    act(() => vi.advanceTimersByTime(9000));
    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    rerender(<HeroBackground photos={[testPhotos[0]!]} />);
    expect(container.querySelectorAll('img')).toHaveLength(1);
    rerender(<HeroBackground photos={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
