import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed left-0 top-0 m-auto flex h-full w-full flex-col justify-between py-5 px-6 md:py-10 md:px-10 lg:px-20">
      <nav className="flex w-full items-center justify-between whitespace-nowrap font-fogtwo text-lg sm:text-xl md:text-2xl [&>*]:cursor-pointer">
        <span>About</span>
        <p>Collection by Marble</p>
        <span>Collect</span>
      </nav>
      <div className="flex cursor-pointer items-center justify-between text-sm md:text-base">
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
    </div>
  );
};
