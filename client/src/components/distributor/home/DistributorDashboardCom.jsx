import React from 'react';
import { BiWallet, BiUser, BiCreditCard, BiCheckCircle } from 'react-icons/bi';
import { FiArrowDownLeft } from 'react-icons/fi';

const DistributorDashboardCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">

            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Prabu</h1>
                    <p className="text-gray-500 text-sm">Your distributor account at a glance</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#1E40AF] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider shadow-sm">
                    <div className="w-1.5 h-1.5 bg-[#2B6CF0] rounded-full animate-pulse"></div>
                    ACTIVE
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden group shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2B6CF0]/10 via-[#2B6CF0]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">Wallet (USD)</p>
                            <h2 className="text-3xl font-bold text-gray-900">$5000.00</h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-xl text-[#2B6CF0]">
                            <BiWallet className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider font-semibold">Available balance</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">Users</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-xl text-blue-500">
                            <BiUser className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider font-semibold">Registered under you</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">Total Cards</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-purple-50 border border-purple-100 p-2 rounded-xl text-purple-500">
                            <BiCreditCard className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider font-semibold">Issued via API</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">Active Cards</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-100 p-2 rounded-xl text-yellow-500">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider font-semibold">Currently active</p>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">

                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[350px] shadow-sm">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-gray-900 font-bold text-sm mb-0.5">My Users</h2>
                            <p className="text-gray-500 text-xs">0 total</p>
                        </div>
                        <button className="text-[#2B6CF0] text-xs font-semibold hover:underline">View all &rarr;</button>
                    </div>

                    <div className="grid grid-cols-4 px-5 py-3 border-b border-gray-100 bg-gray-50/50 text-gray-500 text-[10px] font-bold tracking-wider uppercase">
                        <div>User</div>
                        <div>Mobile</div>
                        <div>Cardholder</div>
                        <div>Joined</div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center p-10">
                        <div className="bg-blue-50 text-[#2B6CF0] p-4 rounded-2xl mb-4 border border-blue-100">
                            <BiUser className="text-3xl" />
                        </div>
                        <h3 className="text-gray-900 font-bold text-sm mb-1">No users yet</h3>
                        <p className="text-gray-500 text-xs text-center">Users you register via the API appear here.</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[350px] shadow-sm">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h2 className="text-gray-900 font-bold text-sm">Wallet activity</h2>
                        </div>
                        <button className="text-[#2B6CF0] text-xs font-semibold hover:underline">View all &rarr;</button>
                    </div>

                    <div className="p-3">
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-50 text-[#2B6CF0] p-2 rounded-lg border border-blue-100">
                                    <FiArrowDownLeft className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 text-sm font-semibold">Top-up</h4>
                                    <p className="text-gray-500 text-xs">Manual (admin) · 02 Jul 2026</p>
                                </div>
                            </div>
                            <div className="text-green-600 font-bold text-sm">
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