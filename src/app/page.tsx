import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sponsored from '@/components/Sponsored';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <Sponsored />
        <Features />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
