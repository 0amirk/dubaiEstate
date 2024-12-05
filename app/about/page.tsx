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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    },
    {
      name: "Sarah Johnson",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    },
    {
      name: "Michael Brown",
      role: "Property Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Leading the way in real estate consultation with expertise and integrity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013, RealtyPro has been at the forefront of real estate consultation, helping countless clients make informed investment decisions. Our journey began with a simple mission: to make real estate investment accessible and profitable for everyone.
              </p>
              <p className="text-gray-600">
                Today, we pride ourselves on our extensive network of builder partnerships, our expert team of consultants, and our commitment to delivering exceptional value to our clients.
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts who make our success possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client First</h3>
              <p className="text-gray-600">
                Our clients' success is our top priority.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity in all our dealings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}