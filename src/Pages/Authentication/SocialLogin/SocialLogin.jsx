import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import GithubLogin from "./GithubLogin";

const SocialLogin = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
      <div className="">
        <GoogleLogin />
      </div>
      <div className="">
        <FacebookLogin />
      </div>
      <div className="">
        <GithubLogin />
      </div>
    </div>
  );
};

export default SocialLogin;
