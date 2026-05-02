import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

type BesoinType = '' | 'dirigeant' | 'daf' | 'doute';

const BESOIN_LABELS: Record<BesoinType, string> = {
  '': '— Sélectionnez —',
  dirigeant: 'Dirigeant TPE/PME',
  daf: 'Direction financière (DAF/RAF) ETI',
  doute: "J'ai un doute sur mon statut",
};

/**
 * Formulaire de contact avec mailto submit.
 * Pré-remplit le champ "type de besoin" via le query param ?from=dirigeant ou
 * ?from=daf — utilisé par les CTAs des pages Dirigeants et DirectionFinanciere.
 */
export function ContactForm() {
  const [searchParams] = useSearchParams();
  const fromParam = searchParams.get('from') as BesoinType | null;
  const initialType: BesoinType =
    fromParam === 'dirigeant' || fromParam === 'daf' || fromParam === 'doute'
      ? fromParam
      : '';

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState<BesoinType>(initialType);
  const [message, setMessage] = useState('');

  // Si le query param change après le mount (clic sur un autre CTA), update.
  useEffect(() => {
    if (initialType && initialType !== type) {
      setType(initialType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromParam]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Capsule] Demande de contact — ${BESOIN_LABELS[type]}`,
    );
    const body = encodeURIComponent(
      [
        `Nom : ${name}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        `Type de besoin : ${BESOIN_LABELS[type]}`,
        '',
        '— Message —',
        message,
        '',
        '---',
        'Envoyé depuis le formulaire de contact capsule-expertise.fr',
      ]
        .filter(Boolean)
        .join('\n'),
    );
    window.location.href = `mailto:${SITE.legal.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#ffffff] border border-[rgba(20,37,58,0.15)] rounded-[var(--radius-sm)] ' +
    'text-[var(--color-ce-violet)] placeholder:text-[rgba(20,37,58,0.4)] ' +
    'focus:outline-none focus:border-[var(--color-ce-terra-deep)] ' +
    'text-[16px] leading-[1.4]';

  return (
    <section
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '120px 100px' }}
    >
      <div className="ce-container">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
          onSubmit={handleSubmit}
          className="max-w-[680px] flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-[14px] font-medium text-[rgba(20,37,58,0.75)]"
            >
              Nom <span style={{ color: 'var(--color-ce-terra-deep)' }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className={inputClass}
              placeholder="Votre nom et prénom"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-[14px] font-medium text-[rgba(20,37,58,0.75)]"
              >
                Email <span style={{ color: 'var(--color-ce-terra-deep)' }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className={inputClass}
                placeholder="vous@entreprise.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-phone"
                className="text-[14px] font-medium text-[rgba(20,37,58,0.75)]"
              >
                Téléphone <span className="text-[rgba(20,37,58,0.4)]">(optionnel)</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className={inputClass}
                placeholder="06 XX XX XX XX"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-type"
              className="text-[14px] font-medium text-[rgba(20,37,58,0.75)]"
            >
              Type de besoin <span style={{ color: 'var(--color-ce-terra-deep)' }}>*</span>
            </label>
            <select
              id="contact-type"
              required
              value={type}
              onChange={(e) => setType(e.target.value as BesoinType)}
              className={inputClass}
            >
              <option value="">— Sélectionnez votre profil —</option>
              <option value="dirigeant">{BESOIN_LABELS.dirigeant}</option>
              <option value="daf">{BESOIN_LABELS.daf}</option>
              <option value="doute">{BESOIN_LABELS.doute}</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-[14px] font-medium text-[rgba(20,37,58,0.75)]"
            >
              Votre situation <span style={{ color: 'var(--color-ce-terra-deep)' }}>*</span>
            </label>
            <textarea
              id="contact-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className={inputClass}
              placeholder="Décrivez en quelques lignes votre situation et ce que vous attendez de Capsule…"
              style={{ resize: 'vertical', minHeight: '120px' }}
            />
          </div>

          <p className="text-[13px] text-[rgba(20,37,58,0.55)] mt-2 leading-[1.55]">
            En cliquant sur "Envoyer", votre client mail s'ouvrira avec un message
            pré-rempli adressé à <strong>{SITE.legal.email}</strong>.
            Aucune donnée n'est stockée par ce site.
          </p>

          <button
            type="submit"
            className="ce-btn ce-btn--terra ce-btn--lg self-start mt-2"
          >
            Envoyer
            <ArrowRight size={16} strokeWidth={1.75} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
