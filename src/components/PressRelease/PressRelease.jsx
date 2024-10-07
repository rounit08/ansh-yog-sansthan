import PressCard from "./PressCard"
import pressImage1 from "../../../public/images/pressImages/press1.jpg";
import pressImage2 from "../../../public/images/pressImages/press2.jpg";
import pressImage4 from "../../../public/images/pressImages/press4.jpg";
import pressImage5 from "../../../public/images/pressImages/press5.jpg";
import pressImage6 from "../../../public/images/pressImages/press6.jpg";
import pressImage7 from "../../../public/images/pressImages/press7.jpg";
import pressImage8 from "../../../public/images/pressImages/press8.jpg";
import pressImage9 from "../../../public/images/pressImages/press9.jpg";
import pressImage10 from "../../../public/images/pressImages/press10.jpg";
import pressImage11 from "../../../public/images/pressImages/press11.jpg";
import pressImage12 from "../../../public/images/pressImages/press12.jpg";
import pressImage13 from "../../../public/images/pressImages/press13.jpg";
const PressRelease = () => {

    const pressImages = [
        { src: pressImage1, date: "06-10-2024" },
        { src: pressImage2, date: "06-11-2024" },
        { src: pressImage4, date: "06-13-2024" },
        { src: pressImage5, date: "06-14-2024" },
        { src: pressImage6, date: "06-15-2024" },
        { src: pressImage7, date: "06-16-2024" },
        { src: pressImage8, date: "06-17-2024" },
        { src: pressImage9, date: "06-18-2024" },
        { src: pressImage10, date: "06-19-2024" },
        { src: pressImage11, date: "06-20-2024" },
        { src: pressImage12, date: "06-21-2024" },
        { src: pressImage13, date: "06-22-2024" },
    ];
    return (
        <>
        <div className="custom-container mt-8 h-1 relative bottom-0 bg-baseColor">
        
        <p className="absolute text-base md:text-xl font-serif bg-baseColor rounded-b-xl font-medium text-white px-10 py-5 ">
          Press Release
        </p>
      </div>
        <div className="custom-container relative mt-20  my-6">
        <div className="flex flex-wrap gap-3 justify-center ">
            {pressImages.map((image, index) => (
                <PressCard 
                    key={index} 
                    pressImage={image.src} 
                    date={image.date} 
                />
            ))}
            </div>
        </div>

        </>
    )
}

export default PressRelease