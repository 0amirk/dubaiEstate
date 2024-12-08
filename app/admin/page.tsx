// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";

// const AdminPage = () => {
//   const { isAuthenticated } = useAuth(); // Accessing authentication state
//   const [isClient, setIsClient] = useState(false); // State to track if component is mounted on the client side
//   const router = useRouter();

//   useEffect(() => {
//     // Set isClient to true after component mounts
//     setIsClient(true);
//   }, []);

//   // Redirect to login page if the user is not authenticated
//   useEffect(() => {
//     if (isClient && !isAuthenticated) {
//       router.push("/"); // Redirect to homepage if not authenticated
//     }
//   }, [isClient, isAuthenticated, router]);

//   if (!isClient) {
//     return null; // Render nothing during server-side rendering
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <h1>Welcome to the Admin Panel</h1>
//       {/* Your admin page content */}
//     </div>
//   );
// };

// export default AdminPage;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

// Define the property type
interface Property {
  title: string;
  description: string;
  price: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  image: File | null;
  showForm?: boolean; // Optional to handle form visibility
}

const AdminPage = () => {
  const { isAuthenticated, token } = useAuth(); // Ensure token is correctly fetched
  const [isClient, setIsClient] = useState(false);
  const [properties, setProperties] = useState<any[]>([]); // Adjusted to any[] for simplicity
  const [newProperty, setNewProperty] = useState<Property>({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image: null,
  });

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isAuthenticated) {
      router.push("/"); // Redirect to login if not authenticated
    }
  }, [isClient, isAuthenticated, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewProperty({ ...newProperty, image: e.target.files[0] });
    }
  };

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newProperty) {
      if (key !== "showForm") {
        formData.append(key, newProperty[key as keyof Property] || "");
      }
    }

    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      // Ensure that the token is correctly passed in the headers
      const response = await axios.post(
        "https://dubai-backend-property.onrender.com/api/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Correct content type for form data
            Authorization: `Bearer ${token}`, // Use token for authentication
          },
          withCredentials: true, // Ensure cookies are sent if needed
        }
      );

      if (response.status === 201) {
        alert("Property added successfully!");
        fetchProperties(); // Refresh properties list after adding
      }
    } catch (error) {
      console.error(
        "Error adding property:",
        error.response?.data || error.message
      );
      alert("Error adding property");
    }
  };

  const fetchProperties = async () => {
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      const response = await axios.get(
        "https://dubai-backend-property.onrender.com/api/properties",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token for authentication
          },
          withCredentials: true, // Ensure cookies are sent if needed
        }
      );

      if (response.status === 200) {
        setProperties(response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching properties:",
        error.response?.data || error.message
      );
      alert("Error fetching properties");
    }
  };

  useEffect(() => {
    if (isClient && isAuthenticated) {
      fetchProperties(); // Fetch properties when authenticated
    }
  }, [isClient, isAuthenticated]);

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">Admin Panel</h1>

      {/* Add Property Button and Form */}
      <button
        onClick={() => setNewProperty({ ...newProperty, showForm: true })}
        className="w-full max-w-sm px-4 py-2 mb-4 text-white rounded bg-primary hover:opacity-80"
      >
        Add Property
      </button>

      {newProperty.showForm && (
        <form
          onSubmit={handleAddProperty}
          className="w-full max-w-md p-6 border rounded shadow-lg"
        >
          <h2 className="mb-4 text-xl font-bold">Add Property</h2>
          {[
            "title",
            "description",
            "price",
            "location",
            "bedrooms",
            "bathrooms",
            "area",
          ].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-2 text-sm font-bold text-gray-700 capitalize">
                {field}
              </label>
              <input
                type={
                  field === "price" ||
                  field === "bedrooms" ||
                  field === "bathrooms" ||
                  field === "area"
                    ? "number"
                    : "text"
                }
                name={field}
                value={newProperty[field as keyof Property]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700 capitalize">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded bg-primary hover:opacity-80"
          >
            Submit
          </button>
        </form>
      )}

      {/* Show Properties Button */}
      <button
        onClick={fetchProperties}
        className="w-full max-w-sm px-4 py-2 mt-4 text-white rounded bg-secondary hover:opacity-80"
      >
        Show Properties
      </button>

      {/* Properties List */}
      <div className="w-full max-w-4xl mt-8">
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property: any) => (
              <div
                key={property._id}
                className="p-4 border rounded-lg shadow-lg"
              >
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="object-cover w-full h-48 mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold">${property.price}</p>
                <p>{property.description}</p>
                <p>
                  {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms
                  | {property.area} sqft
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No properties available</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
