import  { useState } from 'react';
import bjpLogo from "../../../public/images/bjp.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-container flex justify-between items-center p-4 py-8 text-base md:text-lg bg-baseColor text-white">
      <div className="text-xl font-bold flex items-center">
        <a href="/" className="flex  items-center">
        <img src={bjpLogo} alt='bjp logo' title='bjp logo' className='h-16 w-16'/>
          विजय कुमार शुक्ल &apos;रिंकू&apos;
        </a>
      </div>

      <div className="md:hidden z-20" onClick={toggleMenu}>
        <button className="focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className={`flex-col z-10 md:flex-row space-y-4 md:space-y-0 md:space-x-6 fixed md:static justify-center items-center text-2xl lg:text-base inset-0 bg-baseColor md:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0  flex ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <a href="/introduction" className="hover:underline cursor-pointer font-semibold">
          परिचय
        </a>
        <a href="/nagarpalika-gola" className="hover:underline cursor-pointer font-semibold">
          नगर पालिका परिषद
        </a>
        <a href="/annapurna-rasoi" className="hover:underline cursor-pointer font-semibold">
          माँ अन्नपूर्णा रसोई
        </a>
        <a href="/gaushala" className="hover:underline cursor-pointer font-semibold">
          श्री धर्मादा समिति गौशाला
        </a>
        <a href="/golagokarnath" className="hover:underline cursor-pointer font-semibold">
          गोला गोकर्णनाथ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
