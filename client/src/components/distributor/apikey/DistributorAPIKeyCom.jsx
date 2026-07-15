import React from 'react';
import { BiRefresh, BiTrash } from 'react-icons/bi';

const DistributorAPIKeyCom = () => {
    // Mock data based on the reference design
    const apiKeys = [
        {
            id: 1,
            keyString: 'dk_live_d2d48626ae5e9ff8b457f692ea8365909443',
            created: '14 Jul 2026, 17:09',
            lastUsed: 'never',
            status: 'ACTIVE'
        },
        {
            id: 2,
            keyString: 'dk_live_58504bf4c7cd717ec3001d6239e2668f3f0c',
            created: '14 Jul 2026, 17:09',
            lastUsed: 'never',
            status: 'REVOKED'
        },
        {
            id: 3,
            keyString: 'dk_live_c594b564a7401a4a33c2b3e7e5c3963c06c9',
            created: '14 Jul 2026, 17:02',
            lastUsed: 'never',
            status: 'REVOKED'
        }
    ];

    return (
        <div className="max-w-[1400px] mx-auto space-y-8">

            {/* Header Section */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">API Credentials</h1>
                    <p className="text-gray-400 text-sm">
                        Use these with <span className="bg-[#031c11] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs">X-Api-Key</span> + <span className="bg-[#031c11] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs">X-Access-Key</span> on <span className="bg-[#031c11] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs">/api/v1</span>.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-[0_4px_14px_rgba(46,229,157,0.2)]">
                    <BiRefresh className="text-lg" />
                    Regenerate
                </button>
            </div>

            {/* API Keys List Container */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-2xl flex flex-col overflow-hidden">

                {/* Table Header */}
                <div className="p-5 border-b border-[#0f3b28]/50 bg-[#03140b]">
                    <h2 className="text-white font-semibold text-sm">Your Keys</h2>
                </div>

                {/* Keys List */}
                <div className="flex flex-col divide-y divide-[#0f3b28]/50">
                    {apiKeys.map((item) => (
                        <div key={item.id} className="p-5 flex justify-between items-center hover:bg-[#031c11]/50 transition-colors">

                            {/* Key Details */}
                            <div>
                                <p className={`font-mono text-sm mb-1.5 tracking-wide ${item.status === 'ACTIVE' ? 'text-gray-200' : 'text-gray-500'}`}>
                                    {item.keyString}
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Created {item.created} · Last used {item.lastUsed}
                                </p>
                            </div>

                            {/* Status and Actions */}
                            <div className="flex items-center gap-4">
                                {item.status === 'ACTIVE' ? (
                                    <div className="flex items-center gap-1.5 text-[#2ee59d] bg-[#052618] border border-[#0f3b28] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        <div className="w-1.5 h-1.5 bg-[#2ee59d] rounded-full animate-pulse"></div>
                                        ACTIVE
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 text-gray-400 bg-[#05140d] border border-[#0f3b28] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                                        REVOKED
                                    </div>
                                )}

                                {/* Only show delete icon for active keys, as per the screenshot */}
                                {item.status === 'ACTIVE' && (
                                    <button className="text-gray-500 hover:text-[#ff5b5b] transition-colors p-2 hover:bg-[#1a0808] rounded-lg">
                                        <BiTrash className="text-lg" />
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default DistributorAPIKeyCom;