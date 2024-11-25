import React from "react";
import { Receipt } from "lucide-react";
import { Link } from "lucide-react";
import { HandPlatter } from "lucide-react";

const offerbox = [
  {
    id: 1,
    icon: Receipt,
    title: "Cardano Debit-Cards",
    subtiel:
      "Cardano, simplified. The debit card that makes crypto spending easy.",
  },
  {
    id: 2,
    icon: Link,
    title: "On & Off Ramp",
    subtiel: "Fiat meets crypto, effortlessly buy, sell, and manage.",
  },
  {
    id: 3,
    icon: HandPlatter,
    title: "Solutions for business",
    subtiel:
      "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
  },
];

const Offer = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-x-6 gap-y-4">
          {offerbox.map((data) => (
            <div key={data.id} className="flex basis-20 items-start border border-transparent duration-250 transition ease-linear cursor-pointer rounded  hover:border-secondary/25 p-1 gap-x-6">
              <div className="bg-secondary rounded-[24px]  p-4">
                {<data.icon color="#fff" className="lg:size-8  size-6" />}
              </div>
              <div>
                <h3 className=" text-lg md:text-xl font-bold text-white lg:text-2xl">
                  {data.title}
                </h3>
                <p className="text-base pt-2 font-normal text-[#ADB2B1]">
                  {data.subtiel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offer;
