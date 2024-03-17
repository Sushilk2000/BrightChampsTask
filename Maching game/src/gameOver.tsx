import { useNavigate } from "react-router-dom";

function GameOver() {
  const nav = useNavigate();
  return (
    <>
      <div className="absolute h-[30rem] bottom-32 text-3xl font-bold text-[#11AEC6] text-center flex flex-col items-center w-screen">
        <img src="Monkey.png" alt="" className="h-full   translate-x-8" />
        <p>Game Over!</p>
        <p>Try Again!</p>
      </div>
      <button
        className="absolute bottom-[3.5%] right-[5%] w-[18%] hover:w-[20%] ease-in-out duration-500"
        onClick={() => {
          nav("/game");
        }}
      >
        <img src="/playButton.png" alt="" />
      </button>
    </>
  );
}

export default GameOver;
