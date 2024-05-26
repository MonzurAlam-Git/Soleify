import { FaFacebook } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth/useAuth";

const FacebookLogin = () => {
  const { facebookLogin } = useAuth();
  const handleLogin = () => {
    facebookLogin();
  };
  return (
    <button onClick={handleLogin} className="btn w-full">
      <div className="flex items-center gap-2">
        <FaFacebook size={24} />
        <p>Facebook</p>
      </div>
    </button>
  );
};

export default FacebookLogin;
