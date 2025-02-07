import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using gigabox.ai, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access the materials (information or software) on gigabox.ai's website for personal, non-commercial transitory viewing only.</p>

            <h2>3. Service Description</h2>
            <p>gigabox.ai provides cloud infrastructure automation services, including but not limited to Terraform-driven provisioning, Kubernetes orchestration, and SecDevOps workflows.</p>

            <h2>4. Technical Support</h2>
            <p>Technical support is provided according to the service level agreements associated with your subscription plan.</p>

            <h2>5. Data Security</h2>
            <p>We implement various security measures to maintain the safety of your personal information and infrastructure configurations.</p>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 