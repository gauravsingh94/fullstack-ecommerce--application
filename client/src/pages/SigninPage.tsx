import SideImage from "../../public/signImage.png";

const SigninPage = () => {
  return (
    <div className="h-[100vh] w-full flex">
      {/* Image section */}
      <div className="relative w-[50%] h-full">
        <img
          src={SideImage}
          alt="sideImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start">
          <h1 className="mt-5 text-black font-semibold text-[24px]">
            3legant.
          </h1>
        </div>
      </div>
      {/* Sign-in section */}
      <div className="w-[50%] h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px]">Sign In</h1>
          <h1>Don’t have an account yet? Sign Up</h1>
          <input
            type="email"
            placeholder="Your email address"
            className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          />
          <button className="mt-2 p-2 bg-black text-white rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
