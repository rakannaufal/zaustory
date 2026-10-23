import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { publicConfig } from '@/lib/config';

export function ContactLinks({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="contact-links">
      <a
        className={`button photography-cta ${inverse ? 'button-accent' : 'button-primary'}`}
        href={publicConfig.whatsappUrl ?? site.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>
          {publicConfig.whatsappUrl
            ? 'Hubungi via WhatsApp'
            : 'Hubungi via Instagram'}
        </span>
        <span className="cta-direction" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>
      <a
        className={`text-link ${inverse ? 'text-link-inverse' : ''}`}
        href={site.phone.href}
        aria-label={`Telepon ${site.phone.display}`}
      >
        <Phone size={18} aria-hidden="true" />
        {site.phone.display}
      </a>
      <a
        className={`text-link ${inverse ? 'text-link-inverse' : ''}`}
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Lihat Instagram
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
