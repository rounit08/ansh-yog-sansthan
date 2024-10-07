import video from "../../../public/videos/video.mp4"
const FixedVideo = () => {
    return (
        <div className="fixed z-10 top-[63vh] right-20 h-[200px] w-[300px] bg-baseColor rounded-2xl p-2">
            <video src={video} autoPlay  controls className="h-full w-full object-cover rounded-xl">
            </video>
        </div>
    )
}

export default FixedVideo