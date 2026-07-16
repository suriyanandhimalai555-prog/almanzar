import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    BiWallet,
    BiTransfer,
    BiKey,
    BiUser,
    BiCreditCard,
    BiCodeAlt,
    BiFile,
    BiLogOut
} from 'react-icons/bi';
import { BsBoxSeam, BsGrid1X2Fill } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Dynamically get the company name saved during login, fallback to a default if not found
    const companyName = localStorage.getItem('companyName') || 'Distributor Portal';

    // Define the menu items with their respective routes
    const menuItems = [
        { name: 'Dashboard', path: '/distributor/dashboard', icon: <BsGrid1X2Fill /> },
        { name: 'Wallet', path: '/distributor/wallet', icon: <BiWallet /> },
        { name: 'Transactions', path: '/distributor/transactions', icon: <BiTransfer /> },
        { name: 'API Keys', path: '/distributor/api-keys', icon: <BiKey /> },
        { name: 'Users', path: '/distributor/users', icon: <BiUser /> },
        { name: 'Cards', path: '/distributor/cards', icon: <BiCreditCard /> },
        { name: 'Physical Cards', path: '/distributor/physical-cards', icon: <BiCreditCard className="opacity-70" /> },
        { name: 'Developer', path: '/distributor/developer', icon: <BiCodeAlt /> },
        { name: 'API Logs', path: '/distributor/api-logs', icon: <BiFile /> },
    ];

    // Handle logout functionality
    const handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem('distributorId');
        localStorage.removeItem('companyName');

        // Redirect to login page
        navigate('/distributor/login');
    };

    return (
        <>
            {/* Mobile Overlay Background */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar Container */}
            <div className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-gray-200 h-screen flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shrink-0 md:shadow-none shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>

                <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
                    {/* Profile Header */}
                    <div className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white z-10">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-[#2B6CF0] to-[#1E40AF] text-white p-2 rounded-lg shadow-sm">
                                <BsBoxSeam className="text-lg" />
                            </div>
                            <div className="truncate w-32">
                                <h3 className="text-gray-900 text-sm font-bold leading-tight truncate" title={companyName}>
                                    Almanzar Distributor
                                </h3>
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-0.5">Distributor</p>
                            </div>
                        </div>
                        {/* Mobile Close Button */}
                        <button
                            onClick={onClose}
                            className="md:hidden text-gray-400 hover:text-[#2B6CF0] transition-colors p-1"
                        >
                            <FiX className="text-xl" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="p-3 space-y-1 mt-2">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={onClose} // Auto-close sidebar on mobile after clicking
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all group ${isActive
                                        ? 'bg-blue-50 text-[#2B6CF0] border border-blue-100 shadow-sm'
                                        : 'text-gray-600 hover:text-[#2B6CF0] hover:bg-gray-50 border border-transparent'
                                        }`}
                                >
                                    <span className={`text-lg transition-colors ${isActive ? 'text-[#2B6CF0]' : 'text-gray-400 group-hover:text-[#2B6CF0]'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-semibold text-[13px]">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 space-y-1 border-t border-gray-200 bg-white shrink-0">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition-all font-semibold border border-transparent hover:border-red-100"
                    >
                        <BiLogOut className="text-lg" />
                        <span className="text-[13px]">Logout</span>
                    </button>
                </div>

            </div>
        </>
    );
};

export default Sidebar;