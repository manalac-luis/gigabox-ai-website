import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'App Store Compliance | Gigabox EHR',
  description:
    'App Store compliance details for the Gigabox EHR iOS app, including account deletion, Sign in with Apple, data collection, and medical disclaimers.',
};

type ComplianceItem = {
  guideline: string;
  title: string;
  description: string;
  status: 'met' | 'met-with-note';
  evidence: string;
  note?: string;
};

const items: ComplianceItem[] = [
  {
    guideline: '5.1.1(v)',
    title: 'In-app account deletion',
    description:
      'Apps that offer account creation must also let users initiate account deletion from within the app.',
    status: 'met',
    evidence:
      'Settings → Delete Account. The row presents a double-confirmation alert and, on confirm, calls the backend DELETE /api/patient-portal/me endpoint (which unlinks the patient record and removes all push tokens), then deletes the Clerk user via Clerk’s client SDK, then signs the user out and returns them to the sign-in screen.',
  },
  {
    guideline: '4.8',
    title: 'Sign in with Apple',
    description:
      'Apps that use a third-party or social login service must also offer Sign in with Apple as an equivalent option.',
    status: 'met',
    evidence:
      'The Sign In and Sign Up screens render expo-apple-authentication’s native AppleAuthenticationButton (HIG-compliant) as the primary option on iOS. Sign-in is wired to Clerk’s oauth_apple strategy via useOAuth, using Clerk-hosted Apple credentials — no custom Apple Service ID or key is required.',
  },
  {
    guideline: '5.1.1(i)',
    title: 'Privacy Policy access',
    description:
      'Apps must link to their Privacy Policy both in the app and on the App Store listing.',
    status: 'met',
    evidence:
      'Settings → Legal → Privacy Policy opens www.gigabox.ai/apps/ehr/privacy in an in-app browser (expo-web-browser). The Sign Up screen shows a legal blurb beneath the Sign Up button with a tappable Privacy Policy link to the same URL.',
  },
  {
    guideline: '3.1.2(a)',
    title: 'Terms of Service access',
    description:
      'Apps with subscriptions or user accounts must link to their Terms of Service from within the app.',
    status: 'met',
    evidence:
      'Settings → Legal → Terms of Service opens www.gigabox.ai/apps/ehr/terms in an in-app browser. The Sign Up screen legal blurb also links to Terms.',
  },
  {
    guideline: '5.1.2',
    title: 'Data collection disclosure',
    description:
      'Apps must disclose any data collection in the App Store App Privacy section and in an in-app or linked Privacy Policy.',
    status: 'met',
    evidence:
      'The Privacy Policy at www.gigabox.ai/apps/ehr/privacy lists every third-party processor (Clerk, Google Cloud, OpenRouter/DeepSeek, Resend, Expo, APNs), explicitly states that no data is sold, specifies US hosting, and describes the 30-day data deletion process. The App Store App Privacy nutrition label mirrors this disclosure.',
  },
  {
    guideline: '1.4.1',
    title: 'Medical device disclaimer',
    description:
      'Apps providing medical information must disclose that they are not a substitute for professional medical advice.',
    status: 'met-with-note',
    evidence:
      'The Settings footer, the App Store description, and the Privacy Policy all state that Gigabox EHR is a research and development product from Gigabox Research, that it is not a medical device, is not FDA cleared, and is not intended for diagnosis, treatment, cure, or prevention of any disease. All clinical decisions must be made by a licensed healthcare provider.',
    note:
      'EHR is not currently making clinical claims. It is a demonstration of an AI-built practice intelligence workflow using fictional patient data.',
  },
  {
    guideline: '2.3.10',
    title: 'Accurate metadata',
    description:
      'App metadata (name, description, screenshots, keywords) must accurately represent the app.',
    status: 'met',
    evidence:
      'The App Store description describes the actual shipped functionality: 4-tab patient app (Home, Appointments, Records, Settings), Apple / Google / email sign-in, patient picker, and push notifications. Screenshots are captured from real app screens on the 1.0.1 (4) TestFlight build.',
  },
  {
    guideline: '5.1.1(iv)',
    title: 'Consent for data collection from minors',
    description:
      'Apps that collect data from children under 13 must comply with COPPA.',
    status: 'met',
    evidence:
      'The Terms of Service require users to be at least 17 years of age and prohibit use by anyone under that age. The App Store Age Rating is set to 17+. No age-gated features or child-directed content exist in the app.',
  },
];

