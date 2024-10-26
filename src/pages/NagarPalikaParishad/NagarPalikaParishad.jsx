import Navbar from "../../components/Navbar/Navbar"
import NagarPalika from "../../../public/images/nagarpalika.jpg"
import Notepad from "../../components/Notepad/Notepad"
import Footer from "../../components/Footer/Footer"
const NagarPalikaParishad = () => {
    return (
        <div>
            <div className="bg-baseColor">
                <Navbar />

            </div>
            <img src={NagarPalika} alt="nagar palika gola" className="object-cover  h-fit  w-screen" title="nagar palika gola"/>
            <Notepad />
            <div className="bg-baseColor">
            <Footer />

            </div>
        </div>
    )
}

export default NagarPalikaParishad