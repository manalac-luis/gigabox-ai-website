export default function SecDevOpsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">SecDevOps</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is SecDevOps?</h2>
          <p className="text-gray-600 mb-4">
            SecDevOps (Security Development Operations) integrates security practices within the DevOps process. This approach ensures that security is built into applications from the start, rather than being added as an afterthought. It enables teams to deliver secure applications rapidly and consistently.
          </p>
          <p className="text-gray-600">
            By implementing SecDevOps practices, organizations can automate security controls, maintain compliance requirements, and detect vulnerabilities early in the development cycle, significantly reducing the cost and impact of security issues.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai SecDevOps Integration Kit</h2>
          <p className="text-gray-600 mb-4">
            Our SecDevOps starter kit provides pre-configured pipelines and security tools integration:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">CI/CD Security Integration</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>GitHub Actions workflows for security scanning</li>
                <li>GitLab CI templates with security best practices</li>
                <li>SonarQube integration for code quality and security analysis</li>
                <li>Container image scanning with Trivy</li>
                <li>Infrastructure as Code security scanning with Checkov</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">AWS Security Tools Integration</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>AWS Security Hub setup and configuration</li>
                <li>GuardDuty for threat detection</li>
                <li>AWS Config for security rules and compliance</li>
                <li>AWS Inspector for vulnerability assessment</li>
                <li>AWS WAF for web application protection</li>
                <li>AWS Secrets Manager for secrets handling</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Automated Security Controls</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Automated security testing in CI/CD pipelines</li>
                <li>Infrastructure security compliance checks</li>
                <li>Automated incident response playbooks</li>
                <li>Security monitoring and alerting setup</li>
                <li>Audit logging and compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 