import React from 'react';
import { BiCreditCard, BiCheckCircle, BiTime, BiXCircle, BiChevronDown } from 'react-icons/bi';

const DistributorPhysicalCardsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Physical Cards</h1>
                <p className="text-gray-500 text-sm">
                    Manage your physical card pool and pre-assignments
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden group shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2B6CF0]/10 via-[#2B6CF0]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Total</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-xl text-[#2B6CF0]">
                            <BiCreditCard className="text-lg" />
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2B6CF0]/10 via-[#2B6CF0]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Available</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-xl text-[#2B6CF0]">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Pre-Assigned</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-100 p-2 rounded-xl text-yellow-600">
                            <BiTime className="text-lg" />
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Used</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-2 rounded-xl text-red-600">
                            <BiXCircle className="text-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm py-2 pl-4 pr-10 rounded-xl outline-none focus:border-[#2B6CF0] focus:ring-1 focus:ring-[#2B6CF0] cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Pre-Assigned</option>
                        <option>Used</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                </div>
                <div className="text-gray-500 font-medium text-sm">
                    0 cards
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[450px] shadow-sm">
                <div className="grid grid-cols-6 px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                    <div>Card Number</div>
                    <div>Status</div>
                    <div>Pre-Assigned To</div>
                    <div>Pre-Assigned At</div>
                    <div>Used By</div>
                    <div className="text-right">Actions</div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-blue-50 text-[#2B6CF0] p-4 rounded-2xl mb-4 border border-blue-100">
                        <BiCreditCard className="text-3xl" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-1.5">Pool is empty</h3>
                    <p className="text-gray-500 text-xs text-center max-w-sm">
                        Once admin adds physical cards to your pool, you can pre-assign them here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DistributorPhysicalCardsCom;