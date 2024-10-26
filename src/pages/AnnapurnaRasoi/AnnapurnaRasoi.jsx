import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import RasoiNotepad from "../../components/Notepad/RasoiNotepad"
import MaaAnnapurnaRasoiLogo from "../../../public/images/MaaAnnapurnaRasoi.jpg";

const AnnapurnaRasoi = () => {
    return (
        <div>
           <div className="bg-baseColor">
            <Navbar />
           </div>
           <div className="flex flex-wrap flex-col">
            <img src={MaaAnnapurnaRasoiLogo} alt="rasoi image" title="rasoi image" className="h-[500px] object-contain w-[500px] custom-container" />
            <RasoiNotepad />
            </div>
            <div className="bg-baseColor">
                <Footer />
            </div>
        </div>
    )
}

export default AnnapurnaRasoi