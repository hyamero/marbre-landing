import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="nav fixed left-0 top-0 z-20 m-auto flex  w-full  items-center justify-between whitespace-nowrap px-6 pt-5 font-fogtwo text-lg text-[#111111] sm:text-xl md:px-10 md:pt-10 md:text-2xl lg:px-20 [&>*]:cursor-pointer">
      <span>About</span>
      <p className="mix-blend-difference">Collection by Marble</p>
      <span>Collect</span>
    </nav>
  );
};

export const Socials = () => {
  return (
    <div className="nav fixed left-0 bottom-0 z-20 m-auto flex w-full items-center justify-between px-6 pb-5 text-sm text-[#111111] md:px-10 md:pb-10 md:text-base lg:px-20">
      <p className="cursor-pointer">hello@marbredore.com</p>
      <ul className="flex items-center gap-2">
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>{"-"}</li>
        <li>
          <a href="#">Unslpash</a>
        </li>
      </ul>
    </div>
  );
};
