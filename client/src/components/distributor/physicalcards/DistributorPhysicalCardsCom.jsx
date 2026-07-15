import React from 'react';
import { BiCreditCard, BiCheckCircle, BiTime, BiXCircle, BiChevronDown } from 'react-icons/bi';

const DistributorPhysicalCardsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">

            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Physical Cards</h1>
                <p className="text-gray-400 text-sm">
                    Manage your physical card pool and pre-assignments
                </p>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card 1: Total */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden group">
                    {/* Subtle Green Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2ee59d]/15 via-[#2ee59d]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Total</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#052618] border border-[#0f3b28] p-2 rounded-xl text-[#2ee59d]">
                            <BiCreditCard className="text-lg" />
                        </div>
                    </div>
                </div>

                {/* Card 2: Available */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Green Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2ee59d]/15 via-[#2ee59d]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Available</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#052618] border border-[#0f3b28] p-2 rounded-xl text-[#2ee59d]">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                </div>

                {/* Card 3: Pre-Assigned */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Yellow/Orange Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#eab308]/15 via-[#eab308]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Pre-Assigned</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#261f05] border border-[#3b320f] p-2 rounded-xl text-[#eab308]">
                            <BiTime className="text-lg" />
                        </div>
                    </div>
                </div>

                {/* Card 4: Used */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Red Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#ef4444]/15 via-[#ef4444]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Used</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#2a0a0a] border border-[#4a1212] p-2 rounded-xl text-[#ef4444]">
                            <BiXCircle className="text-lg" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Filter and Count Section */}
            <div className="flex justify-between items-center">
                <div className="relative">
                    <select className="appearance-none bg-[#021008] border border-[#0f3b28] text-gray-300 text-sm py-2 pl-4 pr-10 rounded-xl outline-none focus:border-[#2ee59d] cursor-pointer hover:bg-[#031c11] transition-colors">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Pre-Assigned</option>
                        <option>Used</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
                </div>
                <div className="text-gray-400 text-sm">
                    0 cards
                </div>
            </div>

            {/* Cards Table Container */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[450px]">

                {/* Table Headers */}
                <div className="grid grid-cols-6 px-6 py-4 border-b border-[#0f3b28]/50 text-[#3b664d] text-[10px] font-bold tracking-widest uppercase">
                    <div>Card Number</div>
                    <div>Status</div>
                    <div>Pre-Assigned To</div>
                    <div>Pre-Assigned At</div>
                    <div>Used By</div>
                    <div className="text-right">Actions</div>
                </div>

                {/* Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-[#052618] text-[#2ee59d] p-4 rounded-2xl mb-4 border border-[#0f3b28]">
                        <BiCreditCard className="text-3xl" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1.5">Pool is empty</h3>
                    <p className="text-gray-500 text-xs text-center max-w-sm">
                        Once admin adds physical cards to your pool, you can pre-assign them here.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default DistributorPhysicalCardsCom;