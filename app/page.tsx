import { Building2, CheckCircle2, HomeIcon, TrendingUp, Users2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: <HomeIcon className="w-12 h-12 text-primary" />,
      title: "Property Selection",
      description: "Expert guidance in choosing the right property based on your investment goals and preferences.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Investment Advisory",
      description: "Comprehensive market analysis and investment strategies to maximize your returns.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Builder Partnerships",
      description: "Access to exclusive properties from reputed builders at preferential terms.",
    },
  ];

  const features = [
    {
      icon: <Users2 className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Our team of seasoned professionals brings years of real estate expertise.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Trusted Partners",
      description: "We work with only the most reputable builders and developers.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Market Insights",
      description: "Stay ahead with our in-depth market research and analysis.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3"
          alt="Modern building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in<br />Real Estate Investment
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We help you make informed decisions in real estate investment through expert consultation and market insights.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate consultation services tailored to meet your investment needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring expertise, trust, and personalized service to every client relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}