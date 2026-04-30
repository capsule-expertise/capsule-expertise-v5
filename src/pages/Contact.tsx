import { useEffect } from 'react';
import { PageHeader } from '@/components/sections/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';

/**
 * Page Contact — formulaire mailto + coordonnées.
 * Accessible via /contact, ou /contact?from=dirigeant / ?from=daf pour
 * pré-remplir le champ "type de besoin" du formulaire.
 */
export function Contact() {
  useEffect(() => {
    document.title = 'Contact — Capsule Expertise';
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Parler à un expert"
        title="Discutons de votre"
        titleEm="situation"
        description="Premier échange de 30 minutes, confidentiel, sans engagement. Vous recevrez ensuite une note de cadrage écrite sous 10 jours."
      />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
