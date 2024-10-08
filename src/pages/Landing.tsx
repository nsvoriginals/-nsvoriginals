import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TypingEffect from "@/components/Typing";

gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {
 useGSAP(() => {
    gsap.to("#page2 h1", {
      x: "-80%", 
// Use 'x' for horizontal translation instead of 'transform'
      scrollTrigger: {
        trigger: "#page2",
        scroller:"#main",
        markers: true,
        start: "top 0%", // Start animation when #page2 is at the top
        end: "top -100%", // End when #page2 reaches the top of the viewport
        scrub: 1.4,
        pin: true,
      },
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="w-full h-screen overflow-x-hidden font-caleb" id="main">

      <div id="page1" className="w-full h-full bg-green-400 text-[10rem] text-center flex flex-col">
        <h1 className="text-8xl mt-24">Hi , Im @nsvoriginals</h1>
      <TypingEffect text="Iam a Web Developer "  typingSpeed={300} />
      </div>
      <div
        id="page2"
        className="w-full h-full bg-green-400 font-Caleb flex justify-start items-center text-start"
      >
        <h1 className="text-[55rem] font-Caleb text-black">EXPERIENCE</h1>
      </div>
      <div id="page3" className="w-full h-full bg-green-400">
        <h1 className="text-[12rem] text-center">THE ART OF WEB DEVELOPMENT</h1>
      </div>
      <div id="page4" className="w-full h-full bg-green-400 flex flex-col ">
       <h1 className="text-[10rem] text-center">SKILLS</h1>
      </div>
    </div>
  );
};