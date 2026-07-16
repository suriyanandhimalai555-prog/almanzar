import React from 'react';
import { BsBoxSeam } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ onMenuClick }) => {
    return (
        <div className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shrink-0 shadow-sm">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden text-gray-500 hover:text-[#2B6CF0] transition-colors p-1"
                >
                    <FiMenu className="text-2xl" />
                </button>
                <h1 className="text-gray-900 font-semibold text-lg hidden md:block">Dashboard</h1>
            </div>

            <div className="flex items-center gap-2 text-[#1E40AF] bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                <BsBoxSeam className="text-sm shrink-0" />
                <span className="hidden sm:inline">DISTRIBUTOR</span>
            </div>
        </div>
    );
};

export default Navbar;