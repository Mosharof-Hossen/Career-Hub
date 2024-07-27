import { NavLink } from "react-router-dom";

const Header = () => {

    const link = < >
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/appliedJob"}>Applied Jobs</NavLink></li>
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>

    </>

    return (
        <div className="navbar bg-[#FAF8FF]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-1 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <NavLink to={"/"} className="btn btn-ghost text-xl">Career Hub</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-primary-first to-primary-second text-white">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;