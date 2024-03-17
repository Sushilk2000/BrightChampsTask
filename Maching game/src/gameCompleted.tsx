const bananaPositions = [
  { top: "20%", left: "26%" },
  { top: "20%", left: "68%" },
  { top: "46%", left: "70%" },
  { top: "5%", left: "45%" },
  { top: "46%", left: "24%" },
  { top: "68%", left: "28%" },
  { top: "68%", left: "66%" },
];
import { useNavigate } from "react-router-dom";
function GameCompleted() {
  const nav = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-60 blur"></div>
      <div className="p-4 rounded-md z-50">
        <img src="/GameReward.png" alt="" className="h-[40rem]" />
        <img
          src="/smilingMonkey.png"
          alt=""
          className="absolute bottom-48 h-64 translate-x-28 "
        />
        {bananaPositions.map((position, index) => (
          <img
            key={index}
            src="/Banana.png"
            alt={`banana-${index}`}
            className="w-[100px] absolute"
            style={{
              top: position.top,
              left: position.left,
            }}
          ></img>
        ))}
        <button
          onClick={() => {
            nav("/instructions");
          }}
        >
          <img
            src="/gamecompletedButton.png"
            alt=""
            className="bottom-[6.5rem] left-[38.5%] w-[22rem] absolute z-[60]"
          />
        </button>
      </div>
    </div>
  );
}

export default GameCompleted;
