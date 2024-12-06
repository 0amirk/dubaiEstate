import {
  Building2,
  CheckCircle2,
  HomeIcon,
  Puzzle,
  TrendingUp,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: <HomeIcon className="w-12 h-12 text-primary" />,
      title: "Property Selection",
      description:
        "Expert guidance in choosing the right property based on your investment goals and preferences.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Investment Consulting",
      description:
        "Market insights and economic trends to maximize growth and secure lasting wealth.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Property Management",
      description:
        "Hassle-free management of your investments, from maintenance to tenant services.",
    },
  ];

  const features = [
    {
      icon: <Users2 className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description:
        "Over a decade of industry experience across UAE and India. In-depth knowledge of market trends ensures informed, profitable decisions.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Trust & Transparency",
      description:
        "Long-term partnerships built on integrity and shared success. Clear communication at every step of your real estate journey.",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-primary" />,
      title: "Tailored Solutions",
      description:
        "A client-centric approach designed to exceed expectations. Personalized strategies for wealth growth and lifestyle enhancement.",
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
        <div className="relative px-4 mx-auto text-white md:flex md:flex-col md:items-center md:justify-center max-w-7xl sm:px-6 lg:px-8 md:text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Shape Lifestyles,
            <br />
            Create Legacies
          </h1>
          <p className="max-w-2xl mb-8 text-lg md:text-xl">
            Discover a world where real estate meets opportunity. At Arabian
            Acres Properties, we specialize in residential, commercial, and
            investment properties, delivering end-to-end services that ensure
            not only the security of your wealth but its steady growth.
          </p>
          <Link href="/properties">
            <button className="px-8 py-3 text-lg font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary/90">
              View Properties
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Comprehensive real estate consultation services tailored to meet
              your investment needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Us
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We bring expertise, trust, and personalized service to every
              client relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{feature.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
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
