// import { properties } from "@/lib/data/properties";
"use client";
import PropertyCard from "@/components/properties/PropertyCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        "https://dubai-backend-property.onrender.com/api/properties"
      );

      if (response.status === 200) {
        setProperties(response.data);
      }
    } catch (error) {
      alert("Error fetching property");
    }
  };
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Featured Properties</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our handpicked selection of premium properties from trusted
            builders.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
