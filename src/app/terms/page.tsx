import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <h2 className="text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing and using Gigabox Research, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2 className="text-foreground">2. Use License</h2>
            <p>Permission is granted to access the materials on this website for personal, non-commercial viewing only. Research papers are provided for educational and research purposes.</p>

            <h2 className="text-foreground">3. Research Content</h2>
            <p>Gigabox Research publishes research papers and findings related to AI agents and conversational AI systems. All research content is subject to copyright protection.</p>

            <h2 className="text-foreground">4. Contact and Collaboration</h2>
            <p>We welcome collaboration inquiries. Please reach out through our contact form for partnership opportunities.</p>

            <h2 className="text-foreground">5. Disclaimer</h2>
            <p>The materials on this website are provided on an &apos;as is&apos; basis. Gigabox Research makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
