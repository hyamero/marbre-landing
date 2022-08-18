import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HandScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);

  function scrollTrig(trigger: string, start: string, scrub: number | boolean) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        scrub: scrub,
      },
    });

    return tl;
  }

  useEffect(() => {
    /**
     * TL1
     */
    const tl = scrollTrig(".hand1", "top center", false);
    const handTl = scrollTrig(".hand1", "top center", 1);

    handTl.to(".hand1", {
      y: -150,
    });

    tl.to(".hand1", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      duration: 0.8,
    })
      .fromTo(
        ".sec1-p-stagger",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
        "<0.4"
      )
      .fromTo(
        ".sec1-num",
        {
          scale: 1.4,
          opacity: 0,
        },
        { scale: 1, opacity: 1 },
        "<0.3"
      )
      .fromTo(
        ".sec1-title",
        {
          opacity: 0,
          x: 30,
        },
        { opacity: 1, x: 0 },
        "<0.3"
      );

    /**
     * TL2
     */

    const tl2 = scrollTrig(".hand2", "top center", false);
    const handTl2 = scrollTrig(".hand2", "top center", 1);

    handTl2.to(".hand2", {
      y: -150,
    });

    tl2
      .to(".hand2", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        duration: 0.8,
      })
      .fromTo(
        ".sec2-p-stagger",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
        "<0.4"
      )
      .fromTo(
        ".sec2-num",
        {
          scale: 1.4,
          opacity: 0,
        },
        { scale: 1, opacity: 1 },
        "<0.3"
      )
      .fromTo(
        ".sec2-title",
        {
          opacity: 0,
          x: -30,
        },
        { opacity: 1, x: 0 },
        "<0.3"
      );
  }, []);

  return <>{children}</>;
};

export default HandScrollAnimation;
