interface Card {
  id: Number;
  bg: string;
  front: string | null;
  title: string;
  description: string;
}

function InstructionCard({ cardData }: { cardData: Card }) {
  return (
    <div className="bg-white rounded-[2rem] w-[350px]  flex flex-col items-center justify-center py-4 h-max min-h-[438px] hover:scale-105 ease-in-out duration-300 hover:shadow-md hover:shadow-gray-500">
      <div
        className={`bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${cardData.bg})` }}
      >
        <img
          src={cardData?.front || cardData?.bg}
          alt=""
          className={`${cardData.front && "translate-x-16 -translate-y-2"} `}
        />
      </div>
      <div className="text-center font-[Nunito] font-bold text-[#11AEC6] text-[40px] w-[65%] leading-snug">
        <p>
          {cardData?.id == 3 && (
            <>
              <p className="text-center font-[Nunito] text-2xl text-[#A6C930] mt-3">
                If they’re same
              </p>
              It's a match!
            </>
          )}
          {cardData?.id != 3 && <>{cardData?.title}</>}
        </p>
      </div>
      <div className="text-center font-[Nunito] text-2xl text-[#A6C930]">
        <p>{cardData?.description}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
