import { Button } from "@nextui-org/react";

const Share = (props) => {
  const { img, title, subtitle, buttontext, icon, minitext, flexname } =
    props || {};
  return (
    <>
      <div
        className={`flex items-center gap-6 flex-col justify-center ${
          flexname === "md:flex-row" ? "md:flex-row" : "md:flex-row-reverse"
        } `}
      >
        <div className="md:w-1/2 w-full">
          <h3 className="text-4xl font-mplusone  font-bold  text-white">
            {title}
          </h3>
          <p className="text-base font-normal max-w-full sm:max-w-xs md:max-w-md py-5 lg:py-6 ">
            {subtitle}
          </p>
          <Button
            color="primary"
            radius="full"
            className="tracking-[.1rem] font-medium"
          >
            {buttontext} {icon}
          </Button>
          <h5 className="text-primary text-base pt-2">{minitext}</h5>
        </div>
        <div className="grid place-items-center mx-auto self-center md:w-1/2 w-full">
          <img
            src={img}
            className=" object-cover max-w-md lg:max-w-xl "
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Share;
