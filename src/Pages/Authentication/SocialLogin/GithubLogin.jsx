import { FaGithub } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth/useAuth";

const GithubLogin = () => {
  const { githubLogin } = useAuth();
  const handleLogin = () => {
    githubLogin();
  };
  return (
    <button onClick={handleLogin} className="btn w-full">
      <div className="flex items-center gap-2">
        <FaGithub size={24} />
        <p>Github</p>
      </div>
    </button>
  );
};

export default GithubLogin;
