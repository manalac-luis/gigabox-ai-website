'use client';
import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-expect-error HubSpot types are not available
      if (window.hbspt) {
        // @ts-expect-error HubSpot types are not available
        window.hbspt.forms.create({
          region: "na1",
          portalId: "49061441",
          formId: "0d521ccb-8401-4d88-8c66-21ccb0c9d7ad",
          target: '#hubspot-form-container',
          locale: 'en-US'
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
          Interested in our research or exploring collaboration opportunities?
          Reach out at <a href="mailto:research@gigaboxresearch.com" className="text-accent hover:underline">research@gigaboxresearch.com</a> or use the form below.
        </p>
        <div className="max-w-2xl mx-auto bg-background p-8 rounded-lg border border-foreground/10">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
