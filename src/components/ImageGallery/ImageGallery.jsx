import { useRef, useState, useEffect } from "react";
import "./ImageGallery.css";
import image1 from "../../../public/images/AnshYogaSansthan/images/image1.jpg";
import image2 from "../../../public/images/AnshYogaSansthan/images/image2.jpg";
import image3 from "../../../public/images/AnshYogaSansthan/images/image3.jpg";
import image4 from "../../../public/images/AnshYogaSansthan/images/image4.jpg";
import image5 from "../../../public/images/AnshYogaSansthan/images/image5.jpg";
import image6 from "../../../public/images/AnshYogaSansthan/images/image6.jpg";
import image7 from "../../../public/images/AnshYogaSansthan/images/image7.jpg";
import image8 from "../../../public/images/AnshYogaSansthan/images/image8.jpg";
import image9 from "../../../public/images/AnshYogaSansthan/images/image9.jpg";
import image10 from "../../../public/images/AnshYogaSansthan/images/image10.jpg";
import image11 from "../../../public/images/AnshYogaSansthan/images/image11.jpg";
import image12 from "../../../public/images/AnshYogaSansthan/images/image12.jpg";
import image13 from "../../../public/images/AnshYogaSansthan/images/image13.jpg";
import image14 from "../../../public/images/AnshYogaSansthan/images/image14.jpg";
import image15 from "../../../public/images/AnshYogaSansthan/images/image15.jpg";
import image16 from "../../../public/images/AnshYogaSansthan/images/image16.jpg";
import image17 from "../../../public/images/AnshYogaSansthan/images/image17.jpg";
import image18 from "../../../public/images/AnshYogaSansthan/images/image18.jpg";
import image19 from "../../../public/images/AnshYogaSansthan/images/image19.jpg";
import image20 from "../../../public/images/AnshYogaSansthan/images/image20.jpg";
import image21 from "../../../public/images/AnshYogaSansthan/images/image21.jpg";
import image22 from "../../../public/images/AnshYogaSansthan/images/image22.jpg";
import image23 from "../../../public/images/AnshYogaSansthan/images/image23.jpg";
import image24 from "../../../public/images/AnshYogaSansthan/images/image24.jpg";
import image25 from "../../../public/images/AnshYogaSansthan/images/image25.jpg";
import image26 from "../../../public/images/AnshYogaSansthan/images/image26.jpg";
import image27 from "../../../public/images/AnshYogaSansthan/images/image27.jpg";
import image28 from "../../../public/images/AnshYogaSansthan/images/image28.jpg";
import image29 from "../../../public/images/AnshYogaSansthan/images/image29.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
];

const ImageGallery = () => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [manualNavigation, setManualNavigation] = useState(false);
  const thumbnailRefs = useRef([]);

  const handleNext = () => {
    setSpotlightIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      if (manualNavigation) {
        scrollToThumbnail(newIndex);
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setSpotlightIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      if (manualNavigation) {
        scrollToThumbnail(newIndex);
      }
      return newIndex;
    });
  };

  const scrollToThumbnail = (index) => {
    if (thumbnailRefs.current[index]) {
      thumbnailRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleThumbnailClick = (index) => {
    setSpotlightIndex(index);
    setManualNavigation(true); // User manually navigated
    scrollToThumbnail(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div className="custom-container h-1 relative bottom-0 bg-baseColor">
        <p className="absolute text-base md:text-xl font-serif bg-baseColor rounded-b-xl font-medium text-white px-10 py-5 ">
          Image Gallery
        </p>
      </div>

      <div className="custom-container mt-20 flex flex-col md:flex-row items-center p-4">
        <div className="relative mb-4">
          <button
            className="h-10 w-10 absolute left-[-20px] top-[50%] z-10 p-2 text-white bg-black rounded-full focus:outline-none"
            onClick={handlePrev}
          >
            &#60;
          </button>
          <img
            src={images[spotlightIndex]}
            alt="Spotlight"
            className="hover:scale-[1.01] cursor-pointer w-[700px] h-[500px] object-cover rounded-lg shadow-lg border-4 border-baseColor"
          />
          <button
            className="h-10 w-10 absolute right-[-20px] top-[50%] z-10 p-2 text-white bg-black rounded-full focus:outline-none"
            onClick={handleNext}
          >
            &#62;
          </button>
        </div>

        <div className="gallery hidden md:flex md:flex-col items-center gap-3 w-[120px] max-h-[500px] overflow-y-scroll space-x-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform transform rounded-lg shadow-md hover:scale-105 ${
                index === spotlightIndex ? "border-2 border-baseColor" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
              ref={(el) => (thumbnailRefs.current[index] = el)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="quote-box ml-2 w-auto bg-baseColor text-white font-semibold md:w-[500px] p-10 rounded-lg text-center text-lg md:text-2xl">
          <p className="italic">
            {" "}
            &apos;योगश्चित्तवृत्तिनिरोधः&apos; यानी मन की चंचल वृत्तियों को
            रोकना ही योग है। अभ्यास और वैराग्य से मन स्थिर होता है। तप,
            स्वाध्याय और ईश्वरप्रणिधान के जरिए व्यक्ति आत्मा की गहराई तक पहुंच
            सकता है।
          </p>
          <span className="text-sm md:text-lg">- महर्षि पतंजलि</span>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