const backendEndpoints = [
  {
    method: 'DELETE',
    path: '/api/patient-portal/me',
    description:
      'Unlinks the currently authenticated Clerk user from their patient record and removes all push tokens associated with that patient. Called by the in-app Delete Account flow before the client-side Clerk user.delete() call.',
  },
  {
    method: 'POST',
    path: '/api/patient-portal/link',
    description:
      'Links an authenticated Clerk user to a selected demo patient profile. Called by the patient picker on first sign-in and by Switch Patient in Settings.',
  },
  {
    method: 'DELETE',
    path: '/api/patient-portal/push-tokens/{token}',
    description:
      'Removes a single Expo push token. Called when push permissions are revoked on-device.',
  },
];

const dataCollected = [
  {
    category: 'Contact Info',
    items: ['Email Address', 'Name (from Apple/Google OAuth)'],
    linked: 'Yes',
    tracking: 'No',
    purpose: 'Account Management, App Functionality',
  },
  {
    category: 'Identifiers',
    items: ['User ID (Clerk)', 'Device Token (Expo push)'],
    linked: 'Yes',
    tracking: 'No',
    purpose: 'App Functionality',
  },
  {
    category: 'Health & Fitness',
    items: ['Medical history, appointments, orders, prescriptions (fictional demo data)'],
    linked: 'Yes',
    tracking: 'No',
    purpose: 'App Functionality',
  },
  {
    category: 'Sensitive Info',
    items: ['Health conditions associated with the selected demo patient profile'],
    linked: 'Yes',
    tracking: 'No',
    purpose: 'App Functionality',
  },
];

const notCollected = [
  'Location',
  'Browsing History',
  'Search History',
  'Purchases',
  'Financial Info',
  'Contacts',
  'Photos or Videos',
  'Audio Data',
  'Gameplay Content',
  'Customer Support Data (beyond what you email us)',
  'Crash Data',
  'Performance Data',
  'Other Diagnostic Data',
  'Advertising Data',
  'Other Usage Data',
];

const STATUS_LABEL: Record<ComplianceItem['status'], { label: string; color: string }> = {
  met: { label: 'Met', color: 'bg-green-500' },
  'met-with-note': { label: 'Met (with note)', color: 'bg-green-500' },
};

