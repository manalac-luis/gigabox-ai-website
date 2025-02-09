export default function FinOpsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">FinOps</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is FinOps?</h2>
          <p className="text-gray-600 mb-4">
            FinOps (Financial Operations) is the practice of bringing financial accountability to cloud spending. It enables teams to make data-driven decisions about cloud costs, balancing speed, cost, and quality in their cloud operations.
          </p>
          <p className="text-gray-600">
            Through FinOps practices, organizations can optimize their cloud spending, forecast future costs, and ensure maximum value from their cloud investments across multiple providers and services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai FinOps Toolkit</h2>
          <p className="text-gray-600 mb-4">
            Our comprehensive FinOps solution helps you manage and optimize cloud costs across all major providers:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Cost Optimization Tools</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Automated resource tagging and allocation</li>
                <li>Right-sizing recommendations for compute resources</li>
                <li>Spot instance management and automation</li>
                <li>Reserved instance planning and optimization</li>
                <li>Idle resource detection and cleanup</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Cost Management Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Multi-cloud cost analytics dashboard</li>
                <li>Budget tracking and alerting</li>
                <li>Cost allocation and chargeback reporting</li>
                <li>Anomaly detection and cost forecasting</li>
                <li>Custom cost optimization recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 