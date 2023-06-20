import React, { useState } from "react";
// import BookNowBG from "../Pictures/booknowbg.png";
import { UilCar } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import BookNowBG from "../home/booknowbg.png";
export default function BookNow() {
  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handlePickUpLocationChange = (event) => {
    setPickUpLocation(event.target.value);
  };

  const handleDropOffLocationChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handlePickUpDateChange = (event) => {
    setPickUpDate(event.target.value);
  };

  const handleDropOffDateChange = (event) => {
    setDropOffDate(event.target.value);
  };

  return (
    <>
      <section className=" relative justify-around">
        <div className=" flex justify-center ">
          <div className=" flex shadow-black shadow-2xl justify-evenly flex-col p-8 w-3/4">
            <img
              src={BookNowBG}
              className="absolute w-3/4 z-10 "
              alt="backgroundbg"
            />
            {/* <div className="flex"> */}
            <div className="font-semibold text-lg">
              <h1>Book a car</h1>
              <p id="field_empty" className=" hidden text-red-700">
                All Fields Required
              </p>
              <p id="email_sent" className="hidden text-green-700">
                Check your email to confirm the order
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 ">
              <div className="">
                <label className=" flex p-4 pl-0">
                  <h1>
                    <UilCar className=" text-main inline" />
                    Car Type
                  </h1>
                </label>
                <select
                  value={carType}
                  onChange={handleCarTypeChange}
                  className=" w-full text-option bg-optionbg border-[1px] p-4"
                >
                  <option value="">Select Your Car Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
              <div>
                <label className=" flex p-4 pl-0">
                  <h1>
                    <UilLocationPoint className=" inline text-main" />
                    Pick Up
                  </h1>
                </label>
                <select
                  value={pickUpLocation}
                  onChange={handlePickUpLocationChange}
                  className=" p-4 w-full text-option bg-optionbg border-[1px]"
                  // className=" h-full w-1/2"
                >
                  <option value="">Pick-up Location</option>
                  <option value="location1">Delhi</option>
                  <option value="location2">Mumbai</option>
                  <option value="location3">Banglore</option>
                </select>
              </div>
              <div>
                <label className=" flex p-4 pl-0">
                  <h1>
                    <UilLocationPoint className=" text-main inline" />
                    Drop off
                  </h1>
                </label>
                <select
                  value={dropOffLocation}
                  onChange={handleDropOffLocationChange}
                  className=" p-4 w-full text-option bg-optionbg border-[1px]"
                  // className=" h-full w-1/2"
                >
                  <option value="">Drop-off Location</option>
                  <option value="location1">Delhi</option>
                  <option value="location2">Mumbai</option>
                  <option value="location3">Banglore</option>
                </select>
              </div>
              <div>
                <label className=" flex p-4 pl-0">
                  <UilCalendarAlt className=" text-main inline" />
                  <h1>Book From</h1>
                </label>
                <input
                  type="date"
                  value={pickUpDate}
                  onChange={handlePickUpDateChange}
                  className=" h-1/2 w-full border-black border-[1px] text-date p-4"
                  // className=" h-full w-1/2"
                />
              </div>
              <div>
                <label className=" flex p-4 pl-0">
                  <UilCalendarAlt className=" text-main inline" />
                  <h1 className="inline">Book Till</h1>
                </label>
                <input
                  type="date"
                  value={dropOffDate}
                  onChange={handleDropOffDateChange}
                  // className=" h-full w-1/2"
                  className=" h-1/2 w-full border-black border-[1px] text-date p-4"
                />
              </div>
              {/* <label></label> */}
              <button
                type="submit"
                className=" text-white bg-main rounded col-span-1 inline h-2/4 relative top-[48%] hover:shadow-main hover:shadow-md transition-all duration-300"
              >
                Submit
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
