import React from 'react';
import {
    BiRefresh,
    BiSearch,
    BiPlusCircle,
    BiWallet
} from 'react-icons/bi';
import { BsLayers, BsArrowLeftRight } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";

const DistributorTransactionsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-8">

            {/* Header Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Transactions</h1>
                    <div className="flex items-center text-gray-400 text-sm">
                        <BsArrowLeftRight className="mr-2 text-base" />
                        Card funding & card spend activity
                    </div>
                </div>
                <button className="flex items-center gap-2 border border-[#0f3b28] bg-transparent hover:bg-[#031c11] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors">
                    <BiRefresh className="text-lg" />
                    Refresh
                </button>
            </div>

            {/* Action Bar (Filters & Search) */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center gap-2 bg-[#2ee59d] text-[#02160d] px-4 py-2.5 rounded-full text-xs font-bold transition-all">
                        <BsLayers className="text-sm" /> All
                    </button>
                    <button className="flex items-center gap-2 border border-[#0f3b28] text-gray-300 hover:text-white bg-transparent hover:bg-[#031c11] px-4 py-2.5 rounded-full text-xs font-semibold transition-all">
                        <BsArrowLeftRight className="text-sm" /> Wallet
                    </button>
                    <button className="flex items-center gap-2 border border-[#0f3b28] text-gray-300 hover:text-white bg-transparent hover:bg-[#031c11] px-4 py-2.5 rounded-full text-xs font-semibold transition-all">
                        <BiWallet className="text-sm" /> Card funding
                    </button>
                    <button className="flex items-center gap-2 border border-[#0f3b28] text-gray-300 hover:text-white bg-transparent hover:bg-[#031c11] px-4 py-2.5 rounded-full text-xs font-semibold transition-all">
                        <FiCreditCard className="text-sm" /> Card usage
                    </button>
                </div>

                {/* Search Inputs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
                    <div className="flex items-center bg-[#021008] border border-[#0f3b28] rounded-xl px-4 py-2.5 w-full sm:w-[280px] focus-within:border-[#2ee59d] transition-colors group">
                        <BiSearch className="text-gray-500 group-focus-within:text-[#2ee59d] mr-2 text-lg transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by username / email"
                            className="bg-transparent w-full outline-none text-white text-xs placeholder-gray-600"
                        />
                    </div>
                    <div className="flex items-center bg-[#021008] border border-[#0f3b28] rounded-xl px-4 py-2.5 w-full sm:w-[280px] focus-within:border-[#2ee59d] transition-colors group">
                        <BiSearch className="text-gray-500 group-focus-within:text-[#2ee59d] mr-2 text-lg transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by card number..."
                            className="bg-transparent w-full outline-none text-white text-xs placeholder-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl overflow-x-auto">
                <div className="min-w-[900px]">

                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr_1.5fr_1.5fr] gap-4 px-8 py-5 border-b border-[#0f3b28]/50 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                        <div>User</div>
                        <div>Activity</div>
                        <div>Kind</div>
                        <div>Card</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div className="text-right">Date</div>
                    </div>

                    {/* Table Body */}
                    <div className="p-2">

                        {/* Highlighted Row */}
                        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr_1.5fr_1.5fr] items-center gap-4 px-6 py-4 bg-[#031c11] border border-[#0f3b28] rounded-[1rem] hover:bg-[#052618] transition-colors cursor-pointer">

                            {/* User Column */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#021008] border border-[#0f3b28] text-[#2ee59d] flex items-center justify-center text-xs font-bold">
                                    ?
                                </div>
                                <span className="text-white text-sm font-medium">—</span>
                            </div>

                            {/* Activity Column */}
                            <div className="flex items-center gap-3">
                                <div className="bg-[#021008] border border-[#0f3b28] rounded-full p-1.5 text-[#2ee59d]">
                                    <BiPlusCircle className="text-sm" />
                                </div>
                                <span className="text-white text-sm font-medium">Manual top-up</span>
                            </div>

                            {/* Kind Column */}
                            <div>
                                <span className="bg-[#021008] border border-[#0f3b28] text-gray-400 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                                    Wallet
                                </span>
                            </div>

                            {/* Card Column */}
                            <div>
                                <span className="text-gray-500 text-sm">—</span>
                            </div>

                            {/* Amount Column */}
                            <div>
                                <span className="text-white font-bold text-sm tracking-wide">+$5000.00</span>
                            </div>

                            {/* Status Column */}
                            <div>
                                <span className="flex items-center w-max gap-1.5 bg-[#011a11] border border-[#12422e] text-[#2ee59d] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-[#2ee59d] rounded-full"></div>
                                    Completed
                                </span>
                            </div>

                            {/* Date Column */}
                            <div className="text-gray-400 text-xs text-right tracking-wide">
                                02 Jul 2026, 12:53
                            </div>

                        </div>

                        {/* If there are no other transactions, you could place an empty state here or map through more rows as they are added via API. */}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DistributorTransactionsCom;