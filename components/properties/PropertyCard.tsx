"use client";

import { Bed, Bath, Move, Square } from "lucide-react";
import Image from "next/image";
import { Property } from "@/lib/data/properties";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

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
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
          />
          <div className="absolute px-3 py-1 text-sm text-white bg-black rounded-full top-4 right-4 ">
            {property.status}
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold">{property.name}</h3>
          <p className="mb-2 text-gray-600">by {property.builder}</p>
          <p className="mb-4 text-2xl font-bold ">{property.price}</p>

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
              <span>{property.area}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Move className="w-5 h-5 text-gray-400" />
              <span>{property.type}</span>
            </div>
          </div>

          <p className="text-gray-600 truncate">{property.location}</p>
        </div>
      </div>

      <ContactFormModal
        property={property}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
