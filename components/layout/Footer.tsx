import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="!text-[#413B35] bg-[#f5e8d8] bg-opacity-80">
      <div className="px-4 pt-12 pb-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Arabian Acres</h3>
            <p className="text-[#4B5563]">
              Your trusted partner in real estate investments, helping you make
              informed decisions for a better future.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#4B5563] transition-colors  hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-[#4B5563] transition-colors  hover:text-primary"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#4B5563] transition-colors  hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-[#4B5563] transition-colors  hover:text-primary"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span className="text-[#4B5563]">
                  123 Business Avenue, City
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span className="text-[#4B5563]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span className="text-[#4B5563]">info@realtypro.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#4B5563] transition-colors  hover:text-primary"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#4B5563] transition-colors  hover:text-primary"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-[#4B5563] transition-colors  hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-[#4B5563] border-t border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Arabian Acres. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
