import certificate1 from "../../../public/images/AnshYogaSansthan/certificates/certificate1.jpg";
import certificate2 from "../../../public/images/AnshYogaSansthan/certificates/certificate2.jpg";
import certificate3 from "../../../public/images/AnshYogaSansthan/certificates/certificate3.jpg";

const PersonalNotepad = () => {
  return (
    <div className="custom-container bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        प्रमाणपत्र:
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <img
          src={certificate1}
          alt="certificate"
          height="400px"
          width="400px"
        />
        <img
          src={certificate2}
          alt="certificate"
          height="400px"
          width="400px"
        />
        <img
          src={certificate3}
          alt="certificate"
          height="400px"
          width="400px"
        />
      </div>
    </div>
  );
};

export default PersonalNotepad;
