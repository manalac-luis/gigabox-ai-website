import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <h2>1. Information Collection</h2>
            <p>We collect information that you provide directly to us, including but not limited to account information, usage data, and infrastructure configurations.</p>

            <h2>2. Use of Information</h2>
            <p>The information we collect is used to provide, maintain, and improve our services, as well as to communicate with you about updates and new features.</p>

            <h2>3. Data Storage and Security</h2>
            <p>We implement industry-standard security measures to protect your data. Your infrastructure configurations and personal information are encrypted and stored securely.</p>

            <h2>4. Data Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

            <h2>5. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information for improved service delivery.</p>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 