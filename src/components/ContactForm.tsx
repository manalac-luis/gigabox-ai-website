'use client';
import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
/*
<script src="https://js.hsforms.net/forms/embed/49061441.js" defer></script>
<div class="hs-form-frame" data-region="na1" data-form-id="0d521ccb-8401-4d88-8c66-21ccb0c9d7ad" data-portal-id="49061441"></div>
*/
    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: "na1", // Update with your region
          portalId: "49061441", // Replace with your HubSpot portal ID
          formId: "0d521ccb-8401-4d88-8c66-21ccb0c9d7ad", // Replace with your form ID
          target: '#hubspot-form-container'
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
