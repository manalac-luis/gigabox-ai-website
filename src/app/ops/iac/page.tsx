export default function IACPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Infrastructure as Code</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is Infrastructure as Code?</h2>
          <p className="text-gray-600 mb-4">
            Infrastructure as Code (IaC) is the practice of managing and provisioning cloud infrastructure through machine-readable definition files, rather than manual processes. This approach brings software engineering practices like version control, automated testing, and continuous integration to infrastructure management.
          </p>
          <p className="text-gray-600">
            With Terraform, you can define your entire infrastructure stack in code, making it reproducible, maintainable, and scalable. This includes everything from virtual machines and networks to databases and security policies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai Terraform Starter Kit</h2>
          <p className="text-gray-600 mb-4">
            Get started quickly with our curated collection of Terraform manifests designed for multi-cloud deployments. Our starter kit includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>AWS foundational infrastructure (VPC, Subnets, Security Groups)</li>
            <li>Azure resource templates (Resource Groups, Virtual Networks, App Services)</li>
            <li>GCP project setup (Projects, Networks, Compute Instances)</li>
            <li>Cross-cloud networking configurations</li>
            <li>Security baseline configurations</li>
            <li>Cost optimization best practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 