import Footer from "./components/Footer/Footer";
import HomeIntro from "./components/homeIntro/HomeIntro";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Navbar from "./components/Navbar/Navbar";
import image1 from "../public/images/AnshYogaSansthan/sliderImages/image1.jpg";
import image2 from "../public/images/AnshYogaSansthan/sliderImages/image2.jpg";
import image3 from "../public/images/AnshYogaSansthan/sliderImages/image3.jpg";
import image4 from "../public/images/AnshYogaSansthan/sliderImages/image4.jpg";
import image5 from "../public/images/AnshYogaSansthan/sliderImages/image5.jpg";
import image6 from "../public/images/AnshYogaSansthan/sliderImages/image6.jpg";
import image7 from "../public/images/AnshYogaSansthan/sliderImages/image7.jpg";

function App() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
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

      <div className="bg-baseColor">
        <Footer />
      </div>
    </div>
  );
}

export default App;
