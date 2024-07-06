import SignupForm from "./SignupForm";
import LeftSideImageSignUp from "./LeftSideImage";

const SignupPage = () => {
  return (
    <div className="h-[100vh] w-full flex">
      <LeftSideImageSignUp />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
