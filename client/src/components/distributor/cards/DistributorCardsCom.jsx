import React from 'react';
import { BiRefresh, BiCreditCard } from 'react-icons/bi';

const DistributorCardsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">

            {/* Header Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Cards</h1>
                    <p className="text-gray-400 text-sm">
                        0 cards issued via your API
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-[0_4px_14px_rgba(46,229,157,0.2)]">
                    <BiRefresh className="text-lg" />
                    Sync status
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
                <button className="bg-[#2ee59d] text-[#02160d] px-4 py-1.5 rounded-full text-xs font-bold transition-colors">
                    All 0
                </button>
            </div>

            {/* Cards Table Container */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[500px]">

                {/* Table Headers */}
                <div className="grid grid-cols-7 px-6 py-4 border-b border-[#0f3b28]/50 text-[#3b664d] text-[10px] font-bold tracking-widest uppercase">
                    <div>User</div>
                    <div>Type</div>
                    <div>Status</div>
                    <div>Balance</div>
                    <div>Loaded</div>
                    <div>Created</div>
                    <div className="text-right">Action</div>
                </div>

                {/* Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-[#052618] text-[#2ee59d] p-4 rounded-2xl mb-4 border border-[#0f3b28]">
                        <BiCreditCard className="text-3xl" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1.5">No cards yet</h3>
                    <p className="text-gray-500 text-xs text-center">
                        Cards you issue through the API will appear here.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default DistributorCardsCom;