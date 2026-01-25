import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <h2 className="text-foreground">1. Information Collection</h2>
            <p>We collect information that you provide directly to us, including but not limited to contact information and research collaboration inquiries.</p>

            <h2 className="text-foreground">2. Use of Information</h2>
            <p>The information we collect is used to respond to your inquiries, facilitate research collaborations, and communicate about our work.</p>

            <h2 className="text-foreground">3. Data Storage and Security</h2>
            <p>We implement industry-standard security measures to protect your data. Your personal information is encrypted and stored securely.</p>

            <h2 className="text-foreground">4. Data Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

            <h2 className="text-foreground">5. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to improve your experience on our website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
