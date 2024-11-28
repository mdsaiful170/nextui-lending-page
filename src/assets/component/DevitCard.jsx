import { MoveRight } from "lucide-react";
import Share from "./Share";

const debiteCard = [
  {
    id: 1,
    img: "./debit-card-1.svg",
    icon: <MoveRight />,
    title: "Wern Debit Card",
    subtitle:
      "More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.",
    buttontext: "Create New Card",
    minitext: "Will be available soon",
    flexname: "md:flex-row",
  },
  {
    id: 2,
    img: "./debit-card-2.svg",
    title: "Find the Perfect Card for You",
    subtitle:
      "Unlocking the Power of Crypto, Both Virtually and Physically Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.",
    buttontext: "Learn More",
    flexname: "md:flex-row-reverse",
  },
];
const DevitCard = () => {
  return (
    <>
      {debiteCard.map((res, i) => (
        <section key={i}>
          <Share {...res} key={i} />
        </section>
      ))}

      <img src="./debit-img-one.svg" alt="" />
    </>
  );
};

export default DevitCard;
