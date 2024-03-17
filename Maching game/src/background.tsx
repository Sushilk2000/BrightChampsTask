import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { useRef, useState } from "react";
function BackgroundPage() {
  const [musicStatus, setMusicStatus] = useState<boolean>(false);
  const musicRef = useRef(null);
  const toggleMusic = () => {
    const audio = musicRef.current;
    if (audio) {
      if (!musicStatus) {
        audio.play();
      } else {
        audio.pause();
      }
      setMusicStatus((prevStatus) => !prevStatus);
    }
  };

  return (
    <div className="h-screen w-screen bg-[url(/backgroundImage.png)] bg-no-repeat bg-cover">
      <audio ref={musicRef} src="/audio/kids-morning-full.wav"></audio>
      <div className="absolute bottom-4 left-6 flex z-[99]">
        {!musicStatus && (
          <FaVolumeHigh
            onClick={toggleMusic}
            size={60}
            className="cursor-pointer"
          />
        )}
        {musicStatus && (
          <FaVolumeXmark
            onClick={toggleMusic}
            size={60}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default BackgroundPage;
