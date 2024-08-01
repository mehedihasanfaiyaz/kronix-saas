import {
  FaCircleArrowRight,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div>
      <div className="-my-48 rounded-[2rem] bg-background text-center text-white">
        <div className="">
          <h1 className="mx-auto pt-16 text-4xl font-bold tracking-tighter md:text-7xl">
            Become part of the
            <br /> design revolution
          </h1>
          <div className="glow absolute left-1/2 z-10 opacity-20"></div>
          <p className="pt-4 md:pt-8 md:text-lg">
            Jump on a membership and start <br /> requesting designs right away!
          </p>
          <Button
            text={
              <a href="#pricing" className="flex items-center">
                See Pricing <FaCircleArrowRight className="ml-3" />
              </a>
            }
            className="mx-auto mt-12 h-14 w-[185px]"
          />
        </div>
      </div>
      <div className="mx-8 text-white">
        <div className="mt-72">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex-col">
              <h2 className="text-3xl font-bold">
                Kro<span className="text-primary">nix</span>
              </h2>
              <p className="pt-8 font-light md:max-w-[311px]">
                Kronix - the leading digital agency based in the UK, working
                with top-tier clients, from start-ups to enterprises.
              </p>
            </div>
            <div className="flex flex-col gap-4 font-light">
              <a
                href="mailto:info@kronix.com"
                className="flex items-center gap-4"
              >
                <HiOutlineMail size={20} /> info@kronix.com
              </a>
              <a href="tel:(001) 1231 3435" className="flex items-center gap-4">
                <HiOutlinePhone size={20} />
                (001) 1231 3435
              </a>
              <li className="flex items-center gap-5">
                <TiSocialFacebook
                  size={20}
                  className="cursor-pointer rounded-full bg-primary p-0.5 text-background transition-all hover:opacity-60"
                />
                <FaInstagram
                  size={20}
                  className="cursor-pointer transition-all hover:opacity-60"
                />
                <FaLinkedinIn
                  size={20}
                  className="cursor-pointer transition-all hover:opacity-60"
                />
                <FaDribbble
                  size={20}
                  className="cursor-pointer transition-all hover:opacity-60"
                />
              </li>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-20 h-px w-11/12 border-0 bg-[#404040] md:w-full"></hr>
      <div className="mx-8 flex flex-col justify-between gap-10 py-8 font-light text-white md:flex-row">
        <ul className="flex gap-10">
          <a href="#process">Process</a>
          <a href="#benefits">Benefits</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio </a>
          <a href="#faq">FAQ</a>
        </ul>
        <a href="mailto:nazmulshanto1122@gmail.com">
          © 2023 shantogfx - All Right Reserved
        </a>
      </div>
    </div>
  );
}