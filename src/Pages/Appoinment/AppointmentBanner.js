import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bannerImage from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          class="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You've selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
