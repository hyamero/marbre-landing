import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="relative z-30 m-auto flex h-[20vh] items-end justify-between bg-[#111111] px-6 pb-5 md:px-10 lg:px-20 ">
      <p className="font-fogtwo text-xl text-[#e0e0e0]">2022 Marbe Doré Inc.</p>
      <p className="text-gray-400">
        Made by{" "}
        <a
          className="font-fogtwo text-xl text-[#e0e0e0]"
          href="https://github.com/hyamero"
        >
          Dale Bañares
        </a>
      </p>
    </footer>
  );
};
