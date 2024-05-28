import useAuth from "../Hooks/UseAuth/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // const { photoURL } = user;

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          Soleify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-bold">Products</a>
          </li>
          <li>
            <a className="font-bold">Review</a>
          </li>
          <li>
            <a className="font-bold">FAQ</a>
          </li>
          <li>
            <a href="/about" className="font-bold">
              About
            </a>
          </li>
          <li>
            <a href="/dashboard" className="font-bold">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end grid-flow-col gap-2">
        {user ? (
          <button onClick={handleLogOut} className="btn btn-outline btn-error">
            Log Out
          </button>
        ) : (
          <a href="/login" className="btn btn-outline btn-success">
            Log In
          </a>
        )}
        {user && (
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
