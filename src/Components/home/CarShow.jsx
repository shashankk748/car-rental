import { useState } from "react";
import React from "react";

function CarSelec({ image, name, active, onClick }) {
  return (
    <div
      id="5"
      className={`p-4 ${
        active ? "bg-main text-white" : " bg-carbg text-black"
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default function CarShow() {
  const [selectedCar, setSelectedCar] = useState(0);
  const cars_info = [
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg",
      name: "Audi A1 S-Line",
      model: "Audi",
      mark: "A1",
      Year: "2012",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Manual",
      Fuel: "Gasoline",
      price: "$45",
    },
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/golf6.595c0bbfc7ce2e50aa05.jpg",
      name: "VW Golf 6",
      model: "Golf 6",
      mark: "Volkswagen",
      Year: "2008",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Manual",
      Fuel: "Diesel",
      price: "$37",
    },
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/toyotacamry.3d493a56558c50b677cc.jpg",
      name: "Toyota Camry",
      model: "Camry",
      mark: "Toyota",
      Year: "2006",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Automatic",
      Fuel: "Hybrid",
      price: "$30",
    },
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/bmw320.84ab73b0c9133418f907.jpg",
      name: "BMW 320 ModernLine",
      model: "320",
      mark: "BMW",
      Year: "2012",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Manual",
      Fuel: "Diesel",
      price: "$35",
    },
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/benz.0a6153731a2c1a68054a.jpg",
      name: "Mercedes-Benz GLK",
      model: "Benz GLK",
      mark: "Mercedes",
      Year: "2006",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Manual",
      Fuel: "Diesel",
      price: "$50",
    },
    {
      image:
        "https://car-rental-ten.vercel.app/static/media/passatcc.bd82bd1deac8c11e3c4d.jpg",
      name: "VW Passat CC",
      model: "Passat CC",
      mark: "Volkswagen",
      Year: "2008",
      Doors: "4/5",
      AC: "Yes",
      Trasmission: "Automatic",
      Fuel: "Gasoline",
      price: "$25",
    },
  ];
  return (
    <>
      <section className=" flex justify-center h-96 mt-[20vh]">
        <div className=" flex flex-col gap-12 ">
          {/* <div className=" flex flex-col "> */}
          <div className="flex text-center flex-col gap-4">
            <h1 className=" text-2xl font-bold">Vehicle Models</h1>
            <h1 className=" text-5xl font-extrabold">Our rental fleet</h1>
            <h1 className=" text-desc">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </h1>
          </div>
          <div className=" flex w-[80vw] flex-row justify-evenly">
            <div className="flex flex-col gap-3 font-bold text-lg cursor-pointer">
              {cars_info.map((info, index) => {
                return (
                  <CarSelec
                    name={info.name}
                    image={info.image}
                    active={selectedCar === index}
                    key={index}
                    onClick={() => {
                      setSelectedCar(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="w-1/3 flex items-center">
              {selectedCar !== null && (
                <img
                  src={cars_info[selectedCar].image}
                  alt="Selected Car"
                  className="w-full "
                />
              )}
            </div>
            <div className="flex flex-col h-full gap-2">
              <div className=" text-white bg-main p-4 text-xl">
                <strong className=" text-3xl">
                  {cars_info[selectedCar].price}
                </strong>{" "}
                / rent per day
              </div>
              <table className=" border-borderbg border-2 text-center w-full h-full">
                <tbody className="text-center">
                  <tr className=" flex-row p-4">
                    <td className="border-borderbg border-2 w-1/2">Model</td>
                    <td className="border-borderbg border-2 w-1/2">
                      {cars_info[selectedCar].model}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2 ">Mark</td>
                    <td className="border-borderbg border-2 ">
                      {cars_info[selectedCar].mark}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2">Year</td>
                    <td className="border-borderbg border-2">
                      {cars_info[selectedCar].Year}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2">Doors</td>
                    <td className="border-borderbg border-2">
                      {cars_info[selectedCar].Doors}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2">AC</td>
                    <td className="border-borderbg border-2">
                      {cars_info[selectedCar].AC}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2">Trasmission</td>
                    <td className="border-borderbg border-2">
                      {cars_info[selectedCar].Trasmission}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderbg border-2">Fuel</td>
                    <td className="border-borderbg border-2">
                      {cars_info[selectedCar].Fuel}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button className=" justify-center bg-main w-full text-xl text-white p-4 hover:shadow-main shadow-main hover:shadow-lg shadow-sm transition-all duration-500">
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
        <div></div>
        {/* </div> */}
      </section>
    </>
  );
}
export function SaveBig() {
  return (
    <>
      <section className="mt-[40vh]">
        <div className="bg-[#2D2D2D] flex text-center flex-col justify-center gap-5 h-[25vh]">
          <div className="text-white font-bold text-6xl">
            Save big with our cheap car rental!
          </div>
          <div className="text-white text-2xl">
            Top Airports. Local Suppliers.{" "}
            <span className="text-main">24/7</span> Support.
          </div>
        </div>
      </section>
    </>
  );
}
