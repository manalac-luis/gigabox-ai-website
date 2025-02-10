import Image from 'next/image';

export default function Sponsored() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-600 mb-8">
          Sponsored By
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-auto scale-75 md:scale-100">
            <Image
              src="/aws.png"
              alt="AWS Logo"
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-auto scale-75 md:scale-100">
            <Image
              src="/azure.png"
              alt="Azure Logo"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-auto scale-75 md:scale-100">
            <Image
              src="/gcp.png"
              alt="Google Cloud Platform Logo"
              width={160}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 