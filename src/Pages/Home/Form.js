import React from "react";
import appointment from "../../assets/images/appointment.png";

const Form = () => {
  return (
    <div
      className="items-center text-center py-12 my-24"
      style={{ background: `url(${appointment})` }}
    >
      <p className="text-white text-xl">Contact Us</p>
      <p className="text-white text-2xl lg:text-4xl mb-6">
        Stay connected with us
      </p>
      <input
        type="email"
        placeholder="Email Address"
        class="input w-full max-w-xs my-4"
      />
      <br />
      <input type="text" placeholder="Subject" class="input w-full max-w-xs" />
      <br />
      <textarea
        class="textarea w-full max-w-xs my-4"
        placeholder="Your message"
      ></textarea>
      <br />
      <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
        Submit
      </button>
    </div>
  );
};

export default Form;
