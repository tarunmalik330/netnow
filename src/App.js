
import './App.css';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import BackToTop from "./assets/images/png/BackToTop.webp"

function App() {
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <AboutUs />
        <Roadmap />
        <Tokenomics />
      </div>
      <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-[#020202] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-30" : "hidden"}>
        <img src={BackToTop} alt='BackToTop' />
      </div>
    </>
  );
}

export default App;
