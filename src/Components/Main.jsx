
import { useState } from "react";
import potato from "../assets/potato.jpg"
import potatol from "../assets/potatol.jpg"
import chilli from "../assets/chilli.jpg"
import chillil from "../assets/chillil.png"
import lemon from "../assets/lemon.jpg"
import lemonl from "../assets/lemonl.png"
import tometo from "../assets/tometo.jpg"
import tometol from "../assets/tometol.png"
import './slider.css';




import { useEffect } from "react";
const slides = [
  {
    id: 1,
    bgColor: '[#FAE743]',
    imgSrc: potato,
    name: "LAY'S® Classic Potato Chips",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    imgl:potatol
  },
  // {
  //   id: 2,
  //   bgColor: '[#DE0B27]',
  //   imgSrc: chilli,
  //   name: 'Slide 2',
  //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
  //   imgl:chillil

  // },
  {
    id: 3,
    bgColor: '[#DDE377]',
    imgSrc: lemon,
    name: "LAY'S® Limón Flavored Potato Chips",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    imgl:lemonl

  },

  {
    id: 4,
    bgColor: '[#FE734F]',
    imgSrc: tometo,
    name:"SABRITAS® Adobadas Flavored Potato Chips",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    imgl:tometol

  },

];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSecondDivVisible, setSecondDivVisibility] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide index, and loop back to the first slide if at the end
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      // Hide the second div when changing slides
      setSecondDivVisibility(false);
    }, 3000); // Change the interval as needed (e.g., 5000 milliseconds for 5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide]);

  useEffect(() => {
    // Set a timeout to show the second div after the initial animation is finished
    const timeout = setTimeout(() => {
      setSecondDivVisibility(true);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, [currentSlide]);

  return (
    <>
      {slides.map((slide, index) => (
        <>
        <div
          key={slide.id}
          className={`flex bg-${slide.bgColor} w-[100%] h-[100vh] justify-center items-center  `}
          style={{ display: index === currentSlide ? 'flex' : 'none' }}
        >
          <div className={`  rounded-[50%] animated-div ${isSecondDivVisible ? 'hidden' : 'visible'}`}>
            <img className="w-[23rem] h-[23rem] rounded-[50%]" src={slide.imgSrc} alt="" />
          </div>
          {/* <div className="m-7 w-[30rem] flex flex-col justify-center items-center">
            <h2>{slide.name}</h2>
            <p>{slide.description}</p>
            <button>Read more</button>
          </div> */}
          {/* <div className="w-[30%] h-[70vh]   ">
            <img className="w-[100%]" src={slide.imgl} alt="" />
          </div> */}
          <div
            className={`w-[30%] h-[70vh]  flex flex-col items-center  ${isSecondDivVisible ? 'visible' : 'hidden'} ${isSecondDivVisible ? 'w-[40%]' : '[40%]'}`}
          >
          <p className={`text-2xl font-semibold text-${slide.bgColor}`}>{slide.name}</p>
            <img className="w-[100%] rounded-[50%]"  src={slide.imgl} alt="" />
          </div>
        </div>
      
        </>
      ))}
    </>
  );

}

export default Main




