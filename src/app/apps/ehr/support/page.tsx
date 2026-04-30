import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Support | Gigabox EHR',
  description:
    'Help and support for the Gigabox EHR mobile and web application. Contact us at info@gigabox.ai.',
};

const faqs = [
  {
    question: 'What is Gigabox EHR?',
    answer:
      'Gigabox EHR is a research and development demonstration of an AI-built electronic health records system. It includes a patient portal, appointment scheduling, telehealth, lab orders, prescriptions, referrals, and AI-generated visit summaries. The patient profiles shown in the app are fictional.',
  },
  {
    question: 'Is this app for use with real patients?',
    answer:
      'No. Gigabox EHR is a demonstration product. Do not enter real protected health information about yourself or anyone else. The patient profiles in the app are fictional and exist only to show what the platform can do.',
  },
  {
    question: 'How do I sign in?',
    answer:
      'You can sign in with Apple, Google, or an email and password. After signing in, you will be prompted to select a demonstration patient profile.',
  },
  {
    question: 'Why am I asked to pick a patient?',
    answer:
      'The mobile app shows the patient experience for one of several fictional patient profiles. You select which one you want to view. You can change your selection any time from Settings → Switch Patient.',
  },
  {
    question: 'How do I switch to a different patient?',
    answer:
      'Open the Settings tab in the mobile app and tap Switch Patient. You will be returned to the patient picker where you can choose a different demonstration profile.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Send an email to info@gigabox.ai with the subject "Delete my EHR account." We will delete your account and any associated data within 30 days. An in-app delete option is being developed and will be available in a future release.',
  },
  {
    question: 'I forgot my password.',
    answer:
      'On the Sign In screen, tap "Forgot password?" and follow the instructions in the email you receive. If you originally signed in with Apple or Google, use the same provider to sign back in — there is no separate password.',
  },
  {
    question: 'The app is showing the wrong patient.',
    answer:
      'Open Settings → Switch Patient and pick the correct profile. If the issue persists, email info@gigabox.ai with the email address you used to sign up so we can investigate.',
  },
  {
    question: 'I am not receiving push notifications.',
    answer:
      'Push notifications require permission. On iOS, open Settings → Notifications → Gigabox EHR and verify that notifications are enabled. If you still do not receive notifications, contact info@gigabox.ai.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'See our Privacy Policy for details. In short: data is stored in Google Cloud SQL in the United States, encrypted at rest and in transit, and accessed only over private network connections.',
  },
];

const status = [
  { service: 'Mobile app (iOS)', state: 'Live on TestFlight' },
  { service: 'Web app (praxis.gigabox.ai)', state: 'Live' },
  { service: 'API', state: 'Live' },
  { service: 'Push notifications', state: 'Live' },
];

export default function EHRSupportPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Gigabox EHR
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Support</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Need help with Gigabox EHR? Email us at{' '}
            <a
              href="mailto:info@gigabox.ai"
              className="text-accent hover:text-accent/80 font-medium"
            >
              info@gigabox.ai
            </a>{' '}
            and we will respond within one business day.
          </p>

          <div className="p-6 bg-white border border-foreground/10 rounded-lg mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-2">Contact us</h2>
            <p className="text-sm text-foreground/70 mb-4">
              For all support inquiries — bug reports, feature requests, account help,
              data deletion requests, or general questions — email us directly.
            </p>
            <a
              href="mailto:info@gigabox.ai?subject=Gigabox%20EHR%20support"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Email info@gigabox.ai
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">Service status</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Service
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                {status.map((row) => (
                  <tr key={row.service} className="border-b border-foreground/10">
                    <td className="py-3 px-4">{row.service}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {row.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">About Gigabox</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Gigabox is an AI research and development company building production software
            with AI. Visit{' '}
            <a href="https://gigabox.ai" className="text-accent hover:text-accent/80">
              gigabox.ai
            </a>{' '}
            to learn more about our platform, our research, and our other applications.
          </p>

          <hr className="my-8 border-foreground/10" />
          <p className="text-sm text-foreground/60">
            See also:{' '}
            <Link href="/apps/ehr/privacy" className="text-accent hover:text-accent/80">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link href="/apps/ehr/terms" className="text-accent hover:text-accent/80">
              Terms of Service
            </Link>{' '}
            ·{' '}
            <Link href="/apps/ehr" className="text-accent hover:text-accent/80">
              EHR home
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
