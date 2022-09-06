import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      class="p-10"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="footer">
        <div>
          <span class="footer-title">Services</span>
          <p className="">Emergency Checkup</p>
          <p className="">Monthly Checkup</p>
          <p className="">Weekly Checkup</p>
          <p className="">Deep Checkup</p>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <p className="">Fluoride Treatment</p>
          <p className="">Cavity Filling</p>
          <p className="">Teath Whitening</p>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <p className="">New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8">
        <p>Copyright © 2022 - All right reserved by Rafid Rabbi</p>
      </div>
    </footer>
  );
};

export default Footer;
