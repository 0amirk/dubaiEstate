"use client";

import { Bed, Bath, Move, Square } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

// Define the property type based on the provided JSON
interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64">
          <Image
            src={property.imageUrl} // Make sure the image URL is valid
            alt={property.title} // Use title for alt text
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold">{property.title}</h3>
          <p className="mb-4 text-2xl font-bold">${property.price}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Bed className="w-5 h-5 text-gray-400" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="w-5 h-5 text-gray-400" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <Square className="w-5 h-5 text-gray-400" />
              <span>{property.area} sq ft</span>
            </div>
            <div className="flex items-center space-x-2">
              <Move className="w-5 h-5 text-gray-400" />
              <span>{property.description}</span>{" "}
              {/* You can modify the type as needed */}
            </div>
          </div>

          <p className="text-gray-600 truncate">{property.location}</p>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
