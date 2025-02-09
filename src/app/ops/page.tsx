export default function OpsPage() {
  return (
    <div className="p-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Technical Operations Platform</h1>
        <p className="text-blue-600 font-semibold mb-4">Powered by Agentic AI</p>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Accelerate your technical operations with our comprehensive platform that covers everything from infrastructure management to security compliance automation, enhanced by intelligent AI agents that understand and adapt to your operational needs.
        </p>
        
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              
            </div>
            <h2 className="text-xl font-semibold mb-3">Infrastructure as Code</h2>
            <p className="text-gray-600 mb-4">
              Automate your infrastructure deployment with our IaC solutions. Manage cloud resources, configure environments, and ensure infrastructure consistency across your organization.
            </p>
            <a 
              href="/ops/iac" 
              className="text-blue-600 hover:text-blue-800 font-medium mt-auto"
            >
              Explore IaC solutions →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Kubernetes Deployment</h2>
          <p className="text-gray-600 mb-4">
            Streamline your container orchestration with our Kubernetes deployment tools. Manage clusters, automate deployments, and optimize container performance.
          </p>
          <a 
            href="/ops/kubernetes" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View K8s tools →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">SecDevOps</h2>
          <p className="text-gray-600 mb-4">
            Integrate security into your development pipeline. Automated security scanning, compliance checks, and vulnerability management throughout your CI/CD process.
          </p>
          <a 
            href="/ops/secdevops" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn about SecDevOps →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">FinOps</h2>
          <p className="text-gray-600 mb-4">
            Optimize cloud costs and resource utilization. Get insights into spending patterns, implement cost controls, and maximize cloud investment efficiency.
          </p>
          <a 
            href="/ops/finops" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Discover FinOps →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">PromptOps</h2>
          <p className="text-gray-600 mb-4">
            Manage and optimize your AI operations. Version control for prompts, performance monitoring, and automated prompt testing for LLM applications.
          </p>
          <a 
            href="/ops/promptops" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Explore PromptOps →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">SOC 2 Evidence Automation</h2>
          <p className="text-gray-600 mb-4">
            Automate technical evidence collection for SOC 2 compliance. Continuous monitoring, automated screenshots, and technical controls verification.
          </p>
          <a 
            href="/ops/soc2" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View SOC 2 automation →
          </a>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Platform Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium mb-2">Full Integration</h3>
            <p className="text-gray-600">
              Seamlessly connects with your existing tools and workflows for a unified operational experience.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Automation-Driven</h3>
            <p className="text-gray-600">
              Reduce manual overhead with intelligent automation across all technical operations.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Scale with Confidence</h3>
            <p className="text-gray-600">
              Built for growth with enterprise-grade reliability and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 