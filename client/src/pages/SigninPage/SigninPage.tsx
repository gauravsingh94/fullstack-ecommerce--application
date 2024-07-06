import LeftSideImageSignin from "./LeftSideImage";
import SigninForm from "./SigninForm";
const SigninPage = () => {
  return (
    <div className="h-[100vh] w-full flex">
      {/* Image section */}
      <LeftSideImageSignin />
      {/* Sign-in section */}
      <SigninForm />
    </div>
  );
};

export default SigninPage;
