import React from "react";
import Container from "./Container";
import { Link, Location } from "iconsax-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary p-5">
      <Container>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center">
          <div className="text-white flex items-center gap-1">
            <Location className="size-5 md:size-6" color="currentColor" />
            <h1 className="font-semibold text-sm md:text-md">
              ঠিকানা: লালমাটিয়া, মোহাম্মদপুর, ঢাকা
            </h1>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="flex items-center gap-1 text-sm md:text-md hover:text-primary transition-all duration-300"
                >
                  <Link className="size-4" color="currentColor" />
                  <span>Privacy Policy</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-and-conditions"
                  href=""
                  className="flex items-center gap-1 text-sm md:text-md hover:text-primary transition-all duration-300"
                >
                  <Link className="size-4" color="currentColor" />
                  <span>Terms & Conditions</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
