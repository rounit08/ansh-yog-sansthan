import yogaGif from "../../../public/images/AnshYogaSansthan/gif/card.gif";

const MemberCard = ({ image, name, designation }) => {
  return (
    <div className="flex flex-col gap-5 items-center relative border p-3 h-[250px] rounded-lg shadow-md">
      <img src={image} className="rounded-[50%] w-32 h-32 object-cover" />
      <div className="flex flex-col items-center bg-blue-300 w-full p-2">
        <span>{name}</span>
        <span>{designation}</span>
      </div>
    </div>
  );
};

export default MemberCard;
