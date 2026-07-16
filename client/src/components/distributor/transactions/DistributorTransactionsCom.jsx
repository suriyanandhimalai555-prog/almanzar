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

            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <BsArrowLeftRight className="mr-2 text-base" />
                        Card funding & card spend activity
                    </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-sm">
                    <BiRefresh className="text-lg text-[#2B6CF0]" />
                    Refresh
                </button>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">

                <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm">
                        <BsLayers className="text-sm" /> All
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:text-[#1E40AF] bg-white hover:bg-blue-50 px-4 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm">
                        <BsArrowLeftRight className="text-sm" /> Wallet
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:text-[#1E40AF] bg-white hover:bg-blue-50 px-4 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm">
                        <BiWallet className="text-sm" /> Card funding
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:text-[#1E40AF] bg-white hover:bg-blue-50 px-4 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm">
                        <FiCreditCard className="text-sm" /> Card usage
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:w-[280px] focus-within:border-[#2B6CF0] focus-within:ring-1 focus-within:ring-[#2B6CF0] transition-all group shadow-sm">
                        <BiSearch className="text-gray-400 group-focus-within:text-[#2B6CF0] mr-2 text-lg transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by username / email"
                            className="bg-transparent w-full outline-none text-gray-900 text-xs placeholder-gray-400"
                        />
                    </div>
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2.5 w-full sm:w-[280px] focus-within:border-[#2B6CF0] focus-within:ring-1 focus-within:ring-[#2B6CF0] transition-all group shadow-sm">
                        <BiSearch className="text-gray-400 group-focus-within:text-[#2B6CF0] mr-2 text-lg transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by card number..."
                            className="bg-transparent w-full outline-none text-gray-900 text-xs placeholder-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-x-auto shadow-sm">
                <div className="min-w-[900px]">

                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr_1.5fr_1.5fr] gap-4 px-8 py-4 border-b border-gray-100 bg-gray-50/50 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                        <div>User</div>
                        <div>Activity</div>
                        <div>Kind</div>
                        <div>Card</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div className="text-right">Date</div>
                    </div>

                    <div className="p-2">

                        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr_1.5fr_1.5fr] items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-[1rem] hover:bg-blue-50/50 hover:border-blue-100 transition-colors cursor-pointer mb-1">

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-[#2B6CF0] flex items-center justify-center text-xs font-bold">
                                    ?
                                </div>
                                <span className="text-gray-900 text-sm font-bold">—</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-50 border border-blue-100 rounded-full p-1.5 text-[#2B6CF0]">
                                    <BiPlusCircle className="text-sm" />
                                </div>
                                <span className="text-gray-900 text-sm font-bold">Manual top-up</span>
                            </div>

                            <div>
                                <span className="bg-gray-100 border border-gray-200 text-gray-600 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                                    Wallet
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-500 text-sm font-medium">—</span>
                            </div>

                            <div>
                                <span className="text-green-600 font-bold text-sm tracking-wide">+$5000.00</span>
                            </div>

                            <div>
                                <span className="flex items-center w-max gap-1.5 bg-green-50 border border-green-200 text-green-700 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    Completed
                                </span>
                            </div>

                            <div className="text-gray-500 text-xs font-medium text-right tracking-wide">
                                02 Jul 2026, 12:53
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default DistributorTransactionsCom;