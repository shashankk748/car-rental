import React from "react";
import carselect from "./selectcar.png";
import drive from "./drive.png";
import contact from "./contact.png";

export default function PlanTrip() {
  return (
    <>
      <section className="relative mt-[10vh]">
        <div className="flex justify-center">
          <div className=" flex justify-evenly flex-col p-1/10 pt-10">
            <div className=" flex justify-items-center flex-col items-center gap-6 p-10">
              <h1 className=" text-2xl font-bold">Plan your trip now</h1>
              <p className=" text-6xl font-bold">Quick & easy car rental</p>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <img src={carselect} alt=" carseelct" />
                <strong className=" font-extrabold text-2xl">Select Car</strong>
                <p className="flex text-desc text-center w-2/3 text-s">
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={contact} alt=" contactus" />
                <strong className=" font-extrabold text-2xl">
                  Contact Operator
                </strong>
                <p className="text-desc text-center w-2/3 text-s">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={drive} alt="drive" />
                <strong className=" font-extrabold text-2xl">
                  Let's Drive
                </strong>
                <p className="text-desc text-center w-2/3 text-s">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
