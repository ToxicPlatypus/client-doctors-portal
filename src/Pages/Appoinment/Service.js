import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div class="card shadow-xl lg:max-w-lg text-center items-center">
      <div class="card-body">
        <h2 class="text-2xl">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date.</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "slots" : "slot"} Available.
        </p>
        <div>
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
