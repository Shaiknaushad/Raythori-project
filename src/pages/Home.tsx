import { ArrowRight, ShoppingCart, Truck, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Direct Purchasing",
      description: "Buy directly from farmers without any middlemen involvement."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Delivery Tracking",
      description: "Real-time tracking of your orders from farm to doorstep."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Market Analytics",
      description: "Get insights into market trends and make informed decisions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Join a growing community of farmers and buyers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Farm Fresh, Direct to You
            </h1>
            <p className="text-xl text-green-600 mb-8">
              Connect directly with farmers and get fresh produce at better prices
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/buyer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Start Buying <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/seller"
                className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Raythori?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide the best platform for farmers and buyers to connect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/buyer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
            >
              Start Buying
            </Link>
            <Link
              to="/seller"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-green-700"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}