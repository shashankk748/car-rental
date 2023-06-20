import React from "react";
import { UilCheck } from "@iconscout/react-unicons";
import { UilAngleRight } from "@iconscout/react-unicons";

function Home() {
  return (
    <>
      <section
        id="homesection"
        className="flex h-[78vh] my-[10vh] justify-center items-center"
      >
        <div className=" flex justify-between items-center h-2/3">
          <div className="flex flex-col justify-center aspect-square h-full gap-5">
            <h1 className=" font-bold text-2xl">Plan your Trip Now!!!</h1>
            <h1 className=" font-bold text-5xl">
              Save <strong className=" text-main">Big</strong> with our Offers
            </h1>
            <p className=" text-gray-500">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more. Simply book a car and
              leave the rest on Us.
            </p>
            <div className="flex gap-4">
              <button className=" text-white bg-main duration-300 rounded-lg shadow-xs p-4 shadow-main hover:shadow-md hover:shadow-main">
                Book Now
                <UilCheck className="text-main inline bg-white rounded-2xl m-2 h-[15px] w-[15px]" />
              </button>
              <button className="transition-all duration-10 bg-black hover:text-black text-white hover:bg-white border-2 border-black p-4 rounded">
                Learn More <UilAngleRight className="inline" />
              </button>
            </div>
          </div>
          <img
            src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png"
            alt="car"
            className=" h-full"
          />
        </div>
      </section>
    </>
  );
}
export default Home;
