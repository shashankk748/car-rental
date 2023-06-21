import React from "react";

export default function Testimonials() {
  return (
    <section className=" bg-[#f8f8f8]">
      <div className=" flex justify-center">
        <div className="flex flex-col items-center text-center w-2/3 gap-11">
          <div className="mt-[10vh] w-2/4">
            <h1 className=" text-2xl font-bold">Trusted by People</h1>
            <h1 className="text-5xl font-extrabold">Client's Testimonials</h1>
            <p className=" text-desc text-center">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="flex flex-row">
            <div>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable.
              <div>
                <img
                  src="https://car-rental-ten.vercel.app/static/media/pfp1.ba7974ae51bb5d44fa69.jpg"
                  alt=""
                />
                <p>Parry Hotter</p>
              </div>
            </div>
            <div>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
              <div>
                <img
                  src="https://car-rental-ten.vercel.app/static/media/pfp2.fd9b1716200244ed8905.jpg"
                  alt=""
                />
                <p>Ron Rizzly</p>
                <p>Parry Hotter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
