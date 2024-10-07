import Footer from "../../components/Footer/Footer"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import Navbar from "../../components/Navbar/Navbar"
import gaushala1 from "../../../public/images/gaushalaimages/gaushala1.jpg";
import gaushala2 from "../../../public/images/gaushalaimages/gaushala2.jpg";
import gaushala3 from "../../../public/images/gaushalaimages/gaushala3.jpg";
import gaushala4 from "../../../public/images/gaushalaimages/gaushala4.jpg";
import gaushala5 from "../../../public/images/gaushalaimages/gaushala5.jpg";
import gaushala6 from "../../../public/images/gaushalaimages/gaushala6.jpg";
import gaushala7 from "../../../public/images/gaushalaimages/gaushala7.jpg";

const Gaushala = () => {

    const images = [
        gaushala1, gaushala2,gaushala3,gaushala4,gaushala5,gaushala6,gaushala7
    ]

    return (
        <div>
            <div className="bg-baseColor">
<Navbar />
            </div>
            <ImageSlider images={images} />
            <div className="bg-black">
                <Footer />
            </div>
        </div>
    )
}

export default Gaushala