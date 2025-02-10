export default function Hero() {
   return (
     <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
         <div className="text-center">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Launch Your Cloud Infrastructure in Record Time
           </h1>
           <div className="mb-4">
             <p className="text-2xl md:text-3xl font-semibold text-blue-100">"5 + 2"</p>
             <p className="text-xl md:text-2xl text-blue-100">
               Security, Availability, Processing Integrity, Confidentiality, Privacy + Automation and Cost Optimization
             </p>
           </div>
           <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
             Seamlessly integrate Terraform, Kubernetes, and SecDevOps workflows across AWS, Azure, and GCP. Focus on growing your business while we handle your infrastructure.
           </p>
           <div className="space-x-4">
             <a 
               href="/ops"
               className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg"
             >
               Explore Platform
             </a>
             <a 
               href="#contact"
               className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg"
             >
               Contact Us
             </a>
           </div>
         </div>
       </div>
     </div>
   );
 }