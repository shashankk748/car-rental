import React, { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

export default function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  const getQuestionClasses = (index) => {
    return `p-4 border-b-[1px] flex flex-row items-center gap-2 text-lg border-[#E5E4E2] w-full ${
      selectedQuestion === index ? "bg-main" : ""
    }`;
  };

  const getAnswerClasses = (index) => {
    return `faq-answer text-desc ${
      selectedQuestion === index
        ? "max-h-[500px] opacity-100 transition-all duration-200 ease-in-out"
        : "max-h-0 opacity-0"
    }`;
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-2/3">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="text-center w-full gap-4">
            <h1 className="text-6xl font-bold">Frequently Asked Questions</h1>
            <p className="text-desc w-2/3 mx-auto">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="w-full border-2 shadow-md hover:cursor-pointer">
            <div
              className={getQuestionClasses(1)}
              onClick={() => handleQuestionClick(1)}
            >
              <div className="flex-1">
                1. What is special about comparing rental car deals?
              </div>
              <UilAngleDown
                className={`text-main ml-auto transform ${
                  selectedQuestion === 1 ? "rotate-180" : ""
                } transition-transform duration-200 ease-in-out`}
              />
            </div>
            <div className={getAnswerClasses(1)}>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
            <div
              className={getQuestionClasses(2)}
              onClick={() => handleQuestionClick(2)}
            >
              <div className="flex-1">
                2. How do I find the car rental deals?
              </div>
              <UilAngleDown
                className={`text-main ml-auto transform ${
                  selectedQuestion === 2 ? "rotate-180" : ""
                } transition-transform duration-200 ease-in-out`}
              />
            </div>
            <div className={getAnswerClasses(2)}>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </div>
            <div
              className={getQuestionClasses(3)}
              onClick={() => handleQuestionClick(3)}
            >
              <div className="flex-1">
                3. How do I find such low rental car prices?
              </div>
              <UilAngleDown
                className={`text-main ml-auto transform ${
                  selectedQuestion === 3 ? "rotate-180" : ""
                } transition-transform duration-200 ease-in-out`}
              />
            </div>
            <div className={getAnswerClasses(3)}>
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
