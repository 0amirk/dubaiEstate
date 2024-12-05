import { properties } from "@/lib/data/properties";
import PropertyCard from "@/components/properties/PropertyCard";

export default function PropertiesPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties from trusted builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}