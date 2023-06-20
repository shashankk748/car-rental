import "./App.css";
import Navigation from "./Components/home/Navigation";
import Home from "./Components/home/Home";
import BookNow from "./Components/home/BookNow";
import PlanTrip from "./Components/home/PlanTrip";
import CarShow from "./Components/home/CarShow";
// import { useRef, useEffect } from "react";
// import { hover } from "@testing-library/user-event/dist/hover";

function App() {
  // const pointer = useRef();

  // useEffect(() => {
  //   document.onmousemove = (e) => {
  //     // let x = pointer.current.offsetLeft;
  //     // let y = pointer.current.offsetTop;

  //     let X = e.clientX;
  //     let Y = e.clientY;

  //     // let h = 10;
  //     // let dx = (h * (X - x)) / ((X - x) ** 2 + (y - Y) ** 2) ** 0.5;
  //     // let dy = (h * (Y - y)) / ((X - x) ** 2 + (y - Y) ** 2) ** 0.5;

  //     pointer.current.style.top = Y + "px";
  //     pointer.current.style.left = X + "px";
  //     pointer.current.style.transform = "translate(-50%, -50%)";
  //   };
  // }, []);

  return (
    <div className="App ">
      {/* <div
        ref={pointer}
        className="absolute w-16 h-16 border-2 border-red-400 rounded-full transition-all duration-500"
      ></div> */}
      <div id="home">
        <img
          src="https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png"
          alt="home"
          className="absolute -z-10 right-0 top-0"
        />
        <Navigation />
        <Home />
        <BookNow />
        <PlanTrip />
        <CarShow />
      </div>
    </div>
  );
}

export default App;