export default function EHRCompliancePage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Gigabox EHR
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            App Store Compliance
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            This page documents how Gigabox EHR complies with Apple&apos;s App Review
            Guidelines. It is intended as a reference for App Store reviewers and for our
            own internal audits.
          </p>

          <div className="p-6 bg-white border border-foreground/10 rounded-lg mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Current submission
            </h2>
            <dl className="text-sm space-y-2 text-foreground/80">
              <div className="flex justify-between">
                <dt className="font-medium">App</dt>
                <dd>Gigabox EHR</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Bundle Identifier</dt>
                <dd className="font-mono text-xs">com.gigaboxresearch.ehr</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Version</dt>
                <dd>1.0.1 (4)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Target Platform</dt>
                <dd>iOS 15.1+ (iPhone and iPad)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Age Rating</dt>
                <dd>17+</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Category</dt>
                <dd>Medical</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Uses Encryption</dt>
                <dd>No (HTTPS only, no custom crypto)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Distribution</dt>
                <dd>Public (App Store)</dd>
              </div>
            </dl>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Guideline-by-guideline compliance
          </h2>
          <div className="space-y-4 mb-12">
            {items.map((item) => (
              <div
                key={item.guideline}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      §{item.guideline} — {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">{item.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground/80 shrink-0 mt-1">
                    <span
                      className={`w-2 h-2 rounded-full ${STATUS_LABEL[item.status].color}`}
                    />
                    {STATUS_LABEL[item.status].label}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-3">
                  <span className="font-medium text-foreground">How we comply: </span>
                  {item.evidence}
                </p>
                {item.note && (
                  <p className="text-xs text-foreground/60 leading-relaxed mt-2 italic">
                    Note: {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Account deletion data flow
          </h2>
          <div className="p-6 bg-white border border-foreground/10 rounded-lg mb-12">
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              When a user taps Delete Account in Settings, the app performs the following
              steps, in order. If any step fails, the flow aborts and the user is shown an
              error — no partial deletion state is left behind.
            </p>
            <ol className="text-sm text-foreground/80 space-y-3 list-decimal list-inside">
              <li>
                The app shows a native iOS alert asking the user to confirm. The
                confirmation message explicitly states that this will remove their account
                and cannot be undone.
              </li>
              <li>
                On confirm, the app calls{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  DELETE /api/patient-portal/me
                </code>{' '}
                with the user&apos;s Clerk JWT in the Authorization header.
              </li>
              <li>
                The backend verifies the JWT against Clerk&apos;s public JWKS, extracts the{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  sub
                </code>{' '}
                claim (Clerk user ID), and looks up the linked patient record in the{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  patients
                </code>{' '}
                table.
              </li>
              <li>
                If a patient is linked, the backend deletes every row in the{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  push_tokens
                </code>{' '}
                table where{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  patient_id
                </code>{' '}
                matches, and sets the patient&apos;s{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  clerk_user_id
                </code>{' '}
                to NULL. The patient record itself is retained (it is a demo profile shared
                across users).
              </li>
              <li>
                The entire backend operation runs in a single transaction and commits
                before returning 200 OK.
              </li>
              <li>
                The app then calls Clerk&apos;s client SDK{' '}
                <code className="font-mono text-xs bg-foreground/5 px-1.5 py-0.5 rounded">
                  user.delete()
                </code>{' '}
                to permanently remove the user from Clerk. This also deletes the
                user&apos;s Apple / Google OAuth linkage, email address, and any active
                sessions.
              </li>
              <li>
                The app signs the user out and navigates to the Sign In screen.
              </li>
            </ol>
            <p className="text-xs text-foreground/60 leading-relaxed mt-4">
              Users may also request deletion by emailing info@gigabox.ai. Email requests
              are honored within 30 days.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Backend endpoints used by the mobile app
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Path
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                {backendEndpoints.map((ep) => (
                  <tr
                    key={ep.method + ep.path}
                    className="border-b border-foreground/10"
                  >
                    <td className="py-3 px-4 font-mono text-xs">{ep.method}</td>
                    <td className="py-3 px-4 font-mono text-xs">{ep.path}</td>
                    <td className="py-3 px-4 text-xs leading-relaxed">
                      {ep.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Data collected (App Privacy nutrition label)
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Items
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Linked to user
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Used for tracking
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                {dataCollected.map((row) => (
                  <tr key={row.category} className="border-b border-foreground/10">
                    <td className="py-3 px-4 font-medium">{row.category}</td>
                    <td className="py-3 px-4 text-xs">{row.items.join(', ')}</td>
                    <td className="py-3 px-4">{row.linked}</td>
                    <td className="py-3 px-4">{row.tracking}</td>
                    <td className="py-3 px-4 text-xs">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-foreground/60 leading-relaxed mb-12">
            Gigabox EHR does <strong>not</strong> collect:{' '}
            {notCollected.join(', ')}.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-6">
            Third-party processors
          </h2>
          <div className="p-6 bg-white border border-foreground/10 rounded-lg mb-12">
            <dl className="text-sm text-foreground/80 space-y-3">
              <div>
                <dt className="font-medium text-foreground">Clerk</dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  User authentication, session management, and account data. Handles
                  Apple, Google, and email sign-in. Subprocessor agreement at
                  clerk.com/legal/dpa.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">
                  Google Cloud Platform (US region)
                </dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  All infrastructure — Cloud SQL (PostgreSQL), GKE (compute), Artifact
                  Registry (container images). Data is stored in us-central1.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">
                  OpenRouter (routing to DeepSeek)
                </dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  LLM inference for AI-generated visit summaries, care plans, and
                  practice intelligence. Requests are stateless; no personally identifiable
                  information is stored by OpenRouter or DeepSeek.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Expo (Expo Application Services)</dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  iOS build pipeline (EAS Build) and push notification delivery (EAS Push,
                  which routes to Apple&apos;s APNs). Push tokens are stored in our database
                  and removed on account deletion.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Resend</dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  Transactional email delivery for appointment reminders and outreach
                  messages (web companion only; the mobile app does not send email).
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Apple Push Notification service</dt>
                <dd className="text-xs text-foreground/70 mt-1">
                  Delivery of iOS push notifications. Apple receives only the push token
                  and the notification payload; we do not send identifiable content in
                  push payloads.
                </dd>
              </div>
            </dl>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Questions from reviewers
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            If anything on this page is unclear, or if you need to verify a claim, please
            contact us directly at{' '}
            <a
              href="mailto:info@gigabox.ai?subject=App%20Store%20Review%20-%20Gigabox%20EHR"
              className="text-accent hover:text-accent/80 font-medium"
            >
              info@gigabox.ai
            </a>
            . We respond to review inquiries within one business day.
          </p>

          <hr className="my-8 border-foreground/10" />
          <p className="text-sm text-foreground/60">
            See also:{' '}
            <Link href="/apps/ehr" className="text-accent hover:text-accent/80">
              EHR home
            </Link>{' '}
            ·{' '}
            <Link href="/apps/ehr/privacy" className="text-accent hover:text-accent/80">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link href="/apps/ehr/terms" className="text-accent hover:text-accent/80">
              Terms of Service
            </Link>{' '}
            ·{' '}
            <Link href="/apps/ehr/support" className="text-accent hover:text-accent/80">
              Support
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
