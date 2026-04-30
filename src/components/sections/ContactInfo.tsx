import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '@/content/site';

/**
 * Bloc coordonnées affiché sous le formulaire de contact.
 * Email cliquable, adresse complète, téléphone si renseigné.
 */
export function ContactInfo() {
  const hasPhone = !SITE.legal.phone.includes('XX');
  const a = SITE.legal.address;

  return (
    <section
      className="bg-[var(--color-ce-cream-warm)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '0 120px' }}
    >
      <div className="ce-container">
        <div className="grid gap-10 md:grid-cols-3 max-w-[1100px]">
          {/* Adresse */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[var(--color-ce-terra-deep)]">
              <MapPin size={20} strokeWidth={1.75} />
              <h3 className="text-[14px] font-medium tracking-[0.04em] uppercase">
                Adresse
              </h3>
            </div>
            <p className="text-[16px] leading-[1.55]">
              {a.street}
              <br />
              {a.postalCode} {a.city}
              <br />
              <span className="text-[rgba(20,37,58,0.6)]">{a.region}</span>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[var(--color-ce-terra-deep)]">
              <Mail size={20} strokeWidth={1.75} />
              <h3 className="text-[14px] font-medium tracking-[0.04em] uppercase">
                Email
              </h3>
            </div>
            <a
              href={`mailto:${SITE.legal.email}`}
              className="text-[16px] leading-[1.55] hover:text-[var(--color-ce-terra-deep)] transition-colors"
              style={{ wordBreak: 'break-all' }}
            >
              {SITE.legal.email}
            </a>
            <p className="text-[14px] text-[rgba(20,37,58,0.6)] leading-[1.55]">
              Réponse écrite sous 48 h ouvrées
            </p>
          </div>

          {/* Téléphone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[var(--color-ce-terra-deep)]">
              <Phone size={20} strokeWidth={1.75} />
              <h3 className="text-[14px] font-medium tracking-[0.04em] uppercase">
                Téléphone
              </h3>
            </div>
            {hasPhone ? (
              <a
                href={SITE.legal.phoneHref}
                className="text-[16px] leading-[1.55] hover:text-[var(--color-ce-terra-deep)] transition-colors"
              >
                {SITE.legal.phone}
              </a>
            ) : (
              <p className="text-[14px] italic text-[rgba(20,37,58,0.5)] leading-[1.55]">
                Préférez l'email pour un premier échange.
              </p>
            )}
            <p className="text-[14px] text-[rgba(20,37,58,0.6)] leading-[1.55]">
              Bry-sur-Marne (94360),
              <br />
              à proximité immédiate de Paris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
