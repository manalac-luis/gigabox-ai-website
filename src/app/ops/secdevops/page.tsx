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
          <h2 className="text-xl font-semibold mb-4">DevOps Automation Workflows</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Git & Version Control</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Automate GitLab Merge Requests Using APIs</li>
                <li>Monitor Multiple GitHub Repositories via Webhook</li>
                <li>Save Workflows into a GitLab Repository</li>
                <li>Send Slack Notifications for New GitHub Releases</li>
                <li>Subscribe to New GitHub Releases via Gmail</li>
                <li>Git Backup of Workflows and Credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Infrastructure & Cloud</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Docker Registry Cleanup Workflow</li>
                <li>Proxmox AI Agent with n8n and Generative AI Integration</li>
                <li>Upload Files via n8n Form to Digital Ocean Spaces</li>
                <li>Upload Images to an S3 Bucket via a Slack Bot</li>
                <li>Automate DigitalOcean Droplet Snapshots</li>
                <li>Create a New DigitalOcean Droplet</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Monitoring & Security</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>SSL Expiry Alert with SSL-Checker.io</li>
                <li>Host Your Own Uptime Monitoring with Scheduled Triggers</li>
                <li>Monitor If a Page is Alive and Notify via Twilio SMS</li>
                <li>Create, Update, and Get Monitors Using UptimeRobot</li>
                <li>User Verification and Login Using Auth0</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">AI & Data Operations</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>AI Agent to Chat with Files in Supabase Storage</li>
                <li>AI Agent to Chat with Supabase/PostgreSQL DB</li>
                <li>Generate SQL Queries from Schema Only (AI-Powered)</li>
                <li>Visualize SQL Agent Queries with OpenAI and Quickchart.io</li>
                <li>AI Data Analyst Agent for Large Spreadsheets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">CI/CD & Automation</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Get a Pipeline in CircleCI</li>
                <li>Workflow Dashboard for n8n</li>
                <li>Event-Based Updates for CRM Messaging</li>
                <li>Request and Receive Zigbee Backup via SFTP</li>
                <li>Streamline Data from n8n Form to Google Sheets, Airtable, and Email</li>
              </ul>
            </div>
          </div>
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