import  { useState, useEffect } from 'react';
import leftArrow from  "../../../public/svg/left-arrow.svg";
import rightArrow from "../../../public/svg/right-arrow.svg"


const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500); // Match this timeout with the CSS transition duration
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 500); // Match this timeout with the CSS transition duration
  };

  return (
    <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-cover bg-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <div >
        <button
          onClick={prevSlide}
          className='absolute  left-4 top-[40%]'
        >
          <img  src={leftArrow} alt='left arrow'  />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-[40%]'
        >
          <img src={rightArrow} alt='right arrow' />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
