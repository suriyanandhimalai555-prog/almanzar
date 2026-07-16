import React from 'react';
import { BiRefresh, BiTrash } from 'react-icons/bi';

const DistributorAPIKeyCom = () => {
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

            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">API Credentials</h1>
                    <p className="text-gray-500 text-sm">
                        Use these with <span className="bg-blue-50 border border-blue-200 text-[#1E40AF] font-bold font-mono px-1.5 py-0.5 rounded text-xs">X-Api-Key</span> + <span className="bg-blue-50 border border-blue-200 text-[#1E40AF] font-bold font-mono px-1.5 py-0.5 rounded text-xs">X-Access-Key</span> on <span className="bg-blue-50 border border-blue-200 text-[#1E40AF] font-bold font-mono px-1.5 py-0.5 rounded text-xs">/api/v1</span>.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                    <BiRefresh className="text-lg" />
                    Regenerate
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">

                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-gray-900 font-bold text-sm">Your Keys</h2>
                </div>

                <div className="flex flex-col divide-y divide-gray-100">
                    {apiKeys.map((item) => (
                        <div key={item.id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors">

                            <div>
                                <p className={`font-mono text-sm mb-1.5 tracking-wide font-medium ${item.status === 'ACTIVE' ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {item.keyString}
                                </p>
                                <p className="text-gray-500 text-xs font-medium">
                                    Created {item.created} · Last used {item.lastUsed}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                {item.status === 'ACTIVE' ? (
                                    <div className="flex items-center gap-1.5 text-[#2B6CF0] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2B6CF0] rounded-full animate-pulse"></div>
                                        ACTIVE
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        REVOKED
                                    </div>
                                )}

                                {item.status === 'ACTIVE' && (
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg">
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