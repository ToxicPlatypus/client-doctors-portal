import React from "react";

const Service = ({img, title}) => {
  return (
    <div class="card lg:max-w-lg shadow-xl m-4">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt=""
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
      </div>
    </div>
  );
};

export default Service;
