
const ReviewCard = (props) => {
  const { id, icon, des, img, name, prof } = props || {};

  return (
    <>
  
      <div
        key={id}
        className="px-6 py-12 max-w-sm mx-8 rounded-md bg-[#27322F3D]/25 backdrop-blur-xl "
      >
        <div>{icon}</div>
        <p className="text-base font-normal pt-4 lg:pt-6">{des}</p>
        <div className="flex items-center gap-x-3 pt-6 lg:pt-7">
          <img
            src={img}
            alt="img"
            className="size-10 object-cover rounded-full "
          />
          <div>
            <h3 className="text-base font-medium text-white">{name}</h3>
            <p className="text-sm text-[#ADB2B1]">{prof}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
