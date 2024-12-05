import PropertyCarousel from "@/components/properties/PropertyCarousel";
import { properties } from "@/lib/data/properties";
import { Bed, Bath, Square, MapPin, Building2 } from "lucide-react";
import { notFound } from "next/navigation";

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-1" />
              {property.location}
            </div>
            <div className="flex items-center">
              <Building2 className="w-5 h-5 mr-1" />
              {property.builder}
            </div>
          </div>
        </div>

        <PropertyCarousel images={property.images} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Bed className="w-5 h-5 text-gray-400" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-5 h-5 text-gray-400" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="w-5 h-5 text-gray-400" />
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <span>{property.type}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8">{property.description}</p>

              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <ul className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-3xl font-bold text-primary mb-6">
                {property.price}
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-4">
                Contact Agent
              </button>
              <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}