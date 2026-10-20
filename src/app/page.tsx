import Link from 'next/link';
import {
  Aperture,
  ArrowDownRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { AlbumCollection } from '@/components/album-collection';
import { ContactLinks } from '@/components/contact-links';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { PhotoImage } from '@/components/photo-image';
import { PhotoReel } from '@/components/photo-reel';
import { ScrollReveal } from '@/components/scroll-reveal';
import { albums } from '@/content/albums';
import { site } from '@/content/site';

export default function HomePage() {
  const plannedPhotos = albums.reduce(
    (total, album) => total + album.plannedCount,
    0,
  );

  return (
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <p className="eyebrow hero-eyebrow">Fotografi olahraga &amp; event</p>
          <h1 id="hero-title">
            Momen berlalu.
            <br />
            <span>Cerita tinggal.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Dari energi di lapangan sampai cerita di luar pertandingan. Setiap
              momen punya tempat di sini.
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
                href={site.instagram}
                className="text-link photography-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Hubungi via Instagram
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
              <span>Zaustory</span>
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
            <h2 id="about-title">
              Di balik
              <br />
              <span>setiap cerita.</span>
            </h2>
            <figure className="about-portrait">
              <div className="about-portrait-image">
                {site.photographerPortrait ? (
                  <PhotoImage
                    photo={site.photographerPortrait}
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
                <span>Zaustory</span>
              </figcaption>
            </figure>
            <div className="about-copy">
              <p className="about-lead">
                Zaustory. Fotografi olahraga dan event.
              </p>
              <p>
                Gerak di lapangan, pertemuan di sebuah acara, dan momen di
                antaranya. Setiap cerita punya sudut pandangnya sendiri.
              </p>
              <div className="bio-note">
                <span className="note-line" aria-hidden="true" />
                <p>
                  Cerita di balik kamera segera hadir. Profil lengkap Zaustory
                  sedang dilengkapi.
                </p>
              </div>
            </div>
          </div>
          <div className="affiliations">
            <div>
              <h3>Koneksi &amp; kolaborasi</h3>
              <p>Rincian hubungan dan periode kolaborasi sedang dilengkapi.</p>
            </div>
            <ul>
              {site.affiliations.map((name) => (
                <li key={name}>{name}</li>
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
          <div className="section-heading album-heading">
            <h2 id="album-title">
              Lima sudut.
              <br />
              <span>Banyak cerita.</span>
            </h2>
            <div className="album-intro">
              <p>{plannedPhotos} foto direncanakan dalam lima album.</p>
              <p>Foto sementara ditampilkan sebagai ikon gambar.</p>
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
          <div className="section-heading experience-heading">
            <h2 id="experience-title">
              Pernah menjadi
              <br />
              bagian cerita.
            </h2>
            <p>
              Beberapa pengalaman Zaustory di olahraga, kampanye, dan event.
            </p>
          </div>
          <ol className="experience-list" aria-label="Pengalaman Zaustory">
            {site.experiences.map((experience) => (
              <li key={experience.name}>
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
          <div className="contact-layout">
            <h2 id="contact-title">
              Cerita berikutnya,
              <br />
              <span>punyamu.</span>
            </h2>
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </div>
          <div className="contact-bottom">
            <p>
              Ceritakan pertandingan, acara, atau ide pemotretanmu. Mulai
              percakapan lewat Instagram.
            </p>
            <ContactLinks inverse />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
