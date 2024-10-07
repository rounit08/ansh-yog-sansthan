import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import RasoiNotepad from "../../components/Notepad/RasoiNotepad"
import RasoiImage from "../../../public/images/rasoi rasoi.jpg"

const AnnapurnaRasoi = () => {
    return (
        <div>
           <div className="bg-baseColor">
            <Navbar />
           </div>
           <div className="flex flex-wrap">
            <img src={RasoiImage} alt="rasoi image" title="rasoi image" className="h-screen object-contain w-screen custom-container" />
            <RasoiNotepad />
            </div>
            <div className="bg-black">
                <Footer />
            </div>
        </div>
    )
}

export default AnnapurnaRasoi