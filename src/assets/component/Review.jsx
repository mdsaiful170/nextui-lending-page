import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const reviewData = [
  {
    id: 1,
    icon: <Quote />,
    des: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings",
    img: "./pic-1.svg",
    name: "Hadid Khan",
    prof: "UIUX Designer",
  },
  {
    id: 2,
    icon: <Quote />,
    des: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
    img: "./pic-2.svg",
    name: "Wade Warren",
    prof: "Web Designer",
  },
  {
    id: 3,
    icon: <Quote />,
    des: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
    img: "./pic-1.svg",
    name: "Jenny Wilson",
    prof: "Trust Administrator",
  },
];

const Review = () => {
  return (
    <>
      <section>
        <Marquee
          className="grid place-items-center"
          style={{ cursor: "pointer" }}
          autoFill={true}
          pauseOnHover
          speed={80}
          play={true}
        >
          {reviewData.map((res) => (
            <ReviewCard key={res.id} {...res} />
          ))}
        </Marquee>
      </section>
    </>
  );
};
 
export default Review;
