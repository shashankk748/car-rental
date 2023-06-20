import React from "react";

export default function Navigation() {
  return (
    <div className="w-full flex justify-evenly z-50 py-4">
      <img
        src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
        alt="car-rental-logo"
        className=" h-12 w-36"
      />
      <div className="flex justify-center items-center font-semibold gap-4">
        <a className=" text-black hover:text-main" href="/">
          Home
        </a>
        <a className=" text-black hover:text-main" href="/">
          About
        </a>
        <a className=" text-black hover:text-main" href="/">
          Vehicle Models
        </a>
        <a className=" text-black hover:text-main" href="/">
          Testimonials
        </a>
        <a className=" text-black hover:text-main" href="/">
          Our Team
        </a>
        <a className=" text-black hover:text-main" href="/">
          Contact Us
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <a href="/" className="font-semibold ">
          Sign In
        </a>
        <button className="rounded-md font-semibold bg-main text-white px-6 py-3">
          Sign Up
        </button>
      </div>
    </div>
  );
}
