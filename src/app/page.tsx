import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogPreview from '@/components/BlogPreview';
import Sponsored from '@/components/Sponsored';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">{/* keep space for fixed navbar */}</div>
      <Hero />
      <Sponsored />
      <BlogPreview />
      <Features />
      <ContactForm />
      <Team />
      <Footer />
    </main>
  );
}

// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import BlogPreview from '@/components/BlogPreview';
// import Sponsored from '@/components/Sponsored';
// import Features from '@/components/Features';
// import Footer from '@/components/Footer';
// import ContactForm from '@/components/ContactForm';

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <div className="pt-16"> {/* Add padding to account for fixed navbar */}
//         <Hero />
//         <Sponsored />
//         <BlogPreview />
//         <Features />
//         <ContactForm />
//       </div>
//       <Footer />
//     </main>
//   );
// }
