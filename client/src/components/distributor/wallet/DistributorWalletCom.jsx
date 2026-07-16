import React from 'react';
import {
    BiWallet,
    BiRefresh,
    BiLockAlt,
    BiDownArrowCircle
} from 'react-icons/bi';
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { SiTether } from "react-icons/si";

const DistributorWalletCom = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-8">

            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet</h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <BiWallet className="mr-2 text-lg" />
                        Top up with crypto to fund card issuance
                    </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-sm">
                    <BiRefresh className="text-lg text-[#2B6CF0]" />
                    Check deposits
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 bg-gradient-to-br from-[#2B6CF0] to-[#1E40AF] border border-blue-800 p-6 lg:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-md">
                    <div className="relative z-10">
                        <p className="text-blue-100 text-xs font-bold tracking-widest uppercase mb-2">Available Balance</p>
                        <div className="flex items-end gap-3 mb-6">
                            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">$5000.00</h2>
                            <span className="bg-blue-900/40 border border-blue-400/30 text-blue-100 text-[10px] font-bold px-2 py-1 rounded mb-1">USD</span>
                        </div>
                        <p className="text-blue-100/80 text-xs lg:text-sm leading-relaxed max-w-md">
                            Funds are debited automatically when you issue or load cards through the API. Top up using any supported crypto network below.
                        </p>
                    </div>
                    <BiWallet className="absolute -bottom-6 -right-6 text-[180px] text-white opacity-[0.06] pointer-events-none" />
                </div>

                <div className="bg-white border border-gray-200 p-6 lg:p-8 rounded-2xl flex flex-col justify-center shadow-sm">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold tracking-widest uppercase mb-3">
                        <BiLockAlt className="text-base text-yellow-500" />
                        On Hold
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">$0.00</h2>
                    <p className="text-gray-500 text-xs">
                        Reserved for in-flight withdrawals.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-gray-900 font-bold text-lg mb-1">Top up with crypto</h3>
                <p className="text-gray-500 text-sm mb-5">Deposit or withdraw USDT across supported networks.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <div className="bg-white border border-gray-200 p-5 rounded-2xl flex flex-col shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-50 p-2 rounded-full border border-gray-200">
                                    <SiTether className="text-[#26A17B] text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold text-base leading-tight">USDT</h4>
                                    <p className="text-gray-500 text-xs">BEP20 · EVM</p>
                                </div>
                            </div>
                            <span className="text-gray-400 font-medium text-xs">#4</span>
                        </div>

                        <div className="flex gap-2 mb-5">
                            <span className="flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowDownCircle /> Deposit on
                            </span>
                            <span className="flex items-center gap-1 bg-blue-50 border border-blue-200 text-[#1E40AF] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowUpCircle /> Withdraw on
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-2 mb-6">
                            <div className="text-gray-500 text-xs uppercase tracking-wider">USD</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right pr-4">0.999090</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">EUR</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right">0.874590</div>

                            <div className="text-gray-500 text-xs uppercase tracking-wider">INR</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right pr-4">96.0345</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">AED</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right">3.6692</div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] text-white py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                                <FiArrowDownCircle className="text-lg" />
                                Deposit
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-blue-200 bg-white hover:bg-blue-50 text-[#1E40AF] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowUpCircle className="text-lg" />
                                Withdraw
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-2xl flex flex-col shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-50 p-2 rounded-full border border-gray-200">
                                    <SiTether className="text-[#26A17B] text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold text-base leading-tight">USDT</h4>
                                    <p className="text-gray-500 text-xs">TRC20 · TRON</p>
                                </div>
                            </div>
                            <span className="text-gray-400 font-medium text-xs">#7</span>
                        </div>

                        <div className="flex gap-2 mb-5">
                            <span className="flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowDownCircle /> Deposit on
                            </span>
                            <span className="flex items-center gap-1 bg-blue-50 border border-blue-200 text-[#1E40AF] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                                <FiArrowUpCircle /> Withdraw on
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-2 mb-6">
                            <div className="text-gray-500 text-xs uppercase tracking-wider">USD</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right pr-4">0.999090</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">EUR</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right">0.874590</div>

                            <div className="text-gray-500 text-xs uppercase tracking-wider">INR</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right pr-4">96.0345</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider pl-2">AED</div>
                            <div className="text-gray-900 text-xs font-mono font-medium text-right">3.6692</div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] text-white py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                                <FiArrowDownCircle className="text-lg" />
                                Deposit
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-blue-200 bg-white hover:bg-blue-50 text-[#1E40AF] py-2.5 rounded-xl text-sm font-bold transition-colors">
                                <FiArrowUpCircle className="text-lg" />
                                Withdraw
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">

                <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[250px] shadow-sm">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-gray-900 font-bold text-sm mb-0.5">Deposit activity</h2>
                            <p className="text-gray-500 text-xs">Live status of your crypto deposits</p>
                        </div>
                        <button className="flex items-center gap-1.5 text-[#2B6CF0] hover:underline text-xs font-semibold transition-colors">
                            <BiRefresh className="text-base" /> Refresh
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6">
                        <p className="text-gray-500 text-sm font-medium">No deposit activity yet.</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl flex flex-col min-h-[250px] shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h2 className="text-gray-900 font-bold text-sm mb-0.5">Wallet ledger</h2>
                        <p className="text-gray-500 text-xs">Recent balance movements</p>
                    </div>

                    <div className="p-3">
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default border border-transparent hover:border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-50 text-[#2B6CF0] p-2.5 rounded-lg border border-blue-100">
                                    <BiDownArrowCircle className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 text-sm font-bold mb-0.5">Manual admin top-up</h4>
                                    <p className="text-gray-500 text-xs">02 Jul, 12:53 · admin</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-green-600 font-bold text-sm mb-0.5">+$5000.00</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Deposit</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DistributorWalletCom;