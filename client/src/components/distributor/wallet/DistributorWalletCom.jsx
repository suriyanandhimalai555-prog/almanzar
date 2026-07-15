import React from 'react';
import {
    BiWallet,
    BiRefresh,
    BiLockAlt,
    BiDownArrowCircle
} from 'react-icons/bi';
import { BsBoxSeam } from "react-icons/bs";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { SiTether } from "react-icons/si";

const DistributorWalletCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-8">

            {/* Header Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
                    <div className="flex items-center text-gray-400 text-sm">
                        <BiWallet className="mr-2 text-lg" />
                        Top up with crypto to fund card issuance
                    </div>
                </div>
                <button className="flex items-center gap-2 border border-[#0f3b28] bg-transparent hover:bg-[#031c11] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors">
                    <BiRefresh className="text-lg" />
                    Check deposits
                </button>
            </div>

            {/* Balance Section Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Available Balance Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#052618] to-[#021008] border border-[#0f3b28] p-6 lg:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Available Balance</p>
                        <div className="flex items-end gap-3 mb-6">
                            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">$5000.00</h2>
                            <span className="bg-[#031c11] border border-[#0f3b28] text-gray-400 text-[10px] font-bold px-2 py-1 rounded mb-1">USD</span>
                        </div>
                        <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-md">
                            Funds are debited automatically when you issue or load cards through the API. Top up using any supported crypto network below.
                        </p>
                    </div>
                    {/* Watermark Icon */}
                    <BiWallet className="absolute -bottom-6 -right-6 text-[180px] text-white opacity-[0.03] pointer-events-none" />
                </div>

                {/* On Hold Card */}
                <div className="bg-[#021008] border border-[#0f3b28] p-6 lg:p-8 rounded-2xl flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">
                        <BiLockAlt className="text-base" />
                        On Hold
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">$0.00</h2>
                    <p className="text-gray-500 text-xs">
                        Reserved for in-flight withdrawals.
                    </p>
                </div>
            </div>

            {/* Top up with crypto Section */}
            <div>
                <h3 className="text-white font-bold text-lg mb-1">Top up with crypto</h3>
                <p className="text-gray-500 text-sm mb-5">Deposit or withdraw USDT across supported networks.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {/* Crypto Card 1: BEP20 */}
                    <div className="bg-[#021008] border border-[#0f3b28] p-5 rounded-2xl flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#02160d] p-2 rounded-full border border-[#0f3b28]">
                                    <SiTether className="text-[#26A17B] text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base leading-tight">USDT</h4>
                                    <p className="text-gray-500 text-xs">BEP20 · EVM</p>
                                </div>
                            </div>
                            <span className="text-gray-600 text-xs">#4</span>
                        </div>

                        <div className="flex gap-2 mb-5">
                            <span className="flex items-center gap-1 bg-[#011a11] border border-[#12422e] text-[#2ee59d] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowDownCircle /> Deposit on
                            </span>
                            <span className="flex items-center gap-1 bg-[#011a11] border border-[#12422e] text-[#2ee59d] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowUpCircle /> Withdraw on
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-2 mb-6">
                            <div className="text-gray-500 text-xs uppercase tracking-wider">USD</div>
                            <div className="text-white text-xs font-mono text-right pr-4">0.999090</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">EUR</div>
                            <div className="text-white text-xs font-mono text-right">0.874590</div>

                            <div className="text-gray-500 text-xs uppercase tracking-wider">INR</div>
                            <div className="text-white text-xs font-mono text-right pr-4">96.0345</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">AED</div>
                            <div className="text-white text-xs font-mono text-right">3.6692</div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowDownCircle className="text-lg" />
                                Deposit
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-[#0f3b28] bg-transparent hover:bg-[#031c11] text-[#2ee59d] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowUpCircle className="text-lg" />
                                Withdraw
                            </button>
                        </div>
                    </div>

                    {/* Crypto Card 2: TRC20 */}
                    <div className="bg-[#021008] border border-[#0f3b28] p-5 rounded-2xl flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#02160d] p-2 rounded-full border border-[#0f3b28]">
                                    <SiTether className="text-[#26A17B] text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base leading-tight">USDT</h4>
                                    <p className="text-gray-500 text-xs">TRC20 · TRON</p>
                                </div>
                            </div>
                            <span className="text-gray-600 text-xs">#7</span>
                        </div>

                        <div className="flex gap-2 mb-5">
                            <span className="flex items-center gap-1 bg-[#011a11] border border-[#12422e] text-[#2ee59d] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowDownCircle /> Deposit on
                            </span>
                            <span className="flex items-center gap-1 bg-[#011a11] border border-[#12422e] text-[#2ee59d] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowUpCircle /> Withdraw on
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-2 mb-6">
                            <div className="text-gray-500 text-xs uppercase tracking-wider">USD</div>
                            <div className="text-white text-xs font-mono text-right pr-4">0.999090</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">EUR</div>
                            <div className="text-white text-xs font-mono text-right">0.874590</div>

                            <div className="text-gray-500 text-xs uppercase tracking-wider">INR</div>
                            <div className="text-white text-xs font-mono text-right pr-4">96.0345</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">AED</div>
                            <div className="text-white text-xs font-mono text-right">3.6692</div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowDownCircle className="text-lg" />
                                Deposit
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-[#0f3b28] bg-transparent hover:bg-[#031c11] text-[#2ee59d] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowUpCircle className="text-lg" />
                                Withdraw
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Activity Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">

                {/* Deposit Activity */}
                <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[250px]">
                    <div className="p-5 border-b border-[#0f3b28]/50 flex justify-between items-center">
                        <div>
                            <h2 className="text-white font-semibold text-sm mb-0.5">Deposit activity</h2>
                            <p className="text-gray-500 text-xs">Live status of your crypto deposits</p>
                        </div>
                        <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-semibold transition-colors">
                            <BiRefresh className="text-base" /> Refresh
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6">
                        <p className="text-gray-500 text-sm font-medium">No deposit activity yet.</p>
                    </div>
                </div>

                {/* Wallet Ledger */}
                <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col min-h-[250px]">
                    <div className="p-5 border-b border-[#0f3b28]/50">
                        <h2 className="text-white font-semibold text-sm mb-0.5">Wallet ledger</h2>
                        <p className="text-gray-500 text-xs">Recent balance movements</p>
                    </div>

                    <div className="p-3">
                        {/* Ledger Item */}
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#031c11] transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#052618] text-[#2ee59d] p-2.5 rounded-lg border border-[#0f3b28]">
                                    <BiDownArrowCircle className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-semibold mb-0.5">Manual admin top-up</h4>
                                    <p className="text-gray-500 text-xs">02 Jul, 12:53 · admin</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[#2ee59d] font-bold text-sm mb-0.5">+$5000.00</div>
                                <div className="text-gray-500 text-[10px] uppercase tracking-wider">Deposit</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DistributorWalletCom;