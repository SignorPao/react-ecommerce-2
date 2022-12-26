import React from "react";

// import links
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

// import react-tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// import logo
import Logo from "../assets/logo.png";

// import icons
import { GoMail } from "react-icons/go";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// import payment icons
import { Visa, Maestro, Mastercard, Amex, Western } from "react-pay-icons";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-4 lg:py-12">
      <div className="container mx-auto">
        {/* footer top */}
        <div className="border-b border-white/20 py-8 flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:gap-x-8">

          {/* logo & desc */}
          <div className="lg:flex-[30%] flex flex-col gap-y-3">
            <Link to={"/#home"}>
              <div className="flex items-center">
                <img src={Logo} alt="logo" className="w-[30px]" />{" "}
                <span className="font-logo font-bold text-xl lg:text-2xl text-accent">
                  React Ecommerce
                </span>
              </div>
            </Link>

            <p className="text-[10px] lg:text-xs text-white/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              corporis aspernatur harum, ea quidem veritatis impedit facilis
              voluptate odio aperiam repellat asperiores, eligendi, beatae
              voluptas id voluptatum non dolor autem.
            </p>

            <div className="flex gap-x-2 mt-4">
              <a href="#!" id="visa">
                <Visa style={{ width: 40 }} />
              </a>
              <Tooltip
                anchorId="visa"
                content="Visa"
                place="bottom"
                className="tooltip"
              />

              <a href="#!" id="maestro">
                <Maestro style={{ width: 40 }} />
              </a>
              <Tooltip
                anchorId="maestro"
                content="Maestro"
                place="bottom"
                className="tooltip"
              />

              <a href="#!" id="mc">
                <Mastercard style={{ width: 40 }} />
              </a>
              <Tooltip
                anchorId="mc"
                content="Master Card"
                place="bottom"
                className="tooltip"
              />

              <a href="#!" id="amex">
                <Amex style={{ width: 40 }} />
              </a>
              <Tooltip
                anchorId="amex"
                content="American Express"
                place="bottom"
                className="tooltip"
              />

              <a href="#!" id="western">
                <Western style={{ width: 40 }} />
              </a>
              <Tooltip
                anchorId="western"
                content="Western Union"
                place="bottom"
                className="tooltip"
              />
            </div>
          </div>

          {/* quick links */}
          <div className="lg:flex-[20%] flex flex-col gap-y-4 text-xs lg:text-sm">
            <h6 className="uppercase">Quick links</h6>
            <ul className="text-white/50 capitalize">
              <li className="hover:text-white transition duration-300 max-w-fit">
                <Link to={"/#home"}>Home</Link>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="login">Login</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Order status</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Gift cards</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Shipping + Returns</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Size Guides</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Partner Program</NavLink>
              </li>
            </ul>
          </div>

          {/* about us */}
          <div className="lg:flex-[20%] flex flex-col gap-y-4 text-xs lg:text-sm">
            <h6 className="uppercase">About us</h6>
            <ul className="text-white/50 capitalize">
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">About react ecommerce</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Explore blog</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Locations</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Collaborations</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Careers</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Interns</NavLink>
              </li>
              <li className="hover:text-white transition duration-300 max-w-fit">
                <NavLink to="#!">Technology</NavLink>
              </li>
            </ul>
          </div>

          {/* subscribe & address & socials */}
          <div className="lg:flex-[30%] w-full flex flex-col gap-y-4">
            {/* subscribe */}
            <div className="flex flex-col gap-y-3">
              <h6 className="uppercase text-xs lg:text-sm">
                Sign up for our newsletter
              </h6>
              <div className="flex gap-x-1 border-b w-full">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full border-none outline-none focus:ring-0 bg-transparent placeholder-white/30 focus:invalid:text-red-500"
                />
                <button
                  type="submit"
                  className="text-3xl text-white/50 transition duration-300 hover:text-white outline-none"
                >
                  <GoMail />
                </button>
              </div>
            </div>

            {/* address */}
            <div className="flex flex-col gap-y-3">
              <h6 className="uppercase text-xs lg:text-sm">Address</h6>
              <div className="flex flex-col text-xs lg:text-sm text-white/60">
                <p>(716) 354-5135</p>
                <p>10625 Upper Gulf Hill Rd</p>
                <p>Randolph, New York(NY), 14772</p>
              </div>
            </div>

            {/* socials */}
            <div className="flex gap-x-2 text-white/60 text-xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                id="facebook"
              >
                <FaFacebook />
              </a>
              <Tooltip
                anchorId="facebook"
                content="Facebook"
                place="bottom"
                className="tooltip"
              />

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                id="instagram"
              >
                <FaInstagram />
              </a>
              <Tooltip
                anchorId="instagram"
                content="Instagram"
                place="bottom"
                className="tooltip"
              />

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                id="twitter"
              >
                <FaTwitter />
              </a>
              <Tooltip
                anchorId="twitter"
                content="Twitter"
                place="bottom"
                className="tooltip"
              />

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
                id="youtube"
              >
                <FaYoutube />
              </a>
              <Tooltip
                anchorId="youtube"
                content="Youtube"
                place="bottom"
                className="tooltip"
              />
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex flex-col lg:flex-row gap-y-2 lg:justify-between text-xs py-8">
          <div className="text-center lg:text-left">
            &copy; {year} React Ecommerce
          </div>

          <div className="flex flex-row items-center justify-center text-[10px]">
            <a
              href="#!"
              className="border-solid border-white/80 border-r-[1px] px-2 hover:text-white transition duration-300"
            >
              Privacy & Cookies
            </a>
            <a
              href="#!"
              className="border-solid border-white/80 border-r-[1px] px-2 hover:text-white transition duration-300"
            >
              FAQs
            </a>
            <a
              href="#!"
              className="px-2 border-white/80 hover:text-white transition duration-300"
            >
              Accessibility
            </a>
          </div>

          <div className="text-center lg:text-left">
            Created by{" "}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              @signorPao
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
