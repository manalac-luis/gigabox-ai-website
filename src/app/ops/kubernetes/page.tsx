export default function KubernetesPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Kubernetes Orchestration</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">What is Kubernetes?</h2>
          <p className="text-gray-600 mb-4">
            Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a robust framework for running distributed systems resiliently, handling scaling and failover for your applications.
          </p>
          <p className="text-gray-600">
            With Kubernetes, you can deploy your applications consistently across multiple environments, automatically scale based on demand, and ensure high availability through self-healing capabilities. It has become the industry standard for container orchestration in production environments.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">gigabox.ai Kubernetes Starter Kit</h2>
          <p className="text-gray-600 mb-4">
            Jump-start your Kubernetes journey with our comprehensive starter kit that includes both Terraform manifests and curated Helm charts:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Terraform Resources</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>EKS, AKS, and GKE cluster provisioning</li>
                <li>Node pool management and scaling configurations</li>
                <li>Network policy and security group setups</li>
                <li>Storage class configurations</li>
                <li>Cluster autoscaling setup</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Helm Charts Collection</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Monitoring stack (Prometheus, Grafana, Alert Manager)</li>
                <li>Logging solutions (EFK/ELK Stack)</li>
                <li>Service mesh options (Istio, Linkerd)</li>
                <li>CI/CD tools (ArgoCD, Tekton)</li>
                <li>Security tools (Vault, Cert-Manager)</li>
                <li>Ingress controllers (NGINX, Traefik)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 