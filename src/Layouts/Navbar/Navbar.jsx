import { Link } from "react-router-dom";


const Navbar = () => {
    const navLink = <div className="uppercase text-black lg:text-white md:flex">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
        <li><Link to='/dashBoard'>DashBoard</Link></li>
        <li><Link to='/ourMenu'>Our Menu</Link></li>
        <li><Link to='/order/dessert'>Order</Link></li>

    </div>
    return (
        <div>
            <div className="navbar fixed z-10 opacity-70 text-white bg-black max-w-7xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex-row uppercase">
                        <p className="font-bold text-2xl">Bistro Boss</p>
                        <p className="font-bold text-base">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;