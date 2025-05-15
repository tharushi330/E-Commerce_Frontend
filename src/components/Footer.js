import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* QUICK RIDE Description */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-lg font-semibold uppercase text-gray-300">MyGiFT Hut</h2>
            <p className="text-gray-400 font-medium">
              “As a leading Sri Lanka car rental service provider, ‘Quick Ride’ offers one of the practical car rental choices for tourists, businessmen and locals who want to visit and explore the ‘Pearl of the Indian Ocean’.”
            </p>
          </div>

          {/* SERVICE Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase text-gray-300">SERVICE</h2>
            <ul className="text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">Rent Car</a></li>
              <li><a href="#" className="hover:underline">Wedding Rental</a></li>
              <li><a href="#" className="hover:underline">Transfers</a></li>
            </ul>
          </div>

          {/* CONTACT Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase text-gray-300">CONTACT</h2>
            <ul className="text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">Whatsapp</a></li>
              <li><a href="mailto:support@quickride.lk" className="hover:underline">Email</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* LEGAL Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase text-gray-300">LEGAL</h2>
            <ul className="text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-gray-500 text-xs sm:text-sm">
            © 2025 <a href="/" className="hover:underline">Quick. All Rights Reserved.</a>
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:mt-0 space-x-5">
            <a href="#" className="text-white hover:text-blue-500" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-green-500" aria-label="Whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-white hover:text-sky-400" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500" aria-label="Google Map">
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <a href="#" className="text-white hover:text-pink-500" aria-label="Dribbble">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
