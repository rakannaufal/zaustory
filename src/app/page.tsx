import Link from 'next/link';
import {
  Aperture,
  ArrowDownRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { AlbumCollection } from '@/components/album-collection';
import { ContactLinks } from '@/components/contact-links';
import { CollaborationMedia } from '@/components/collaboration-media';
import { HeroBackground } from '@/components/hero-background';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { PhotoImage } from '@/components/photo-image';
import { PhotoReel } from '@/components/photo-reel';
import { ScrollReveal } from '@/components/scroll-reveal';
import { albums } from '@/content/albums';
import { site } from '@/content/site';
import { publicConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <HeroBackground
          photos={albums
            .filter((album) =>
              ['minsoc', 'basket', 'lapangan-bola'].includes(album.slug),
            )
            .flatMap((album) => album.photos)}
        />
        <div className="container hero-inner">
          <p className="eyebrow hero-eyebrow">{site.location}</p>
          <h1 id="hero-title">
            Di lapangan.
            <br />
            <span>Dalam ingatan.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Fotografi olahraga dan event. Menangkap aksi pertandingan, suasana
              acara, dan momen di antaranya.
            </p>
            <div className="hero-actions">
              <Link
                href="#album"
                className="button button-primary photography-cta"
              >
                <Aperture
                  size={22}
                  className="cta-aperture"
                  aria-hidden="true"
                />
                <span>Jelajahi album</span>
                <span className="cta-direction" aria-hidden="true">
                  <ArrowDownRight size={20} />
                </span>
              </Link>
              <a
                href={publicConfig.whatsappUrl ?? site.instagram}
                className="text-link photography-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {publicConfig.whatsappUrl
                  ? 'Hubungi via WhatsApp'
                  : 'Hubungi via Instagram'}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            {site.photographerPortrait ? (
              <PhotoImage
                photo={site.photographerPortrait}
                sizes="(max-width: 760px) 100vw, 45vw"
                mode="contain"
                priority
              />
            ) : (
              <ImagePlaceholder
                label="Potret fotografer. Foto transparan belum tersedia."
                caption="Potret fotografer"
                className="portrait-placeholder"
              />
            )}
            <figcaption>
              <span>Di balik lensa</span>
              <span>{site.photographer.handle}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <PhotoReel albums={albums} />

      <section
        id="tentang"
        className="about-section section-space"
        aria-labelledby="about-title"
      >
        <ScrollReveal className="container">
          <div className="about-layout">
            <h2 id="about-title" data-reveal>
              Di balik
              <br />
              <span>setiap cerita.</span>
            </h2>
            <figure className="about-portrait" data-reveal="media">
              <div className="about-portrait-image">
                {site.aboutPortrait ? (
                  <PhotoImage
                    photo={site.aboutPortrait}
                    sizes="(max-width: 760px) 100vw, 40vw"
                    mode="contain"
                  />
                ) : (
                  <ImagePlaceholder
                    label="Potret fotografer Zaustory. Foto belum tersedia."
                    caption="Potret fotografer"
                    className="portrait-placeholder"
                  />
                )}
              </div>
              <figcaption>
                <span>Di balik kamera</span>
                <span>{site.photographer.handle}</span>
              </figcaption>
            </figure>
            <div className="about-copy" data-reveal>
              <p className="about-lead">{site.profileName}</p>
              <p>
                Berbasis di {site.location}, Zaustory mendokumentasikan olahraga
                dan event. Dari minisoccer, sepak bola, dan basket hingga momen
                pertemuan dalam sebuah acara.
              </p>
              <dl className="profile-facts">
                <div>
                  <dt>Fotografer</dt>
                  <dd>
                    <a
                      href={site.photographer.instagram}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.photographer.handle}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Media partner</dt>
                  <dd>
                    <a
                      href={site.mediaPartner.instagram}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.mediaPartner.handle}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="affiliations" data-reveal>
            <div>
              <h3>Koneksi &amp; kolaborasi</h3>
              <p>Beberapa nama dalam perjalanan Zaustory.</p>
            </div>
            <ul aria-label="Koneksi dan kolaborasi Zaustory">
              {site.affiliations.map((item) => (
                <li key={item.name}>
                  <div className="collaboration-media">
                    <CollaborationMedia item={item} />
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="album"
        className="album-section section-space"
        aria-labelledby="album-title"
      >
        <ScrollReveal className="container">
          <div className="section-heading album-heading" data-reveal>
            <h2 id="album-title">
              Dari lapangan.
              <br />
              <span>Sampai acara.</span>
            </h2>
            <div className="album-intro">
              <p>
                Minisoccer, sepak bola, basket, dan event. Pilih album untuk
                menjelajahi setiap kategori.
              </p>
              <p>
                Jelajahi foto pertandingan Minsoc, sepak bola, dan basket. Karya
                lainnya tersedia di Instagram.
              </p>
            </div>
          </div>
          <AlbumCollection albums={albums} />
        </ScrollReveal>
      </section>

      <section
        id="pengalaman"
        className="experience-section section-space"
        aria-labelledby="experience-title"
      >
        <ScrollReveal className="container">
          <div className="section-heading experience-heading" data-reveal>
            <h2 id="experience-title">
              Pernah menjadi
              <br />
              bagian cerita.
            </h2>
            <p>
              Pengalaman dokumentasi kampanye dan pertandingan, termasuk
              Kampanye Walikota 2024 dan EPA PSPS 2025.
            </p>
          </div>
          <ol className="experience-list" aria-label="Pengalaman Zaustory">
            {site.experiences.map((experience) => (
              <li key={experience.name} data-reveal>
                {experience.year ? (
                  <time dateTime={experience.year}>{experience.year}</time>
                ) : (
                  <span
                    className="experience-year-empty"
                    aria-label="Tahun belum dicantumkan"
                  >
                    &mdash;
                  </span>
                )}
                <div className="experience-copy">
                  <p className="experience-category">{experience.category}</p>
                  <h3>{experience.name}</h3>
                </div>
                <div className="experience-photo">
                  {experience.photo ? (
                    <PhotoImage
                      photo={experience.photo}
                      sizes="(max-width: 760px) 100vw, 30vw"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={`Foto pengalaman ${experience.name} belum tersedia.`}
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      <section
        id="kontak"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <ScrollReveal className="container">
          <div className="contact-layout" data-reveal>
            <h2 id="contact-title">
              Jadwalkan
              <br />
              <span>pemotretanmu.</span>
            </h2>
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </div>
          <div className="contact-bottom" data-reveal>
            <p>
              Kirim tanggal, lokasi, dan kebutuhan dokumentasimu. Hubungi
              Zaustory melalui WhatsApp atau Instagram untuk membahas
              pemotretan.
            </p>
            <ContactLinks inverse />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
