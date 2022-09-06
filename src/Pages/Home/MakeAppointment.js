import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section style={{
        background:`url(${appointment})`
    }} className="flex px-12 justify-center items-center my-32">
      <div className="lg:flex-1">
        <img className="hidden lg:block mt-[-140px]" src={doctor} alt="" />
      </div>
      <div className="lg:flex-1 text-white p-4">
        <p className="lg:text-xl">Appointment</p>
        <p className="text-2xl lg:text-4xl py-4 font-bold">Make an appointment Today</p>
        <p className="text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary my-4">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
