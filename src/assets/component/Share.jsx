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
          <h3 className="text-base font-normal text-[#ADB2B1]">{title}</h3>
          <p>{subtitle}</p>
          <Button>
            {buttontext} {icon}
          </Button>
          <h5>{minitext}</h5>
        </div>
        <div className="grid place-items-center mx-auto self-center md:w-1/2 w-full">
          <img src={img} className=" object-cover max-w-full " alt="" />
        </div>
      </div>
    </>
  );
};
export default Share;
