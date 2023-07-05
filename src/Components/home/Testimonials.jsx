import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-[rgb(248,248,248)] mt-[10vh]">
      <div className="flex justify-center">
        <div className=" flex flex-col justify-center w-2/3 ">
          <div className="mt-[10vh] flex flex-col text-center gap-5">
            <div className=" text-xl font-bold">Reviewed by People</div>
            <div className=" text-5xl font-extrabold">
              Client's Testimonials
            </div>
            <div className="  text-desc">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </div>
            <div className=" flex justify-around w-full gap-6 mt-[12vh]">
              <div className=" bg-white text-black sahdow-black shadow-2xl p-9 w-1/2">
                <p className=" text-2xl text-left ">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className=" flex flex-row gap-2 mt-[3vh]">
                  <img
                    src="https://car-rental-ten.vercel.app/static/media/pfp1.ba7974ae51bb5d44fa69.jpg"
                    alt=""
                    className="h-[8vh] aspect-auto rounded-full"
                  />
                  <p className=" flex translate-x-[20%] translate-y-[30%] font-bold">
                    Parry Hotter
                  </p>
                </div>
              </div>
              <div className=" bg-white text-black sahdow-black shadow-2xl p-9 w-1/2">
                <p className=" text-2xl text-left ">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className=" flex flex-row gap-2 mt-[3vh]">
                  <img
                    src="https://car-rental-ten.vercel.app/static/media/pfp2.fd9b1716200244ed8905.jpg"
                    alt=""
                    className=" h-[8vh] aspect-auto rounded-full"
                  />
                  Ron Rizzly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
