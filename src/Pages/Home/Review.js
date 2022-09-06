import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
        <div className="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <p className="text-xl">{review.name}</p>
            <p className="text-xl">{review.place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
