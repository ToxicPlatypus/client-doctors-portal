import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-12">
      <InfoCard
        text={"Lorem Ipsum is simply dummy text"}
        img={clock}
        title={"Opening Hours"}
        bg="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        text={"Brooklyn, NY 10036, United States"}
        img={marker}
        title={"Visit our location"}
        bg="bg-[#3A4256]"
      ></InfoCard>
      <InfoCard
        text={"+000 123 456789"}
        img={phone}
        title={"Contact us now"}
        bg="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
