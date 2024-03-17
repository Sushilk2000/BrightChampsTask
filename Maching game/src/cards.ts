interface Card {
  id: Number;
  bg: String;
  front: String | null;
  title: String;
  description: String;
}
export const cards: Card[] = [
  {
    id: 1,
    bg: "/pinkCard.png",
    front: "/pinkupper.png",
    title: "Select a pink card",
    description: "It has images.",
  },
  {
    id: 2,
    bg: "/blueCard.png",
    front: null,
    title: "Select a blue card",
    description: "It has alphabets.",
  },
  {
    id: 3,
    bg: "/matchedCards.png",
    front: null,
    title: "If they’re same It's a match!",
    description: "otherwise retry.",
  },
];
