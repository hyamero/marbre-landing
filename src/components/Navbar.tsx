import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed left-0 top-0 z-20 m-auto  flex  w-full items-center justify-between whitespace-nowrap px-6 pt-5 font-fogtwo text-lg sm:text-xl md:px-10 md:pt-10 md:text-2xl lg:px-20 [&>*]:cursor-pointer">
      <span>About</span>
      <p>Collection by Marble</p>
      <span>Collect</span>
    </nav>
  );
};

export const Socials = () => {
  return (
    <div className="fixed left-0 bottom-0 z-20 m-auto flex w-full cursor-pointer items-center justify-between px-6 pb-5 text-sm md:px-10 md:pb-10 md:text-base lg:px-20">
      <p>hello@marbredore.com</p>
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
