import {
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  Handshake,
  HomeIcon,
  KeySquare,
  Puzzle,
  Stamp,
  TrendingUp,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../lib/hero.jpg";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { Button } from "../components/ui/moving-border";

export default function Home() {
  const testimonials = [
    {
      quote: "Strategic Global Hub",
      name: "Dubai’s central location connects Asia, Europe, and Africa, making it a pivotal hub for trade and travel.",
      title:
        "With one of the world’s busiest airports and thriving ports, it’s perfect for global businesses and investors.",
    },
    {
      quote: "Premium Waterfront Properties",
      name: "Home to iconic waterfront developments like Palm Jumeirah and Dubai Marina, offering unmatched luxury and views.",
      title:
        "A blend of serene living and modern amenities, perfect for families and investors.",
    },
    {
      quote: "No Taxation",
      name: "Dubai’s tax-free income policy ensures residents and investors keep more of their earnings.",
      title: "A key driver for global talent and investments.",
    },
    {
      quote: "High Rental Yields",
      name: "Dubai boasts some of the highest rental returns in the world, often ranging from 6-10%.",
      title:
        "A steady flow of expatriates and tourists ensures consistent demand.",
    },
    {
      quote: "No Tax on Investment Returns",
      name: "Keep 100% of your earnings with no taxes on property investments.",
      title:
        "Ideal for maximizing profitability for both short-term and long-term investors.",
    },
    {
      quote: "Sustainable Housing",
      name: "Dubai is at the forefront of eco-friendly developments, including solar-powered communities and green spaces.",
      title:
        "A commitment to sustainable living ensures long-term value for homeowners.",
    },

    {
      quote: "World-Class Infrastructure",
      name: "Cutting-edge transport, healthcare, and education systems make Dubai a global leader in quality of life.",
      title: "Iconic landmarks like Burj Khalifa and seamless urban planning.",
    },
    {
      quote: "Residency Visa through Investment",
      name: "Investors can secure long-term residency visas, offering stability and peace of mind.",
      title:
        "A major incentive for those looking to relocate or expand their business presence.",
    },
    {
      quote: "Thriving Tourism Industry",
      name: "Dubai attracts millions of tourists annually, driving demand for short-term rentals and holiday homes.",
      title:
        "World-class attractions ensure a robust and growing tourism economy.",
    },
    {
      quote: "Innovation and Future Growth",
      name: "Dubai is a leader in technology and innovation, with initiatives like Smart Dubai shaping a futuristic city.",
      title:
        "Investment opportunities abound in emerging industries and technologies.",
    },
    {
      quote: "0% Capital Gain Tax",
      name: "Investors enjoy complete exemption from capital gains tax, ensuring higher profitability.",
      title: "Ideal for both local and international property investors.",
    },
    {
      quote: "Off-Plan Investment",
      name: "Gain early access to premium developments with flexible payment plans and competitive pricing.",
      title:
        "A high-potential strategy for maximizing returns as property values appreciate.",
    },
  ];

  const services = [
    {
      icon: <CalendarClock className="w-12 h-12 text-primary" />,
      title: "Flexi/Fixed Rentals",
      description:
        "Flexible and fixed rental solutions tailored to suit your lifestyle and investment needs.",
    },
    {
      icon: <BriefcaseBusiness className="w-12 h-12 text-primary" />,
      title: "Company Setup Assistance Ensuring Best ROI",
      description:
        "End-to-end support for setting up your business in Dubai with strategies to maximize returns.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Property Management",
      description:
        "Comprehensive management services to maintain and enhance the value of your property.",
    },
    {
      icon: <Stamp className="w-12 h-12 text-primary" />,
      title: "Golden & Residential Visa Assistance",
      description:
        "Streamlined support for obtaining UAE’s Golden or Residential Visa through property investments.",
    },
    {
      icon: <KeySquare className="w-12 h-12 text-primary" />,
      title: "Leasing",
      description:
        "Hassle-free leasing services ensuring maximum occupancy and consistent rental income.",
    },
    {
      icon: <Handshake className="w-12 h-12 text-primary" />,
      title: "Finance & Mortgage Assistance",
      description:
        "Market insights and economic trends to maximize growth and secure lasting wealth.",
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
          src={heroImg}
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
            <Button
              borderRadius="0.5rem"
              className="text-lg font-semibold text-white transition-colors bg-black rounded-lg "
            >
              View Properties
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
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

      {/* Why Dubai */}
      <section className="py-20 bg-gray-50">
        <div className="">
          <div className="mx-auto mb-16 text-center max-w-7xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Dubai</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Dubai is a global hub of innovation, luxury, and opportunity,
              offering unparalleled benefits for investors and residents alike.
            </p>
          </div>
          <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
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
