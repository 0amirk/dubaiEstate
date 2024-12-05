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
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {property.status}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
          <p className="text-gray-600 mb-2">by {property.builder}</p>
          <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
          
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