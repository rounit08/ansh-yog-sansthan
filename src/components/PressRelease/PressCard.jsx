import shareIcon from "../../../public/svg/share.svg";

const PressCard = ({ pressImage, date }) => {
    // Polyfill for navigator.share
    if (!navigator.share) {
        navigator.share = async function (data) {
            if (!data || !data.url) {
                throw new Error('Share data must contain a URL.');
            }

            const text = data.text || '';
            const title = data.title || '';

            // Use the Clipboard API to copy the text and URL
            try {
                await navigator.clipboard.writeText(`${title}\n${text}\n${data.url}`);
                alert('Share data copied to clipboard!'); // Alert or notification for the user
            } catch (err) {
                console.error('Failed to copy to clipboard', err);
            }
        };
    }

    const shareContent = async () => {
        try {
            const shareData = {
                title: 'Check out this press image!',
                text: 'Here is an interesting press image.',
                url: pressImage, // This should be a link to the image if hosted online
            };

            await navigator.share(shareData);
            console.log('Share successful');
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="flex flex-col items-center w-[300px] h-[350px] rounded-lg cursor-pointer hover:bg-baseColor bg-gray-100 p-3">
            <div className="h-[450px] w-full border-2 border-baseColor overflow-hidden">
                <img 
                    src={pressImage} 
                    alt="press image" 
                    className="object-fill h-full w-full hover:scale-110 transition-transform" 
                />
            </div>
            <div className="flex items-center w-full justify-between px-3 h-fit py-1 mt-2">
                <p className="text-xs md:text-sm font-medium">{''}</p>
                <img 
                    src={shareIcon} 
                    alt="share icon" 
                    className="cursor-pointer" 
                    onClick={shareContent} 
                    height='20px' width='50px'
                />
            </div>
        </div>
    );
}

export default PressCard;
