import React from 'react';
import { BiWallet, BiUser, BiCreditCard, BiCheckCircle } from 'react-icons/bi';
import { FiArrowDownLeft } from 'react-icons/fi';

const DistributorDashboardCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">

            {/* Header Section */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Prabu</h1>
                    <p className="text-gray-400 text-sm">Your distributor account at a glance</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#2ee59d] bg-[#052618] border border-[#0f3b28] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider">
                    <div className="w-1.5 h-1.5 bg-[#2ee59d] rounded-full animate-pulse"></div>
                    ACTIVE
                </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card 1: Wallet */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden group">
                    {/* Subtle Green Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2ee59d]/10 via-[#2ee59d]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-1">Wallet (USD)</p>
                            <h2 className="text-3xl font-bold text-white">$5000.00</h2>
                        </div>
                        <div className="bg-[#052618] border border-[#0f3b28] p-2 rounded-xl text-[#2ee59d]">
                            <BiWallet className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Available balance</p>
                </div>

                {/* Card 2: Users */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Blue Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#3b82f6]/10 via-[#3b82f6]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-1">Users</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#051826] border border-[#0f253b] p-2 rounded-xl text-[#3b82f6]">
                            <BiUser className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Registered under you</p>
                </div>

                {/* Card 3: Total Cards */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Purple Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#a855f7]/10 via-[#a855f7]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-1">Total Cards</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#1b0526] border border-[#2b0f3b] p-2 rounded-xl text-[#a855f7]">
                            <BiCreditCard className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Issued via API</p>
                </div>

                {/* Card 4: Active Cards */}
                <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-2xl relative overflow-hidden">
                    {/* Subtle Yellow Bottom Glow */}
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#eab308]/10 via-[#eab308]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-1">Active Cards</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#261f05] border border-[#3b320f] p-2 rounded-xl text-[#eab308]">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Currently active</p>
                </div>

            </div>

            {/* Main Panels Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">

                {/* Left Panel: My Users */}
                <div className="lg:col-span-2 bg-[#03140b] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[350px]">
                    {/* Header */}
                    <div className="p-5 border-b border-[#0f3b28]/50 flex justify-between items-center">
                        <div>
                            <h2 className="text-white font-semibold text-sm mb-0.5">My Users</h2>
                            <p className="text-gray-500 text-xs">0 total</p>
                        </div>
                        <button className="text-[#2ee59d] text-xs font-semibold hover:underline">View all &rarr;</button>
                    </div>

                    {/* Table Headers */}
                    <div className="grid grid-cols-4 px-5 py-3 border-b border-[#0f3b28]/50 text-gray-500 text-[10px] font-bold tracking-wider uppercase">
                        <div>User</div>
                        <div>Mobile</div>
                        <div>Cardholder</div>
                        <div>Joined</div>
                    </div>

                    {/* Empty State */}
                    <div className="flex-1 flex flex-col items-center justify-center p-10">
                        <div className="bg-[#052618] text-[#2ee59d] p-4 rounded-2xl mb-4 border border-[#0f3b28]">
                            <BiUser className="text-3xl" />
                        </div>
                        <h3 className="text-white font-bold text-sm mb-1">No users yet</h3>
                        <p className="text-gray-500 text-xs text-center">Users you register via the API appear here.</p>
                    </div>
                </div>

                {/* Right Panel: Wallet Activity */}
                <div className="bg-[#03140b] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[350px]">
                    {/* Header */}
                    <div className="p-5 border-b border-[#0f3b28]/50 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h2 className="text-white font-semibold text-sm">Wallet activity</h2>
                        </div>
                        <button className="text-[#2ee59d] text-xs font-semibold hover:underline">View all &rarr;</button>
                    </div>

                    {/* Activity List */}
                    <div className="p-3">
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#051c11] transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#052618] text-[#2ee59d] p-2 rounded-lg border border-[#0f3b28]">
                                    <FiArrowDownLeft className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-semibold">Top-up</h4>
                                    <p className="text-gray-500 text-xs">Manual (admin) · 02 Jul 2026</p>
                                </div>
                            </div>
                            <div className="text-[#2ee59d] font-bold text-sm">
                                +$5000.00
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DistributorDashboardCom;