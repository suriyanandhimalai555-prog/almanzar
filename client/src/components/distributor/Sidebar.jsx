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
    BiSun,
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
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar Container */}
            <div className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#021008] border-r border-[#0f3b28] h-screen flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shrink-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>

                <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
                    {/* Profile Header */}
                    <div className="flex items-center justify-between p-5 border-b border-[#0f3b28]/50 sticky top-0 bg-[#021008] z-10">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#052618] text-[#2ee59d] p-2 rounded-lg border border-[#0f3b28]">
                                <BsBoxSeam className="text-lg" />
                            </div>
                            <div className="truncate w-32">
                                <h3 className="text-white text-sm font-semibold leading-tight truncate" title={companyName}>
                                    Almanzar Distributor
                                </h3>
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-0.5">Distributor</p>
                            </div>
                        </div>
                        {/* Mobile Close Button */}
                        <button
                            onClick={onClose}
                            className="md:hidden text-gray-500 hover:text-white transition-colors p-1"
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
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${isActive
                                        ? 'bg-[#052618] text-[#2ee59d] border border-[#0f3b28]'
                                        : 'text-gray-300 hover:text-white hover:bg-[#031c11]'
                                        }`}
                                >
                                    <span className={`text-lg ${isActive ? 'text-[#2ee59d]' : 'text-gray-400'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium text-[13px]">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 space-y-1 border-t border-[#0f3b28]/50 bg-[#021008] shrink-0">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#ff5b5b] hover:bg-[#1a0808] transition-all"
                    >
                        <BiLogOut className="text-lg" />
                        <span className="font-medium text-[13px]">Logout</span>
                    </button>
                </div>

            </div>
        </>
    );
};

export default Sidebar;