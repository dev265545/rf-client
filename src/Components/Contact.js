/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.png";

import facebook from "../assets/facebook.png";

function Contact() {
  return (
    <div className=" flex flex-col gap-9 items-center justify-center   pt-24 place-items-center">
    
      <a
        href="#"
        class=" flex flex-col max-w-xs text-white bg-teal-700 p-8  shadow-lg shadow-teal-500 h-104 rounded-lg relative"
      >
        <div class="  p-4 grid grid-rows-4 gap-4 ">
          <h3 class=" flex items-center justify-center text-xl font-bold pb-2">
            Reach us At
          </h3>
          <div class=" text-md">
            <p className="text-md">support @kicksup.com</p>
            <p className="text-sm">for any technical support</p>
          </div>
          <div class=" text-md">
            info@kicksup.com
            <p className="text-sm"> for more information feedback </p>
          </div>
          <div class=" text-md">
            jobs @kicksup.com
            <p className="text-sm">to work with us </p>
          </div>
        </div>
      </a>
      <div className="font-gobold">
        Stay in touch
        <div className="grid grid-cols-3 gap-1">
          <img className="rounded-full" src={insta} />
          <img className="rounded-full" src={facebook} />
          <img className="rounded-full" src={twitter} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
