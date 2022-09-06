import React from "react";
import quote from "../../assets/icons/quote.svg";
import p1 from "../../assets/images/people1.png";
import p2 from "../../assets/images/people2.png";
import p3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      place: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: p1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      place: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: p2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      place: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: p3,
    },
  ];
  return (
    <section className="mx-4 lg:mx-12 md:mx-8">
      <div className="flex justify-between my-24">
        <div>
          <p className="text-[#19D3AE] text-xl font-bold">Testimonial</p>
          <p className="text-4xl	">What Our Patients Says</p>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
