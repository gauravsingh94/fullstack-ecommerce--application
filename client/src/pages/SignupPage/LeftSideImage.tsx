import SideImage from "../../../public/signImage.png";

const LeftSideImageSignUp = () => {
  return (
    <div className="relative w-[50%] h-full">
      <img
        src={SideImage}
        alt="sideImage"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start">
        <h1 className="mt-5 text-black font-semibold text-[24px]">3legant.</h1>
      </div>
    </div>
  );
};

export default LeftSideImageSignUp;
