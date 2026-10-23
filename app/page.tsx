"use client";

import Image from "next/image";
import {
  Check,
  Copy,
  ExternalLink,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { useState } from "react";

const googleReviewUrl = "https://g.page/r/CfHF76bgZRnSEBM/review";
const imageBasePath = "/review/images";

const ratingLabels = [
  "Kurang memuaskan",
  "Perlu ditingkatkan",
  "Cukup baik",
  "Sangat baik",
  "Luar biasa",
] as const;

export default function Home() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  async function copyComment() {
    if (!comment.trim()) {
      setCopyMessage("Tulis komentar terlebih dahulu untuk menyalinnya.");
      return;
    }

    try {
      await navigator.clipboard.writeText(comment);
      setCopyMessage("Komentar berhasil disalin. Anda dapat menempelkannya di Google.");
    } catch {
      setCopyMessage(
        "Komentar tidak dapat disalin dari browser ini. Silakan salin teks secara manual.",
      );
    }
  }

  const hasCopyError =
    copyMessage.length > 0 && !copyMessage.startsWith("Komentar berhasil");

  return (
    <main className="page-shell">
      <header className="brand-header">
        <a className="brand-lockup" href="#utama" aria-label="Mamaika, ke bagian utama">
          <Image
            src={`${imageBasePath}/mamaika-logo.jpg`}
            alt="Logo Mamaika Aqiqah & Catering"
            width={114}
            height={160}
            className="block brand-logo"
            priority
          />
          <span className="brand-copy">
            <span className="brand-name">Mamaika</span>
            <span className="brand-business">Aqiqah &amp; Catering</span>
            <span className="brand-tagline">Berkah, Amanah, Syar&apos;i</span>
          </span>
        </a>
        <a
          className="contact-link"
          href="https://wa.me/6288212166611"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Mamaika melalui WhatsApp"
        >
          <MessageCircle
            className="contact-icon"
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>088 2121 666 11</span>
        </a>
      </header>

      <section className="review-panel" id="utama" aria-labelledby="page-title">
        <div className="hero-photo">
          <Image
            src={`${imageBasePath}/catering-hero.jpg`}
            alt="Hidangan aqiqah Mamaika tersaji hangat di meja"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 560px"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-caption">
            <span className="hero-overline">Terima kasih telah memilih kami</span>
            <span className="hero-title">Setiap sajian, cerita penuh berkah.</span>
          </div>
          <span className="hero-location">
            <MapPin size={13} strokeWidth={2.2} aria-hidden="true" />
            Dibuat dengan sepenuh hati
          </span>
        </div>

        <div className="form-content">
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>CERITA ANDA BERARTI</span>
            <span className="kicker-line" />
          </div>

          <h1 id="page-title">Bagaimana pengalaman katering Anda?</h1>
          <p className="intro-copy">
            Terima kasih telah mempercayakan momen istimewa Anda kepada Mamaika.
            Kami ingin mendengar cerita jujur dari Anda.
          </p>

          <fieldset className="rating-field">
            <legend>Bagaimana penilaian Anda?</legend>
            <div className="star-row" aria-label="Pilih rating dari 1 sampai 5">
              {ratingLabels.map((label, index) => {
                const value = index + 1;
                const isActive = value <= rating;

                return (
                  <button
                    className={`star-button${isActive ? " is-active" : ""}`}
                    type="button"
                    key={value}
                    onClick={() => setRating(value)}
                    aria-label={`${value} dari 5 bintang — ${label}`}
                    aria-pressed={rating === value}
                  >
                    <Star
                      size={35}
                      strokeWidth={1.65}
                      fill={isActive ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
            <p className="rating-result" aria-live="polite">
              <span className="rating-number">{rating} dari 5</span>
              <span className="rating-separator" aria-hidden="true">
                ·
              </span>
              <span>{ratingLabels[rating - 1]}</span>
            </p>
          </fieldset>

          <div className="comment-field">
            <div className="comment-label-row">
              <label htmlFor="review-comment">Ceritakan pengalaman Anda</label>
              <span>Opsional</span>
            </div>
            <textarea
              id="review-comment"
              name="comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
                setCopyMessage("");
              }}
              placeholder="Apa yang paling berkesan dari sajian atau layanan kami?"
              rows={4}
            />
            <div className="comment-footer">
              <p className="privacy-note">
                Komentar hanya tersimpan di perangkat Anda, tidak dikirim ke server.
              </p>
              <button
                className="copy-button"
                type="button"
                onClick={copyComment}
                aria-label="Salin komentar"
              >
                <Copy size={14} aria-hidden="true" />
                Salin
              </button>
            </div>
            <p
              className={`copy-feedback${hasCopyError ? " has-error" : ""}`}
              aria-live="polite"
            >
              {copyMessage && (
                <>
                  {copyMessage.startsWith("Komentar berhasil") && (
                    <Check size={14} aria-hidden="true" />
                  )}
                  {copyMessage}
                </>
              )}
            </p>
          </div>

          <a
            className="google-button"
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="google-mark" aria-hidden="true">
              G
            </span>
            <span>Lanjutkan ke Google Review</span>
            <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <p className="google-note">
            Rating dan komentar Anda tidak dikirim otomatis. Silakan tulis dan
            kirim ulasan langsung melalui Google.
          </p>

          <div className="trust-note">
            <span className="trust-icon" aria-hidden="true">
              <Star size={15} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span>Setiap masukan, apa pun nilainya, membantu kami bertumbuh.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span className="footer-name">Mamaika Aqiqah &amp; Catering</span>
        <span className="footer-divider" aria-hidden="true">
          ·
        </span>
        <span className="footer-tagline">Berkah, Amanah, Syar&apos;i</span>
      </footer>
    </main>
  );
}
