import React from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Form from "./Form";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Banner2></Banner2>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Form></Form>
    </div>
  );
};

export default Home;
