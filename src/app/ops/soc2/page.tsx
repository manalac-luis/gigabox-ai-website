export default function SOC2Page() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">SOC 2 Compliance</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is SOC 2?</h2>
          <p className="text-gray-600 mb-4">
            SOC 2 (System and Organization Controls 2) is a voluntary compliance standard for service organizations that specifies how organizations should manage customer data. The standard is based on five Trust Services Criteria: security, availability, processing integrity, confidentiality, and privacy.
          </p>
          
          <h3 className="text-lg font-medium mb-2 text-gray-700">1. Security</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ensures that systems and data are protected against unauthorized access (logical and physical).</li>
            <li>Includes safeguards like firewalls, encryption, multi-factor authentication (MFA), intrusion detection systems (IDS), and regular security assessments.</li>
            <li>Helps prevent data breaches, unauthorized modifications, and cyberattacks.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-4 text-gray-700">2. Availability</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ensures that systems are operational and accessible as agreed upon in service-level agreements (SLAs).</li>
            <li>Requires monitoring system uptime, incident response planning, and failover strategies.</li>
            <li>Involves backup solutions, disaster recovery plans (DRP), and redundancy to minimize downtime.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-4 text-gray-700">3. Processing Integrity</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ensures that systems process data correctly, completely, and in a timely manner.</li>
            <li>Focuses on accuracy, consistency, and error-free execution of business processes.</li>
            <li>Requires data validation, quality control, and automated reconciliation to detect and correct errors.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-4 text-gray-700">4. Confidentiality</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ensures that sensitive business and customer information is only accessible to authorized individuals.</li>
            <li>Protects intellectual property (IP), trade secrets, and other confidential data.</li>
            <li>Includes encryption, access controls, data masking, and policies for handling and disposing of sensitive data.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-4 text-gray-700">5. Privacy</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ensures that personal data is collected, stored, and processed in compliance with regulations (e.g., GDPR, CCPA).</li>
            <li>Covers the use, retention, disclosure, and disposal of personal information.</li>
            <li>Requires data encryption, privacy policies, user consent mechanisms, and regulatory compliance monitoring.</li>
          </ul>

          <p className="text-gray-600 mt-4">
            Achieving and maintaining SOC 2 compliance demonstrates your organization&apos;s commitment to data security and privacy, building trust with customers and partners.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai SOC 2 Automation Suite</h2>
          <p className="text-gray-600 mb-4">
            Automate your path to SOC 2 compliance with our comprehensive toolkit:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Automated Evidence Collection</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Cloud infrastructure configuration monitoring</li>
                <li>Access control and authentication logs</li>
                <li>Security incident tracking and resolution</li>
                <li>System availability and uptime monitoring</li>
                <li>Data encryption and protection verification</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Compliance Management</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Policy and procedure documentation templates</li>
                <li>Control implementation tracking</li>
                <li>Automated compliance reporting</li>
                <li>Risk assessment and management tools</li>
                <li>Vendor management system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 