import FixedVideo from "./components/FixedVideo/FixedVideo";
import Footer from "./components/Footer/Footer";
import HomeIntro from "./components/homeIntro/HomeIntro";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Navbar from "./components/Navbar/Navbar";
import PressRelease from "./components/PressRelease/PressRelease";
import SocialPages from "./components/SocialPages/SocialPages";
import image1 from "../public/images/image1.jpg"
import image2 from "../public/images/image2.jpg"
import image3 from "../public/images/image3.jpg"
import image4 from "../public/images/image4.jpg"
import image5 from "../public/images/image5.jpg"
import image6 from "../public/images/image6.jpg"
import image9 from "../public/images/image65.jpg"
function App() {
 

const images = [
image6,
  image1,
  image9,
  image2,
  image3,
  image4, image5
];
  return (
    <div>
      <div className="bg-baseColor">
        <Navbar />
      </div>
      <ImageSlider images={images} />
      {/* <SparkleSection /> */}
      <HomeIntro />
      <div className="bg-gray-100">
      <ImageGallery />

      </div>
        <PressRelease />
        <FixedVideo />
        <div className="bg-gray-100">
        <SocialPages />

        </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
