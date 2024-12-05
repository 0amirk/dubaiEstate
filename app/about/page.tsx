import { Award, Building, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Properties Sold" },
    { number: "50+", label: "Builder Partners" },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    },
    {
      name: "Sarah Johnson",
      role: "Investment Advisor",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    },
    {
      name: "Michael Brown",
      role: "Property Consultant",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3"
          alt="Office building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative px-4 mx-auto text-white max-w-7xl sm:px-6 lg:px-8 md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">About Us</h1>
          <p className="max-w-2xl text-xl">
            Leading the way in real estate consultation with expertise and
            integrity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2013, RealtyPro has been at the forefront of real
                estate consultation, helping countless clients make informed
                investment decisions. Our journey began with a simple mission:
                to make real estate investment accessible and profitable for
                everyone.
              </p>
              <p className="text-gray-600">
                Today, we pride ourselves on our extensive network of builder
                partnerships, our expert team of consultants, and our commitment
                to delivering exceptional value to our clients.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3"
                alt="Office meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Meet Our Expert Team</h2>
              <p className="mb-6 text-gray-600">
                Our team of dedicated professionals brings together decades of
                experience in real estate consultation. We're committed to
                helping you make informed investment decisions and finding the
                perfect property that matches your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Expert market analysis and valuation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Personalized investment strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>End-to-end property consultation</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
                alt="Team meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Award className="w-12 h-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Client First</h3>
              <p className="text-gray-600">
                Our clients' success is our top priority.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Building className="w-12 h-12 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity in all our
                dealings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
