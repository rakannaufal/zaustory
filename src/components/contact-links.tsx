import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { site } from '@/content/site';
import { publicConfig } from '@/lib/config';

export function ContactLinks({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="contact-links">
      <a
        className={`button photography-cta ${inverse ? 'button-accent' : 'button-primary'}`}
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>Hubungi via Instagram</span>
        <span className="cta-direction" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>
      {publicConfig.whatsappUrl && (
        <a
          className={`text-link ${inverse ? 'text-link-inverse' : ''}`}
          href={publicConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Hubungi via WhatsApp
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
