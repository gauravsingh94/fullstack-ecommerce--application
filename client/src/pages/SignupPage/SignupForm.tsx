import RadioButton from "./RadioButton";
const SignupForm = () => {
  return (
    <div className="w-[50%] h-full flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px]">Sign Up</h1>
        <h1>Already have an account? Sign in</h1>
        <input
          type="text"
          placeholder="Your Name"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
        />
        <input
          type="text"
          placeholder="Paste Profile Image link"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
        />
        <RadioButton />

        <button className="mt-2 p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
