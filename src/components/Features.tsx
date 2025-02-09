export default function Features() {
  const features = [
    {
      title: 'Multi-Cloud Deployment',
      description: 'Deploy seamlessly across AWS, Azure, and GCP with automated infrastructure provisioning powered by Terraform.',
      icon: '☁️'
    },
    {
      title: 'Kubernetes Orchestration',
      description: 'Manage containerized applications effortlessly with automated Kubernetes cluster setup and management.',
      icon: '🚀'
    },
    {
      title: 'SecDevOps Automation',
      description: 'Implement robust security practices and compliance measures automatically from day one.',
      icon: '🔒'
    },
    {
      title: 'Cost Optimization',
      description: 'Maximize efficiency and reduce cloud spending with intelligent resource management and optimization.',
      icon: '💰'
    },
    {
      title: 'SOC 2 Compliance',
      description: 'Gather evidence for SOC 2 compliance with automated security controls and documentation.',
      icon: '✓'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Infrastructure Made Simple</h2>
          <p className="mt-4 text-xl text-gray-600">Say goodbye to infrastructure headaches and hello to accelerated innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 