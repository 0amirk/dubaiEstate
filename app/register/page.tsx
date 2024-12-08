"use client"; // To mark this as a client-side component

import { useState, useEffect } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const [secretKey, setSecretKey] = useState("");
  const [isSecretKeyValid, setIsSecretKeyValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes for registration form and secret key check
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "secretKey") {
      setSecretKey(value);
    }
  };

  // Check the secret key on change
  useEffect(() => {
    if (secretKey === process.env.NEXT_PUBLIC_SECRET_KEY) {
      setIsSecretKeyValid(true);
      setErrorMessage("");
    } else {
      setIsSecretKeyValid(false);
    }
  }, [secretKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch(
      "https://dubai-backend-property.onrender.com/api/admin/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        alert("Registration successful");
      } else {
        alert("Registration failed");
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Secret key input to validate user */}
      {!isSecretKeyValid ? (
        <div className="w-full max-w-md p-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Enter Secret Key
          </label>
          <input
            type="text"
            name="secretKey"
            value={secretKey}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
          {["email", "name", "username", "password"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-2 text-sm font-bold text-gray-700 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={(formData as any)[field]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded bg-primary hover:opacity-80"
          >
            Sign up
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;
