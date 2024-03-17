import { useNavigate } from "react-router-dom";
import InstructionCard from "./InstructionCard";
import { cards } from "./cards";
function InstructionsPage() {
  const nav = useNavigate();
  return (
    <div className="absolute top-0">
      <button
        className="w-28 absolute top-4 left-4 hover:w-32 hover:left-2 hover:top-2 ease-in-out duration-300"
        onClick={() => {
          nav("/intro3");
        }}
      >
        <img src="/prevButton.png" alt="" />
      </button>
      <button
        className="absolute bottom-[3.5%] right-[5%] w-[18%] hover:w-[20%] ease-in-out duration-500"
        onClick={() => {
          nav("/game");
        }}
      >
        <img src="/playButton.png" alt="" />
      </button>
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="flex justify-center gap-32 bg-center bg-cover bg-[url(/Vector.png)]">
          {cards?.map((card) => (
            <InstructionCard card={card} key={String(card.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
