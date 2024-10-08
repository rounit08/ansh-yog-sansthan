import { useEffect, useRef, useState } from "react";
import video from "../../../public/videos/video.mp4";

const FixedVideo = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleScroll = () => {
    if (!isVideoPlaying) {
      setShowModal(true);
      window.removeEventListener("scroll", handleScroll); // Prevent multiple popups
    }
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setShowModal(false);
    videoRef.current.play(); // Start playing the video
    enterFullscreen();
  };

  const enterFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      // Safari
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      // IE11
      videoRef.current.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      // Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE11
      document.msExitFullscreen();
    }
    setIsVideoPlaying(false); // Reset playing state
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-10 top-[63vh] right-20 h-[200px] w-[300px] bg-baseColor rounded-2xl p-2">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg mb-4 font-semibold">
              क्या आप वीडियो चलाना चाहते हैं ?
            </h2>
            <div className="flex  w-full">
              <button
                onClick={handlePlayVideo}
                className="mr-2 p-2 w-1/2 bg-baseColor text-white rounded"
              >
                हाँ
              </button>
              <button
                onClick={handleCloseModal}
                className="p-2 w-1/2 bg-gray-300 rounded"
              >
                नहीं
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          src={video}
          controls
          className="h-full w-full object-cover rounded-xl"
        />
        {isVideoPlaying && (
          <button
            onClick={exitFullscreen}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default FixedVideo;
