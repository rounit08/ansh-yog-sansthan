import EmailIcon from "../../../public/svg/email.svg";
import PhoneIcon from "../../../public/svg/phone.svg";

const   ContactCard = () => {
  return (
    <div className="custom-container  w-[75%] lg:w-[20%] border-2 mb-6 border-baseColor flex flex-col gap-6 p-10 rounded-lg">
      <div className="text-baseColor  font-semibold text-lg md:text-3xl">
        संपर्क
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1 ">
          <img src={EmailIcon} alt="icon" />

          <a
            className="font-semibold text-sm lg:text-base"
            href="mailto:vijayshuklarinku123@gmail.com"
          >
            vijayshuklarinku123@gmail.com
          </a>
        </div>
        <div className="flex font-semibold text-base md:text-lg gap-3">
          <img src={PhoneIcon} alt="icon" />
          <p>9415460769, 9519999909</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
