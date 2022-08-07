import { gsap } from "gsap";
import { useEffect, useState } from "react";

export const Loader = ({}) => {
  const [unmount, setUnmount] = useState(false);

  const loaderTl = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: "power3.inOut",
    });

    tl.to(".loader-up", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    }).to(
      ".loader-down",
      {
        duration: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      "<"
    );
  };

  const loaderTlTrail = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: "power3.inOut",
    });

    tl.to(".loader-up-gold", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    })
      .to(
        ".loader-down-gold",
        {
          duration: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        "<"
      )
      .to(
        "body",
        {
          overflowY: "auto",
        },
        "-=0.3"
      );
  };

  const contentTl = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: "power2.inOut",
    });

    tl.fromTo(
      ".h1-anim",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        skewY: "-5deg",
        y: 20,
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 0.8,
        skewY: "0deg",
        stagger: 0.3,
        y: 0,
      }
    )
      .fromTo(
        ".head-img",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          duration: 1.3,
          x: 0,
        },
        "-=0.5"
      )
      .fromTo(
        ".p-stagger",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
        "-=0.7"
      )
      .fromTo(
        ".nav",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          onComplete: () => setUnmount(true),
        },
        "<"
      );
  };

  useEffect(() => {
    const master = gsap
      .timeline()
      .add(loaderTl)
      .add(loaderTlTrail, ">0.2")
      .add(contentTl, ">0.5");
  }, []);

  // scroll to top before page reload
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!unmount && (
        <>
          <div className="loader-down black-full [clipPath:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]" />
          <div className="loader-down-gold gold-full [clipPath:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]" />
        </>
      )}
    </>
  );
};
