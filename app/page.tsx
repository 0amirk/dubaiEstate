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
import heroImg from "../lib/hero.jpg";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { Button } from "../components/ui/moving-border";

export default function Home() {
  const testimonials = [
    {
      quote: "Thriving Economy",
      name: "A rapidly growing economy with a focus on trade, tourism, and innovation.",
      title:
        "Stable governance and investor-friendly policies create a secure environment for growth.",
    },
    {
      quote: "Tax-Free Investments",
      name: "No personal income tax or capital gains tax ensures maximum returns.",
      title: "Favorable laws make Dubai a haven for investors worldwide.",
    },
    {
      quote: "World-Class Infrastructure",
      name: "Home to iconic landmarks like Burj Khalifa and Palm Jumeirah.",
      title:
        "Cutting-edge transport systems, healthcare, and education for a seamless lifestyle.",
    },
    {
      quote: "Luxury Lifestyle",
      name: "Renowned for its luxury real estate, fine dining, and shopping experiences.",
      title: "A blend of modern living with cultural richness.",
    },
    {
      quote: "Safe & Secure Environment",
      name: "Low crime rates and advanced law enforcement make Dubai one of the safest cities globally.",
      title: "An ideal place for families, professionals, and retirees.",
    },
    {
      quote: "Strategic Location",
      name: "Centrally located with easy access to Asia, Europe, and Africa.",
      title:
        "Dubai International Airport is one of the busiest and most connected in the world.",
    },
  ];

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
              speed="slow"
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
