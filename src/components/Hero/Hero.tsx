import React from 'react';
import { FiArrowDownRight } from "react-icons/fi";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className="h-screen pl-28 mt-24 flex-col justify-center bg-black">
      <h1 className="text-9xl font-semibold mb-16 tracking-normal">
        <span>Unlimited Support</span>
        <span className="text-9xl text-orango">.</span>
        <span>
          <br />
          One monthly fee
        </span>
        <span className="text-9xl text-orango">.</span>
      </h1>
      <p className="text-6xl font-light mb-10">
        <span>&zwj;</span>
        Introducing -{' '}
        <a href="#works" className="text-6xl font-semibold text-orango">
          The Design Subscription
        </a>
      </p>
      <p className="text-3xl font-light mb-10">
        <span>
          No need to hire an agency or a full-time designer. <br />
          Get top-quality designs when you need them. Pause or cancel <br /> anytime. Easy.
        </span>
      </p>
      <div className="flex mb-4">
        <a href="#works" className="flex text-xl text-white hover:text-orango font-medium">
            EXPLORE OUR WORK<span className="ml-3 text-xl text-white hover:text-orango"><FiArrowDownRight size={28} /></span>
        </a>
        {/* <div className="social-links-wrapper ml-4">
          <ul role="list" className="flex justify-center">
            <li className="mr-2">
              <a
                href="https://www.linkedin.com/company/astervision/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
              >
                <div></div>
              </a>
            </li>
            <li className="mr-2">
              <a
                href="https://www.instagram.com/thehouseofaster/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
              >
                <div></div>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;