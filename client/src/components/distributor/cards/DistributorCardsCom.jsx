import React from 'react';
import { BiRefresh, BiCreditCard } from 'react-icons/bi';

const DistributorCardsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Cards</h1>
                    <p className="text-gray-500 text-sm">
                        0 cards issued via your API
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                    <BiRefresh className="text-lg" />
                    Sync status
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm">
                    All 0
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[500px] shadow-sm">
                <div className="grid grid-cols-7 px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                    <div>User</div>
                    <div>Type</div>
                    <div>Status</div>
                    <div>Balance</div>
                    <div>Loaded</div>
                    <div>Created</div>
                    <div className="text-right">Action</div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-blue-50 text-[#2B6CF0] p-4 rounded-2xl mb-4 border border-blue-100">
                        <BiCreditCard className="text-3xl" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-1.5">No cards yet</h3>
                    <p className="text-gray-500 text-xs text-center">
                        Cards you issue through the API will appear here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DistributorCardsCom;