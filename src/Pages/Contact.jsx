  import NavBar from "../Components/NavBar";
  import SearchBar from "../Components/SearchBar";
  import Footer from "../Components/Footer";
  import TopHeader from "../Components/TopHeader";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Link } from "react-router-dom";

  // import { Link } from "react-router-dom";
  import { useState } from "react";
  import React from "react";

  export default function Contact() {
    

    return (
      <>
        {/* Top Header & Navigation */}
        <TopHeader />
        <NavBar />
        <SearchBar />
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 ml-24">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-black font-medium">Contact</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 ">
        {/* Left Section - Contact Info */}
        <div className="bg-white p-6  shadow-md border md:col-span-1 w-[340px] h-[457px]">
          {/* Call To Us */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <span className="text-xl">📞</span> Call To Us
            </div>
            <p className="text-gray-600 text-sm mt-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-medium mt-1">Phone: +880611112222</p>
          </div>

          <hr />

          {/* Write To Us */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <span className="text-xl">✉️</span> Write To Us
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-medium mt-1">Email: customer@exclusive.com</p>
            <p className="font-medium mt-1">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border md:col-span-2 w-[800px]">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="border rounded-lg px-4 py-2 w-full text-gray-700"
                required
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="border rounded-lg px-4 py-2 w-full h-32 text-gray-700"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
        {/* Footer */}
        <Footer />
      </>
    );
  }
