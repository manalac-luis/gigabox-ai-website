import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Gigabox EHR',
  description:
    'Privacy Policy for the Gigabox EHR mobile and web application — what we collect, how we use it, third-party processors, your rights, and how to delete your account.',
};

export default function EHRPrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Gigabox EHR
          </div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-foreground/60 mb-8">Effective: April 7, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              This Privacy Policy describes how Gigabox handles information when you use the
              Gigabox EHR mobile application (the &ldquo;App&rdquo;) and the related web
              application at{' '}
              <a
                href="https://praxis.gigabox.ai"
                className="text-accent hover:text-accent/80"
              >
                praxis.gigabox.ai
              </a>{' '}
              (collectively, &ldquo;EHR&rdquo;). EHR is operated by Gigabox.
            </p>

            <h2 className="text-foreground">Research and Development Status</h2>
            <p>
              Gigabox EHR is currently a research and development product. The patient
              profiles shown in the App are <strong>fictional</strong> and exist solely to
              demonstrate the platform&apos;s capabilities. EHR is not yet certified for use
              with real protected health information (PHI) and is not a substitute for
              clinical judgment. When that status changes, we will update this policy and
              notify active users by email.
            </p>

            <h2 className="text-foreground">Information We Collect</h2>

            <h3 className="text-foreground">Account Information</h3>
            <p>
              When you create an account through Sign in with Apple, Google Sign-In, or
              email and password, we collect:
            </p>
            <ul>
              <li>Your email address</li>
              <li>Your display name (if provided by your authentication provider)</li>
              <li>
                A unique identifier from your authentication provider (Apple, Google, or
                Clerk)
              </li>
            </ul>

            <h3 className="text-foreground">Application Usage Information</h3>
            <p>When you use the App, we collect:</p>
            <ul>
              <li>
                The fictional patient profile you choose to view (your &ldquo;linked
                patient&rdquo; selection)
              </li>
              <li>
                Push notification tokens, so we can deliver demonstration appointment
                reminders
              </li>
              <li>
                Device information (operating system version, device model, app version)
                for diagnostic purposes
              </li>
            </ul>

            <h3 className="text-foreground">Information We Do Not Collect</h3>
            <ul>
              <li>We do not collect data from Apple HealthKit</li>
              <li>
                We do not access your contacts, photos, location, microphone, or camera
              </li>
              <li>We do not collect advertising identifiers</li>
              <li>We do not use third-party analytics or behavioral trackers</li>
            </ul>

            <h2 className="text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Authenticate your account and provide access to the App</li>
              <li>
                Display the demonstration EHR experience (patient records, appointments,
                telehealth, prescriptions, lab orders, referrals)
              </li>
              <li>Send push notifications for demonstration appointment reminders</li>
              <li>
                Generate AI-powered features (visit summaries, draft messages, referral
                letters) using your selected demonstration data as input
              </li>
              <li>Diagnose technical issues and improve the App</li>
            </ul>

            <h2 className="text-foreground">Third-Party Service Providers</h2>
            <p>
              We use the following service providers to operate EHR. Each processes only
              the data necessary to provide their service.
            </p>

            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground/20">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Provider
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Purpose
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Data Processed
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground/80">
                  <tr className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">Clerk</td>
                    <td className="py-3 px-4">Authentication and identity</td>
                    <td className="py-3 px-4">
                      Email, name, OAuth identifier from Apple or Google
                    </td>
                  </tr>
                  <tr className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">Google Cloud Platform</td>
                    <td className="py-3 px-4">Hosting, database, container infrastructure</td>
                    <td className="py-3 px-4">All app data, encrypted at rest and in transit</td>
                  </tr>
                  <tr className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">OpenRouter / DeepSeek</td>
                    <td className="py-3 px-4">AI inference for summaries and drafts</td>
                    <td className="py-3 px-4">Demonstration patient text used as input</td>
                  </tr>
                  <tr className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">Resend</td>
                    <td className="py-3 px-4">Transactional email</td>
                    <td className="py-3 px-4">
                      Email address, message content (appointment confirmations)
                    </td>
                  </tr>
                  <tr className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">Expo</td>
                    <td className="py-3 px-4">Mobile build delivery and push notifications</td>
                    <td className="py-3 px-4">Push notification tokens, device metadata</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Apple Push Notification Service</td>
                    <td className="py-3 px-4">iOS notification delivery</td>
                    <td className="py-3 px-4">Push notification payload</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>We do not sell your personal information to anyone.</strong> We do
              not share your information with third parties for marketing or advertising
              purposes.
            </p>

            <h2 className="text-foreground">Data Storage and Security</h2>
            <ul>
              <li>
                All data is stored in Google Cloud SQL (PostgreSQL) hosted in the United
                States (us-central1 region).
              </li>
              <li>
                Database access is restricted to private IP addresses inside our virtual
                private cloud. The database is not exposed to the public internet.
              </li>
              <li>Data is encrypted at rest using Google-managed encryption keys.</li>
              <li>Data in transit is encrypted with TLS 1.2 or higher.</li>
              <li>
                Authentication is handled by Clerk, which uses industry-standard JWT-based
                session management with rotating refresh tokens.
              </li>
            </ul>

            <h2 className="text-foreground">Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access</strong> — You can request a copy of the personal
                information we have about you.
              </li>
              <li>
                <strong>Correction</strong> — You can request that we correct inaccurate
                information.
              </li>
              <li>
                <strong>Deletion</strong> — You can delete your account at any time. To
                request deletion, send an email to{' '}
                <a
                  href="mailto:info@gigabox.ai?subject=Delete%20my%20EHR%20account"
                  className="text-accent hover:text-accent/80"
                >
                  info@gigabox.ai
                </a>{' '}
                with the subject &ldquo;Delete my EHR account.&rdquo; An in-app deletion
                option is being developed and will be available in a future release.
              </li>
              <li>
                <strong>Portability</strong> — You can request your data in a machine-readable
                format.
              </li>
            </ul>
            <p>We will respond to all requests within 30 days.</p>

            <h2 className="text-foreground">Children&apos;s Privacy</h2>
            <p>
              EHR is intended for users aged 17 and older. We do not knowingly collect
              personal information from children under 13. If you believe a child has
              provided us with information, please contact{' '}
              <a
                href="mailto:info@gigabox.ai"
                className="text-accent hover:text-accent/80"
              >
                info@gigabox.ai
              </a>{' '}
              and we will delete it.
            </p>

            <h2 className="text-foreground">International Data Transfers</h2>
            <p>
              Your information is stored in the United States. If you access EHR from
              outside the United States, you understand that your information may be
              transferred to, stored in, and processed in the United States, where data
              protection laws may differ from those in your country.
            </p>

            <h2 className="text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Effective&rdquo;
              date at the top of this page reflects the most recent change. Material changes
              will be communicated through the App or by email to your registered address.
            </p>

            <h2 className="text-foreground">Contact Us</h2>
            <p>
              For any questions about this Privacy Policy or to exercise your rights,
              contact:
            </p>
            <p>
              <strong>Gigabox</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:info@gigabox.ai"
                className="text-accent hover:text-accent/80"
              >
                info@gigabox.ai
              </a>
              <br />
              Web:{' '}
              <a href="https://gigabox.ai" className="text-accent hover:text-accent/80">
                https://gigabox.ai
              </a>
            </p>

            <hr className="my-8 border-foreground/10" />
            <p className="text-sm text-foreground/60">
              See also:{' '}
              <Link href="/apps/ehr/terms" className="text-accent hover:text-accent/80">
                Terms of Service
              </Link>{' '}
              ·{' '}
              <Link href="/apps/ehr/support" className="text-accent hover:text-accent/80">
                Support
              </Link>{' '}
              ·{' '}
              <Link href="/apps/ehr" className="text-accent hover:text-accent/80">
                EHR home
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
