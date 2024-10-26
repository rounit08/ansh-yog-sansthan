import { useRef, useState, useEffect } from "react";
import "./ImageGallery.css";
import image1 from "../../../public/images/galleryImages/image1.jpg";
import image2 from "../../../public/images/galleryImages/image2.jpg";
import image3 from "../../../public/images/galleryImages/image3.jpg";
import image4 from "../../../public/images/galleryImages/image4.jpg";
import image5 from "../../../public/images/galleryImages/image5.jpg";
import image6 from "../../../public/images/galleryImages/image6.jpg";
import image7 from "../../../public/images/galleryImages/image7.jpg";
import image8 from "../../../public/images/galleryImages/image8.jpg";
import image9 from "../../../public/images/galleryImages/image9.jpg";
import image10 from "../../../public/images/galleryImages/image10.jpg";
import image11 from "../../../public/images/galleryImages/image11.jpg";
import image12 from "../../../public/images/galleryImages/image12.jpg";
import image13 from "../../../public/images/galleryImages/image13.jpg";
import image14 from "../../../public/images/galleryImages/image14.jpg";
import image15 from "../../../public/images/galleryImages/image15.jpg";
import image16 from "../../../public/images/galleryImages/image16.jpg";
import image17 from "../../../public/images/galleryImages/image17.jpg";
import image18 from "../../../public/images/galleryImages/image18.jpg";
import image19 from "../../../public/images/galleryImages/image19.jpg";
import image20 from "../../../public/images/galleryImages/image20.jpg";
import image21 from "../../../public/images/galleryImages/image21.jpg";
import image22 from "../../../public/images/galleryImages/image22.jpg";
import image23 from "../../../public/images/galleryImages/image23.jpg";
import image24 from "../../../public/images/galleryImages/image24.jpg";
import image25 from "../../../public/images/galleryImages/image25.jpg";
import image26 from "../../../public/images/galleryImages/image26.jpg";
import image27 from "../../../public/images/galleryImages/image27.jpg";
import image28 from "../../../public/images/galleryImages/image28.jpg";
import image29 from "../../../public/images/galleryImages/image29.jpg";
import image30 from "../../../public/images/galleryImages/image30.jpg";
import image31 from "../../../public/images/galleryImages/image31.jpg";
import image32 from "../../../public/images/galleryImages/image32.jpg";
import image33 from "../../../public/images/galleryImages/image33.jpg";
import image34 from "../../../public/images/galleryImages/image34.jpg";
import image35 from "../../../public/images/galleryImages/image35.jpg";
import image36 from "../../../public/images/galleryImages/image36.jpg";
import image37 from "../../../public/images/galleryImages/image37.jpg";
import image38 from "../../../public/images/galleryImages/image38.jpg";
import image39 from "../../../public/images/galleryImages/image39.jpg";
import image40 from "../../../public/images/galleryImages/image40.jpg";
import image41 from "../../../public/images/galleryImages/image41.jpg";
import image42 from "../../../public/images/galleryImages/image42.jpg";
import image43 from "../../../public/images/galleryImages/image43.jpg";
import image44 from "../../../public/images/galleryImages/image44.jpg";
import image45 from "../../../public/images/galleryImages/image45.jpg";
import image46 from "../../../public/images/galleryImages/image46.jpg";
import image47 from "../../../public/images/galleryImages/image47.jpg";
import image48 from "../../../public/images/galleryImages/image48.jpg";
import image49 from "../../../public/images/galleryImages/image49.jpg";
import image50 from "../../../public/images/galleryImages/image50.jpg";
import image51 from "../../../public/images/galleryImages/image51.jpg";
import image52 from "../../../public/images/galleryImages/image52.jpg";
import image53 from "../../../public/images/galleryImages/image53.jpg";
import image54 from "../../../public/images/galleryImages/image54.jpg";
import image55 from "../../../public/images/galleryImages/image55.jpg";
import image56 from "../../../public/images/galleryImages/image56.jpg";
import image57 from "../../../public/images/galleryImages/image57.jpg";
import image58 from "../../../public/images/galleryImages/image58.jpg";
import image59 from "../../../public/images/galleryImages/image59.jpg";
import image60 from "../../../public/images/galleryImages/image60.jpg";
import image61 from "../../../public/images/galleryImages/image61.jpg";
import image62 from "../../../public/images/galleryImages/image62.jpg";
import image63 from "../../../public/images/galleryImages/image63.jpg";
import image64 from "../../../public/images/galleryImages/image64.jpg";
import image65 from "../../../public/images/galleryImages/image65.jpg";
import image66 from "../../../public/images/galleryImages/image66.jpg";
import image67 from "../../../public/images/galleryImages/image67.jpg";
import image68 from "../../../public/images/galleryImages/image68.jpg";
import image69 from "../../../public/images/galleryImages/image69.jpg";
import image70 from "../../../public/images/galleryImages/image70.jpg";
import image71 from "../../../public/images/galleryImages/image71.jpg";
import image72 from "../../../public/images/galleryImages/image72.jpg";
import image73 from "../../../public/images/galleryImages/image73.jpg";
import image74 from "../../../public/images/galleryImages/image74.jpg";
import image75 from "../../../public/images/galleryImages/image75.jpg";
import image76 from "../../../public/images/galleryImages/image76.jpg";
import image77 from "../../../public/images/galleryImages/image77.jpg";
import image78 from "../../../public/images/galleryImages/image78.jpg";
import image79 from "../../../public/images/galleryImages/image79.jpg";
import image80 from "../../../public/images/galleryImages/image80.jpg";
import image81 from "../../../public/images/galleryImages/image81.jpg";
import image82 from "../../../public/images/galleryImages/image82.jpg";
import image83 from "../../../public/images/galleryImages/image83.jpg";
import image84 from "../../../public/images/galleryImages/image84.jpg";
import image85 from "../../../public/images/galleryImages/image85.jpg";
import image86 from "../../../public/images/galleryImages/image86.jpg";

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
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
  image69,
  image70,
  image71,
  image72,
  image73,
  image74,
  image75,
  image76,
  image77,
  image78,
  image79,
  image80,
  image81,
  image82,
  image83,
  image84,
  image85,
  image86,
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
              className={`cursor-pointer transition-transform transform rounded-lg shadow-md hover:scale-105 ${index === spotlightIndex ? "border-2 border-baseColor" : ""}`}
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
        <div className="quote-box ml-2 bg-baseColor text-white font-bold w-[500px] p-10 rounded-lg text-center text-lg md:text-2xl">
          <p className="italic"> &apos;प्रथम सेवक के रुप में मैं गोला गोकर्णनाथ के सर्वांगीण विकास के लिए निरंतर प्रतिबद्ध एवं कार्यरत हूँ, मुझे इस सम्बंध में विभिन्न सुझाव व प्रतिक्रिया भी मिलती रहती हैं इसलिए मैं आप सभी को भी आमंत्रित करता हूँ की मेरे साथ मेरी वेबसाइट एवं विभिन्न सोशल मीडिया एकाउंट से जुड़ें व गोला नगर की विकास यात्रा को सशक्त व सफल बनाने में भागीदार बनें। जय हिन्द!&apos;</p>
          <span className="text-sm md:text-lg">
            - विजय कुमार शुक्ल &apos;रिंकू&apos;
            <br />
            (अध्यक्ष, नगर पालिका परिषद, गोला गोकर्णनाथ)
          </span>
        </div>
      </div>
    </>
  );
};



export default ImageGallery;
