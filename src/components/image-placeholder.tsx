import { ImageIcon } from 'lucide-react';

type ImagePlaceholderProps = {
  label: string;
  caption?: string;
  marker?: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  caption = 'Foto sementara',
  marker,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={label}
    >
      {marker && (
        <span className="image-placeholder-marker" aria-hidden="true">
          {marker}
        </span>
      )}
      <ImageIcon className="image-placeholder-icon" aria-hidden="true" />
      <span className="image-placeholder-caption" aria-hidden="true">
        {caption}
      </span>
    </div>
  );
}
