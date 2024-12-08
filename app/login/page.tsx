// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext"; // Importing the context

// const LoginPage = () => {
//   const { setIsAuthenticated } = useAuth(); // Accessing the setIsAuthenticated function
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const router = useRouter();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const response = await fetch(
//       "https://dubai-backend-property.onrender.com/api/admin/login",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       console.log(response);
//       if (data._id) {
//         setIsAuthenticated(true); // Set authentication state to true
//         router.push("/admin"); // Redirect to admin page
//       } else {
//         alert("Invalid credentials");
//         router.push("/"); // Redirect to homepage on failed login
//       }
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
//         {["email", "password"].map((field) => (
//           <div className="mb-4" key={field}>
//             <label className="block mb-2 text-sm font-bold text-gray-700 capitalize">
//               {field}
//             </label>
//             <input
//               type={field === "password" ? "password" : "text"}
//               name={field}
//               value={(formData as any)[field]}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="w-full px-4 py-2 text-white rounded bg-primary hover:opacity-80"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Importing the context
import axios from "axios"; // Importing Axios

const LoginPage = () => {
  const { setIsAuthenticated, setToken } = useAuth(); // Accessing the setIsAuthenticated function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("_____FORM DATA __________", formData);

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "https://dubai-backend-property.onrender.com/api/admin/login",
  //         formData,
  //         {
  //           withCredentials: true,
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log("_____RESPONSE __________", response);

  //       if (response.status === 200) {
  //         setIsAuthenticated(true); // Set authentication state to true
  //         router.push("/admin"); // Redirect to admin page
  //         console.log(response);
  //         // document.cookie = `jwt=${response.data.token}`;
  //       } else {
  //         alert("Invalid credentials");
  //         router.push("/"); // Redirect to homepage on failed login
  //       }
  //     } catch (error) {
  //       console.error("Login error:", error);
  //       alert("Something went wrong. Please try again.");
  //     }
  //   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dubai-backend-property.onrender.com/api/admin/login",
        formData,
        {
          withCredentials: true, // Ensures the cookie is included in the request
          headers: { "Content-Type": "application/json" }, // Specify the content type
        }
      );

      if (response.status === 200) {
        const data = response.data;
        const token = data.token;

        // Set JWT token in cookies (HTTPOnly cookie will be sent automatically in requests)
        document.cookie = `jwt=${token}; path=/;`;

        setIsAuthenticated(true); // Set authentication state to true
        setToken(token); // Optionally save the token in state for immediate use

        router.push("/admin"); // Redirect to admin page
      } else {
        alert("Invalid credentials");
        router.push("/"); // Redirect to homepage on failed login
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
        {["email", "password"].map((field) => (
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
