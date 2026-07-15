import React from 'react';
import { BiCheckCircle, BiXCircle, BiChevronDown, BiFile } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';

const DistributorAPILogsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">

            {/* Header Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">API Logs</h1>
                    <p className="text-gray-400 text-sm">
                        Every request your integration makes to the Almanzar API — with full request & response.
                    </p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                    0 entries
                </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card 1: Total Requests (Blue) */}
                <div className="bg-[#03140b] border border-[#3b82f6]/30 p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#3b82f6]/15 via-[#3b82f6]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Total Requests</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#051826] border border-[#0f253b] p-2 rounded-full text-[#3b82f6]">
                            <FiActivity className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">All time</p>
                </div>

                {/* Card 2: Successful (Green) */}
                <div className="bg-[#03140b] border border-[#2ee59d]/30 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2ee59d]/15 via-[#2ee59d]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Successful</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#052618] border border-[#0f3b28] p-2 rounded-full text-[#2ee59d]">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">HTTP 2xx</p>
                </div>

                {/* Card 3: Failed (Red) */}
                <div className="bg-[#03140b] border border-[#ef4444]/30 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#ef4444]/15 via-[#ef4444]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Failed</p>
                            <h2 className="text-3xl font-bold text-white">0</h2>
                        </div>
                        <div className="bg-[#2a0a0a] border border-[#4a1212] p-2 rounded-full text-[#ef4444]">
                            <BiXCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Non-2xx / errors</p>
                </div>

                {/* Card 4: Success Rate (Purple) */}
                <div className="bg-[#03140b] border border-[#a855f7]/30 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#a855f7]/15 via-[#a855f7]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs mb-2">Success Rate</p>
                            <h2 className="text-3xl font-bold text-white">0.0%</h2>
                        </div>
                        <div className="bg-[#1b0526] border border-[#2b0f3b] p-2 rounded-full text-[#a855f7]">
                            <FiActivity className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-500 text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Within current filter</p>
                </div>

            </div>

            {/* Filter Bar */}
            <div className="bg-[#021008] border border-[#0f3b28] p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center">

                {/* Endpoint Search */}
                <div className="flex-1 w-full">
                    <input
                        type="text"
                        placeholder="Endpoint path filter (e.g. /cards)"
                        className="w-full bg-[#021008] border border-[#0f3b28] text-gray-300 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-[#2ee59d] transition-colors"
                    />
                </div>

                {/* Status Dropdown */}
                <div className="relative w-full md:w-40">
                    <select className="w-full appearance-none bg-[#021008] border border-[#0f3b28] text-gray-300 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[#2ee59d] cursor-pointer hover:bg-[#031c11] transition-colors">
                        <option>All Status</option>
                        <option>2xx Success</option>
                        <option>4xx Client Error</option>
                        <option>5xx Server Error</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
                </div>

                {/* Methods Dropdown */}
                <div className="relative w-full md:w-40">
                    <select className="w-full appearance-none bg-[#021008] border border-[#0f3b28] text-gray-300 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[#2ee59d] cursor-pointer hover:bg-[#031c11] transition-colors">
                        <option>All Methods</option>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
                </div>

                {/* Actions */}
                <button className="w-full md:w-auto bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] px-6 py-2.5 rounded-xl text-sm font-bold transition-colors">
                    Filter
                </button>
                <button className="w-full md:w-auto border border-[#0f3b28] hover:bg-[#031c11] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors">
                    Reset
                </button>
            </div>

            {/* Logs Table Container */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[400px]">

                {/* Table Headers */}
                <div className="grid grid-cols-7 px-6 py-4 border-b border-[#0f3b28]/50 text-[#3b664d] text-[10px] font-bold tracking-widest uppercase">
                    <div>Method</div>
                    <div>Endpoint</div>
                    <div>HTTP</div>
                    <div>Status</div>
                    <div>Duration</div>
                    <div>Time</div>
                    <div className="text-right">Actions</div>
                </div>

                {/* Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-[#052618] text-[#2ee59d] p-4 rounded-2xl mb-4 border border-[#0f3b28]">
                        <BiFile className="text-3xl" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1.5">No API calls logged yet</h3>
                    <p className="text-gray-500 text-xs text-center max-w-[300px]">
                        Every request your integration makes to the Almanzar API will appear here, including failures.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default DistributorAPILogsCom;