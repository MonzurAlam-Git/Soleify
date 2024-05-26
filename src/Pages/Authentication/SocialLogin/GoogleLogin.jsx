import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/UseAuth/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleLogin = () => {
    googleLogin();
  };
  return (
    <button onClick={handleLogin} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
