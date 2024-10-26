import Footer from "../../components/Footer/Footer"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import Navbar from "../../components/Navbar/Navbar"
import gola1 from "../../../public/images/golaImages/gola1.jpg";
import gola2 from "../../../public/images/golaImages/gola2.jpg";
import gola3 from "../../../public/images/golaImages/gola3.jpg";
import gola4 from "../../../public/images/golaImages/gola4.png";
import GolaNotepad from "../../components/Notepad/GolaNotepad";

const Gola = () => {
    const images = [
        gola1, gola2, gola4, gola3
    ]
    return (
        <div>
            <div className="bg-baseColor"><Navbar /></div>
            <ImageSlider images={images}/>
            <GolaNotepad />
            <div className="bg-baseColor"><Footer /></div>
        </div>
    )
}

export default Gola