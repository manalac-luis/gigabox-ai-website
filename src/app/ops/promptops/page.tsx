export default function PromptOpsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">PromptOps</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is PromptOps?</h2>
          <p className="text-gray-600 mb-4">
            PromptOps is an emerging discipline that brings engineering practices to AI prompt development and management. It involves treating prompts as code, applying version control, testing, and continuous improvement to ensure consistent and reliable AI interactions.
          </p>
          <p className="text-gray-600">
            As organizations increasingly rely on AI models, PromptOps becomes crucial for maintaining quality, security, and efficiency in AI operations while managing costs and performance.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai PromptOps Platform</h2>
          <p className="text-gray-600 mb-4">
            Our PromptOps platform provides comprehensive tools for managing AI prompts at scale:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Prompt Management</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Version control for prompts and templates</li>
                <li>A/B testing framework for prompt optimization</li>
                <li>Prompt performance analytics</li>
                <li>Cost tracking and optimization</li>
                <li>Security and compliance scanning</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Development Tools</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Prompt testing and validation suite</li>
                <li>CI/CD integration for prompt deployment</li>
                <li>Collaborative prompt development environment</li>
                <li>Model performance monitoring</li>
                <li>Integration with popular AI platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 