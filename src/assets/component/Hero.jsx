import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";

// import hero from "./herog.svg"
const hero = "./hero-svg.png";
const Hero = () => {
  return (
    <>
      <section className=" md:mt-[70px] mt-[50px] lg:mt-[128px]">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-[40px] gap-y-5 place-items-center ">
          <div className="md:col-span-2 place-self-start   space-y-[32px]">
            <h2 className="md:max-w-[604px] max-w-full text-white font-bold text-4xl sm:text-5xl lg:text-6xl">
              Spend your Cardano anywhere, anytime.
            </h2>
            <p className="text-white/75 md:max-[30px] max-w-full lg:max-w-[489px] text-base">
              Our user-friendly platform enables businesses and individuals to
              seamlessly convert and spend their crypto for everyday purchases.
            </p>
            <Button
              color="primary"
              size="lg"
              radius="full"
              disableAnimation
              evl
              endContent={<MoveRight />}
              className="text-base  font-semibold"
            >
              Get Started
            </Button>
          </div>

          <div className=" md:col-span-1 place-items-center  ">
            <img
              src={hero}
              className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
