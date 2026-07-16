import React from 'react';
import { BiCheckCircle, BiXCircle, BiChevronDown, BiFile } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';

const DistributorAPILogsCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">API Logs</h1>
                    <p className="text-gray-500 text-sm">
                        Every request your integration makes to the Almanzar API — with full request & response.
                    </p>
                </div>
                <div className="text-gray-500 font-medium text-sm mt-1">
                    0 entries
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden group shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-[#2B6CF0]/15 via-[#2B6CF0]/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Total Requests</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-full text-[#2B6CF0]">
                            <FiActivity className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 font-semibold text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">All time</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-green-500/15 via-green-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Successful</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-green-50 border border-green-100 p-2 rounded-full text-green-600">
                            <BiCheckCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 font-semibold text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">HTTP 2xx</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-red-500/15 via-red-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Failed</p>
                            <h2 className="text-3xl font-bold text-gray-900">0</h2>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-2 rounded-full text-red-600">
                            <BiXCircle className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 font-semibold text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Non-2xx / errors</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl relative overflow-hidden shadow-sm">
                    <div className="absolute -bottom-8 -left-8 right-0 h-24 bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-transparent blur-2xl rounded-full"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium text-xs mb-2">Success Rate</p>
                            <h2 className="text-3xl font-bold text-gray-900">0.0%</h2>
                        </div>
                        <div className="bg-purple-50 border border-purple-100 p-2 rounded-full text-purple-600">
                            <FiActivity className="text-lg" />
                        </div>
                    </div>
                    <p className="text-gray-400 font-semibold text-[10px] mt-6 relative z-10 text-right uppercase tracking-wider">Within current filter</p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center shadow-sm">
                <div className="flex-1 w-full">
                    <input
                        type="text"
                        placeholder="Endpoint path filter (e.g. /cards)"
                        className="w-full bg-[#F4F8FF] border border-gray-200 text-gray-900 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-[#2B6CF0] focus:ring-1 focus:ring-[#2B6CF0] transition-all"
                    />
                </div>

                <div className="relative w-full md:w-40">
                    <select className="w-full appearance-none bg-[#F4F8FF] border border-gray-200 text-gray-900 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[#2B6CF0] focus:ring-1 focus:ring-[#2B6CF0] cursor-pointer hover:bg-blue-50/50 transition-all">
                        <option>All Status</option>
                        <option>2xx Success</option>
                        <option>4xx Client Error</option>
                        <option>5xx Server Error</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                </div>

                <div className="relative w-full md:w-40">
                    <select className="w-full appearance-none bg-[#F4F8FF] border border-gray-200 text-gray-900 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[#2B6CF0] focus:ring-1 focus:ring-[#2B6CF0] cursor-pointer hover:bg-blue-50/50 transition-all">
                        <option>All Methods</option>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                    </select>
                    <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                </div>

                <button className="w-full md:w-auto bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] hover:opacity-90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                    Filter
                </button>
                <button className="w-full md:w-auto border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-bold transition-all">
                    Reset
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[400px] shadow-sm">
                <div className="grid grid-cols-7 px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                    <div>Method</div>
                    <div>Endpoint</div>
                    <div>HTTP</div>
                    <div>Status</div>
                    <div>Duration</div>
                    <div>Time</div>
                    <div className="text-right">Actions</div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="bg-blue-50 text-[#2B6CF0] p-4 rounded-2xl mb-4 border border-blue-100">
                        <BiFile className="text-3xl" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-1.5">No API calls logged yet</h3>
                    <p className="text-gray-500 text-xs text-center max-w-[300px]">
                        Every request your integration makes to the Almanzar API will appear here, including failures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DistributorAPILogsCom;