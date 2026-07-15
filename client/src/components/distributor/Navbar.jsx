import React from 'react';
import { BsBoxSeam } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ onMenuClick }) => {
    return (
        <div className="h-[72px] bg-[#021008] border-b border-[#0f3b28] flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shrink-0">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
                >
                    <FiMenu className="text-2xl" />
                </button>
                <h1 className="text-white font-semibold text-lg hidden md:block">Dashboard</h1>
            </div>

            <div className="flex items-center gap-2 text-[#2ee59d] bg-[#052618] border border-[#0f3b28] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                <BsBoxSeam className="text-sm shrink-0" />
                <span className="hidden sm:inline">DISTRIBUTOR</span>
            </div>
        </div>
    );
};

export default Navbar;