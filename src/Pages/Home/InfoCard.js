import React from "react";


const InfoCard = ({img, title, text, bg}) => {
  return (
    <div className={`card py-4 lg:max-w-lg lg:card-side shadow-xl ${bg}`}>
      <figure>
        <img className="px-8" src={img} alt="Album" />
      </figure>
      <div class="card-body text-white sm:text-center">
        <h2 class="card-title sm:justify-center">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
