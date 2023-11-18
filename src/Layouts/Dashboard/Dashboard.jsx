import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCartShopping, FaHouse, FaList, FaUtensils } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import { MdPayment } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { RiMenuLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import useAdmin from "../../Components/Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";





const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-64 min-h-screen bg-orange-600 p-2">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li className=""><NavLink to='/dashboard/adminHome' className=''>
                                <FaHouse />Admin Home</NavLink></li>

                            <li className=""><NavLink to='/dashboard/addItems' className=''>
                                <FaUtensils />
                                Add Items</NavLink></li>

                            <li className=""><NavLink to='/dashboard/manageItem' className=''>
                                <FaList />Manage Items</NavLink></li>

                            <li className=""><NavLink to='/dashboard/manageBookings' className=''>
                                <FaBook /> Manage bookings</NavLink></li>

                            <li className=""><NavLink to='/dashboard/allUser' className=''>
                                <FaUsers /> All User</NavLink></li>
                        </>
                            :
                            <>
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
                            </>
                    }


                    <div className="divider"></div>


                    <li className=""><NavLink to='/' className=''>
                        <FaHouse /> Home</NavLink></li>

                    <li className=""><NavLink to='/order/dessert' className=''>
                        <RiMenuLine /> Menu</NavLink></li>

                    <li className=""><NavLink to='/order/contact' className=''>
                        <TfiEmail /> Contact</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;