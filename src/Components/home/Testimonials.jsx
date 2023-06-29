import React from "react";

export default function Testimonials() {
  return (
    <section className=" bg-[rgb(248,248,248)]">
      <div className="flex justify-items-center">
        <div className=" mt-[10vh] flex text-center flex-col gap-8">
          <div className=" w-5/12 flex flex-col gap-6">
            <p className=" font-bold text-2xl">Reviewed by People</p>
            <p className="font-bold text-4xl">Client's Testimonials</p>
            <p className="text-desc">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div>
            <div className=" bg-white text-black flex flex-col">
              <div>
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
