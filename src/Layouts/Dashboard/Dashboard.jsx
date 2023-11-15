import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping,  FaHouse, FaList } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { RiMenuLine } from "react-icons/ri";




const Dashboard = () => {
    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-64 min-h-screen bg-orange-600 p-2">
                <ul className="menu">
                    <li className=""><NavLink to='/dashboard/useHome' className=''>
                    <FaHouse />User Home</NavLink></li>
                    <li className=""><NavLink to='/dashboard/reservation' className=''>
                    <FaCalendar />Reservation</NavLink></li>
                    <li className=""><NavLink to='/dashboard/payment' className=''>
                    <MdPayment />Payment</NavLink></li>
                    <li className=""><NavLink to='/dashboard/cart' className=''>
                    <FaCartShopping /> My Cart</NavLink></li>
                    <li className=""><NavLink to='/dashboard/review' className=''>
                    <VscPreview /> Add Review</NavLink></li>
                    <li className=""><NavLink to='/dashboard/booking' className=''>
                    <FaList /> My Booking</NavLink></li>
                    <div className="divider"></div> 
                    <li className=""><NavLink to='/' className=''>
                    <FaHouse /> Home</NavLink></li>
                    <li className=""><NavLink to='/order/dessert' className=''>
                    <RiMenuLine /> Menu</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;