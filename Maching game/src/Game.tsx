import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./gamingwindow.css";

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function GamingWindow() {
  const [selectedRedCard, setSelectedRedCard] = useState<{
    fruit: string;
    icon: string;
  } | null>();
  const [selectedBlueCard, setSelectedBlueCard] = useState<{
    fruit: string;
    icon: string;
    letter: string;
  } | null>();
  const [moves, setMoves] = useState(6);
  const [completed, setCompleted] = useState<string[]>([]);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const [redCardData, setRedCardData] = useState<
    { fruit: string; icon: string }[]
  >([]);
  const [blueCardData, setBlueCardData] = useState<
    { fruit: string; icon: string; letter: string }[]
  >([]);
  const selectRedCard = (data: { fruit: string; icon: string }) => {
    if (!selectedRedCard) {
      setSelectedRedCard(data);
      console.log("red card selected");
    }
  };
  const selectBlueCard = async (data: {
    fruit: string;
    icon: string;
    letter: string;
  }) => {
    if (!selectedBlueCard && selectedRedCard) {
      setSelectedBlueCard(data);

      setTimeout(() => {
        if (selectedRedCard.fruit !== data.fruit) {
          setSelectedRedCard(null);
          setSelectedBlueCard(null);
          setMoves(moves - 1);
          if (moves === 1 && completed.length !== 5) {
            nav("/gameover");
          }
        } else {
          if (completed.length === 5) {
            nav("/gameCompleted");
            return;
          }
          setCompleted([...completed, data.fruit]);
          setIsMatched(true);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    setRedCardData(
      shuffle([
        { fruit: "apple", icon: "🍎" },
        { fruit: "orange", icon: "🍊" },
        { fruit: "grape", icon: "🍇" },
        { fruit: "banana", icon: "🍌" },
        { fruit: "mango", icon: "🥭" },
        { fruit: "pineapple", icon: "🍍" },
      ])
    );
    setBlueCardData(
      shuffle([
        { fruit: "orange", icon: "🍊", letter: "O" },
        { fruit: "apple", icon: "🍎", letter: "A" },
        { fruit: "mango", icon: "🥭", letter: "M" },
        { fruit: "grape", icon: "🍇", letter: "G" },
        { fruit: "banana", icon: "🍌", letter: "B" },
        { fruit: "pineapple", icon: "🍍", letter: "P" },
      ])
    );
  }, []);
  const nav = useNavigate();
  return (
    <div className="absolute top-0 w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute top-4 flex items-center">
          <div className="w-[36rem] h-8 bg-white  rounded-full flex px-1">
            <div
              style={{
                width: `${(completed.length * 100) / 6}%`,
                height: "100%",
              }}
            >
              <img
                src="/fullLoader.png"
                alt=""
                className={`w-full h-full object-cover rounded-full`}
              />
            </div>
          </div>
          <img
            src="/Banana.png"
            alt=""
            className="w-20 -rotate-[60deg] -translate-x-16"
          />
        </div>
        {isMatched && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <button
              onClick={() => {
                setIsMatched(false);
                setSelectedRedCard(undefined);
                setSelectedBlueCard(undefined);
              }}
            >
              <img
                src="/nextButton.png"
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
            <div className=" z-30 flex gap-14 relative">
              <img
                className="absolute w-[300px] h-[200px] -top-40 -right-32 rotate-12 transition ease-in-out duration-300"
                src="/match.svg"
                alt="match text"
              />

              <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl animated-rotate animated-slide-in-left">
                {selectedRedCard?.icon}
              </div>
              <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md text-green-600 w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl animated-slide-in-right translate-y-[30%]">
                {selectedBlueCard?.letter}
              </div>
            </div>
          </div>
        )}
        <div className=" flex gap-14">
          <div className="grid grid-cols-3 relative ">
            {!selectedBlueCard && !selectedRedCard && completed.length == 0 && (
              <div className="absolute -top-24 right-20 animate-bounce z-10"></div>
            )}

            {redCardData.map((cardData) => {
              const isSelected =
                selectedRedCard && selectedRedCard.fruit === cardData.fruit;
              const isCompleted = completed.includes(cardData.fruit);
              return (
                <div
                  key={cardData.fruit}
                  onClick={() => selectRedCard(cardData)}
                  className={`transition transform duration-700 ease-in-out ${
                    isCompleted ? "invisible" : ""
                  } ${!selectedRedCard ? "hover:scale-110" : ""} card ${
                    isSelected ? "flipped" : ""
                  }`}
                >
                  {selectedRedCard &&
                  selectedRedCard.fruit === cardData.fruit ? (
                    <div className="bg-[#FFD5CC] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl">
                      {cardData.icon}
                    </div>
                  ) : (
                    <img src="/pinkCard.png" alt="card" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 relative">
            {selectedRedCard && !selectedBlueCard && completed.length == 0 && (
              <div className="absolute -bottom-24 left-20"></div>
            )}
            {blueCardData.map((cardData) => {
              const selected =
                selectedBlueCard && cardData.fruit === selectedBlueCard.fruit;
              const isCompleted = completed.includes(cardData.fruit);
              return (
                <div
                  key={cardData.fruit}
                  onClick={() => selectBlueCard(cardData)}
                  className={`transition ${isCompleted ? "invisible" : ""} ${
                    selectedRedCard && !selectedBlueCard
                      ? "hover:scale-110"
                      : ""
                  } card ${selected ? "flipped" : ""}`}
                >
                  {selected ? (
                    <div className="bg-[#FFD5CC] border-white border-8 p-4 rounded-md text-green-800 w-[190px] h-[240px] mt-2 flex items-center justify-center text-5xl scale-x-[1]">
                      {cardData.letter}
                    </div>
                  ) : (
                    <img src="/blueCard.png" alt="card" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-3 bg-sky-700 opacity-85 absolute top-4 right-4 text-white rounded-3xl text-2xl font-bold border-white border-4">
          Wrong Moves Left : {moves}
        </div>
      </div>
    </div>
  );
}

export default GamingWindow;
