const SigninForm = () => {
  return (
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
  );
};

export default SigninForm;
