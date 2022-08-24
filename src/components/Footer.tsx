import React from "react";

export const Footer = () => {
  const data = [
    {
      title: "Resources",
      item1: {
        title: "Help",
        link: "#",
      },
      item2: {
        title: "Privacy",
        link: "#",
      },
    },

    {
      title: "Open Source",
      item1: {
        title: "Contribute",
        link: "https://github.com/hyamero/marbre-landing",
      },
      item2: {
        title: "Bug Report",
        link: "https://github.com/hyamero/marbre-landing/issues",
      },
      item3: {
        title: "Feature Request",
        link: "https://github.com/hyamero/marbre-landing/issues",
      },
    },

    {
      title: "Contact",
      item1: {
        title: "Github",
        link: "https://github.com/hyamero",
      },
      item2: {
        title: "Twitter",
        link: "https://twitter.com/dalehyan",
      },
      item3: {
        title: "Instagram",
        link: "https://www.instagram.com/dale.hyamero/?hl=en",
      },
    },
  ];

  return (
    <footer className="w-full bg-[#161616] pt-16 pb-28">
      <div className="mx-auto flex w-[80%] flex-col justify-between gap-10 whitespace-nowrap lg:flex-row lg:gap-40 xl:gap-96">
        <div className="text-white">
          <p className="block font-fogtwo text-3xl font-medium sm:text-4xl">
            2022 Marbe Doré Inc.
          </p>
          <p className="text-xl font-medium">
            Made by &nbsp;
            <a href="https://github.com/hyamero" className="text-gold">
              hyamero
            </a>
            .
          </p>
        </div>

        <div className="flex w-full justify-between">
          {data.map((data, i) => {
            const { title, item1, item2, item3 } = data;

            return (
              <div key={i} className="space-y-2 text-base">
                <h3 className="font-medium text-white">{title}</h3>
                <ul className=" flex flex-col space-y-2 font-normal text-gray-300 [&>li>a:hover]:text-gray-400 [&>li>a:hover]:transition-all">
                  <li>
                    <a target="_blank" rel="noreferrer" href={item1.link}>
                      {item1.title}
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href={item2.link}>
                      {item2.title}
                    </a>
                  </li>
                  {item3 && (
                    <li>
                      <a target="_blank" rel="noreferrer" href={item3.link}>
                        {item3.title}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
