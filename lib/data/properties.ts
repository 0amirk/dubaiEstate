export interface Property {
  id: string;
  name: string;
  builder: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  status: "Ready to Move" | "Under Construction";
  description: string;
  amenities: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Skyline Residences",
    builder: "Prime Developers",
    price: "$850,000",
    location: "Downtown District",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sq ft",
    type: "Apartment",
    status: "Ready to Move",
    description:
      "Luxury apartment with stunning city views and modern amenities.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3",
    ],
  },
  {
    id: "2",
    name: "Green Valley Villas",
    builder: "EcoHomes",
    price: "$1,200,000",
    location: "Suburban Heights",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sq ft",
    type: "Villa",
    status: "Under Construction",
    description:
      "Eco-friendly villa with spacious interiors and private garden.",
    amenities: ["Solar Panels", "Smart Home", "Club House", "Tennis Court"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3",
    ],
  },
  {
    id: "3",
    name: "Urban Heights",
    builder: "Metropolitan Builders",
    price: "$650,000",
    location: "City Center",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    type: "Apartment",
    status: "Ready to Move",
    description:
      "Modern apartment with premium finishes and city connectivity.",
    amenities: ["Rooftop Garden", "Fitness Center", "Concierge", "EV Charging"],
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3",
    ],
  },
  {
    id: "4",
    name: "Skyline Residences",
    builder: "Prime Developers",
    price: "$850,000",
    location: "Downtown District",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sq ft",
    type: "Apartment",
    status: "Ready to Move",
    description:
      "Luxury apartment with stunning city views and modern amenities.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3",
    ],
  },
  {
    id: "5",
    name: "Green Valley Villas",
    builder: "EcoHomes",
    price: "$1,200,000",
    location: "Suburban Heights",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sq ft",
    type: "Villa",
    status: "Under Construction",
    description:
      "Eco-friendly villa with spacious interiors and private garden.",
    amenities: ["Solar Panels", "Smart Home", "Club House", "Tennis Court"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3",
    ],
  },
  {
    id: "6",
    name: "Urban Heights",
    builder: "Metropolitan Builders",
    price: "$650,000",
    location: "City Center",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    type: "Apartment",
    status: "Ready to Move",
    description:
      "Modern apartment with premium finishes and city connectivity.",
    amenities: ["Rooftop Garden", "Fitness Center", "Concierge", "EV Charging"],
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3",
    ],
  },
];
