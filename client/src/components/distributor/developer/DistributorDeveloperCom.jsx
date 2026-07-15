import React from 'react';
import {
    BiCodeAlt,
    BiCloudDownload,
    BiLinkExternal,
    BiInfoCircle,
    BiCopy,
    BiError
} from 'react-icons/bi';
import { SiPostman } from "react-icons/si";

const DistributorDeveloperCom = () => {
    return (
        <div className="max-w-[1200px] mx-auto space-y-8 pb-16">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="flex items-center text-3xl font-bold text-white mb-2">
                        <BiCodeAlt className="text-[#2ee59d] mr-3 text-4xl" />
                        Developer / API Reference
                    </h1>
                    <p className="text-gray-400 text-sm">
                        The reference below is the exact document you can download as PDF or import into Postman.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-[#0f3b28] bg-[#021008] hover:bg-[#031c11] text-gray-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors">
                        <SiPostman className="text-base" />
                        Postman Collection
                    </button>
                    <button className="flex items-center gap-2 bg-[#2ee59d] hover:bg-[#25c485] text-[#02160d] px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-[0_4px_14px_rgba(46,229,157,0.2)]">
                        <BiCloudDownload className="text-base" />
                        Download PDF
                    </button>
                    <button className="flex items-center gap-2 border border-[#0f3b28] bg-[#021008] hover:bg-[#031c11] text-gray-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors">
                        <BiLinkExternal className="text-base" />
                        Open
                    </button>
                </div>
            </div>

            {/* Main Documentation Container */}
            <div className="bg-[#021008] border border-[#0f3b28] rounded-3xl p-6 md:p-10 lg:p-14 space-y-20 relative overflow-hidden">

                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2ee59d]/5 blur-[150px] pointer-events-none rounded-full"></div>

                {/* --- SECTION 1: OVERVIEW --- */}
                <section>
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-[#2ee59d]"></div>
                            <span className="text-[#2ee59d] text-[10px] font-bold tracking-widest uppercase">Card Issuing API</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Distributor Card API</h2>
                        <p className="text-gray-300 leading-relaxed max-w-2xl text-sm">
                            Create cardholders, run KYC, and issue virtual cards programmatically — from one prepaid wallet, over a single REST interface.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
                        {/* Virtual Card Graphic */}
                        <div className="lg:col-span-3 bg-gradient-to-br from-indigo-600 via-[#3b5bdb] to-[#12b886] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(46,229,157,0.15)] aspect-[1.6/1]">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-bold text-lg tracking-wide">Almanzar</h3>
                                    <p className="text-white/70 text-[10px] tracking-widest uppercase font-semibold">Virtual</p>
                                </div>
                                <div className="w-12 h-8 bg-yellow-400/90 rounded-md shadow-sm"></div>
                            </div>
                            <div className="text-white font-mono text-2xl tracking-[0.2em] opacity-90 mt-auto mb-6">
                                4111 .... .... 1234
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-white/60 text-[8px] tracking-widest uppercase mb-1">Holder</p>
                                        <p className="text-white text-xs font-mono">183633</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-[8px] tracking-widest uppercase mb-1">Expires</p>
                                        <p className="text-white text-xs font-mono">12 / 28</p>
                                    </div>
                                </div>
                                <div className="text-white font-bold text-xl italic tracking-wider">VISA</div>
                            </div>
                        </div>

                        {/* Endpoint Info Cards */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Base URL</p>
                                <p className="text-[#2ee59d] font-mono text-xs break-all">https://uat-cards.almanzarcards.com/api/v1</p>
                            </div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Format</p>
                                <p className="text-gray-300 font-mono text-xs">JSON · multipart/form-data</p>
                            </div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Card Type</p>
                                <p className="text-gray-300 font-mono text-xs">virtual · prepaid</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Overview</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
                            The Distributor Card API lets you onboard end users, verify their identity, and issue prepaid virtual cards funded from your wallet balance. Every card is tied to a verified cardholder, and funds load directly from your prepaid wallet at issue time.
                        </p>
                        <div className="bg-[#052618] border border-[#0f3b28] p-4 rounded-xl flex items-start gap-4 text-gray-300 text-sm">
                            <div className="bg-[#2ee59d] text-[#02160d] rounded-full p-1 shrink-0 mt-0.5">
                                <BiInfoCircle className="text-sm" />
                            </div>
                            <p>
                                This reference targets the <strong className="text-white">UAT / sandbox</strong> environment. Endpoints, request shapes, and responses match production — only the base URL and your credentials change when you go live.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 2: CREATE CARDHOLDER --- */}
                <section className="space-y-8">
                    <div className="bg-[#052618] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 text-gray-300 text-sm">
                        <div className="bg-[#2ee59d] text-[#02160d] rounded-full p-1 shrink-0">
                            <BiInfoCircle className="text-sm" />
                        </div>
                        <p>
                            Send an <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs mx-1">Idempotency-Key</code> header on <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs mx-1">POST /cards</code> so retries never issue or charge twice. Reuse the same key when retrying a request that may have already succeeded.
                        </p>
                    </div>

                    <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                        <span className="text-gray-200 font-mono text-sm">/api/v1/cardholders</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
                        Create the end user and their cardholder record. The body is <strong className="text-white font-mono text-xs">multipart/form-data</strong> so KYC document images upload in the same request.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Body Fields</p>
                        <div className="border border-[#0f3b28] rounded-xl overflow-hidden bg-[#03140b]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#021008] border-b border-[#0f3b28]">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Field</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Type</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Required</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-300 divide-y divide-[#0f3b28]/50 font-mono">
                                    {[
                                        { field: 'email', type: 'Text', notes: 'Unique per user' },
                                        { field: 'firstName', type: 'Text', notes: '—' },
                                        { field: 'lastName', type: 'Text', notes: '—' },
                                        { field: 'country', type: 'Text', notes: 'ISO-2 code, e.g. IN' },
                                        { field: 'mobile', type: 'Text', notes: 'Digits only' },
                                        { field: 'kycDocType', type: 'Text', notes: 'passport · id_card · drivers_license' },
                                        { field: 'kycIdNumber', type: 'Text', notes: 'Document number' },
                                        { field: 'docFront', type: 'File', notes: 'ID front image' },
                                        { field: 'docBack', type: 'File', notes: 'ID back image' },
                                        { field: 'selfie', type: 'File', notes: 'Selfie / portrait' },
                                    ].map((item, idx) => (
                                        <tr key={idx} className="hover:bg-[#021008] transition-colors">
                                            <td className="py-3.5 px-5 font-bold text-gray-200">{item.field}</td>
                                            <td className="py-3.5 px-5 text-gray-500">{item.type}</td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-[#052618] border border-[#0f3b28] text-[#2ee59d] px-2 py-0.5 rounded text-[10px] tracking-wide">Required</span>
                                            </td>
                                            <td className="py-3.5 px-5 text-gray-400">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                <span className="text-[#f59e0b]">curl</span> -X POST https://uat-cards.almanzarcards.com/api/v1/cardholders \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Access-Key: &lt;your-access-key&gt;"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"email=ada@example.com"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"firstName=Ada"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"lastName=Lovelace"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"country=IN"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"mobile=9876543210"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"kycDocType=passport"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"kycIdNumber=P1234567"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"kycDob=1995-05-20"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"kycIssueDate=2020-01-01"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"kycExpiryDate=2030-01-01"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"docFront=@id-front.jpg"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"docBack=@id-back.jpg"</span> \<br />
                                {'  '}-F <span className="text-[#93c5fd]">"selfie=@selfie.jpg"</span>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                {'{\n'}
                                {'  '}<span className="text-[#93c5fd]">"success"</span>: <span className="text-[#c4b5fd]">true</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"userId"</span>: <span className="text-[#86efac]">"6a2a5427d6bd69d062555175"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"holderId"</span>: <span className="text-[#86efac]">"183633"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"holderStatus"</span>: <span className="text-[#86efac]">"IN_REVIEW"</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 3: GET STATUS --- */}
                <section className="space-y-8">
                    <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">GET</span>
                        <span className="text-gray-200 font-mono text-sm">/api/v1/cardholders/<span className="text-[#2ee59d]">:holderId</span>/status</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
                        Poll the verification status of a cardholder. Issue a card only once the status is ACTIVE and canIssueCard is true.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Status Values</p>
                        <div className="border border-[#0f3b28] rounded-xl overflow-hidden bg-[#03140b]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#021008] border-b border-[#0f3b28]">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Status</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-300 divide-y divide-[#0f3b28]/50">
                                    <tr className="hover:bg-[#021008] transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-[10px] font-mono tracking-wide">IN_REVIEW</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-400">KYC is still being verified. Keep polling.</td>
                                    </tr>
                                    <tr className="hover:bg-[#021008] transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-[#052618] border border-[#0f3b28] text-[#2ee59d] px-2 py-1 rounded text-[10px] font-mono tracking-wide">ACTIVE</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-400">Verified. A card can now be issued.</td>
                                    </tr>
                                    <tr className="hover:bg-[#021008] transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-1 rounded text-[10px] font-mono tracking-wide">REJECTED</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-400">Verification failed. No card can be issued.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                <span className="text-[#f59e0b]">curl</span> https://uat-cards.almanzarcards.com/api/v1/cardholders/183633/status \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Access-Key: &lt;your-access-key&gt;"</span>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                {'{\n'}
                                {'  '}<span className="text-[#93c5fd]">"success"</span>: <span className="text-[#c4b5fd]">true</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"holderId"</span>: <span className="text-[#86efac]">"183633"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"status"</span>: <span className="text-[#86efac]">"ACTIVE"</span>,    <span className="text-gray-500 italic">// IN_REVIEW | ACTIVE | REJECTED</span><br />
                                {'  '}<span className="text-[#93c5fd]">"canIssueCard"</span>: <span className="text-[#c4b5fd]">true</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 4: ISSUE CARD --- */}
                <section className="space-y-8">
                    <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                        <span className="text-gray-200 font-mono text-sm">/api/v1/cards</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
                        Issue a virtual card against an ACTIVE holder. <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs">loadAmount</code> is debited from your prepaid wallet at issue time.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Body Fields</p>
                        <div className="border border-[#0f3b28] rounded-xl overflow-hidden bg-[#03140b]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#021008] border-b border-[#0f3b28]">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Field</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Type</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Required</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-300 divide-y divide-[#0f3b28]/50 font-mono">
                                    {[
                                        { field: 'holderId', type: 'String', notes: 'An ACTIVE cardholder' },
                                        { field: 'cardType', type: 'String', notes: 'virtual' },
                                        { field: 'card_product_id', type: 'String', notes: 'Card product identifier, e.g. 111054' },
                                        { field: 'currency', type: 'String', notes: 'ISO currency, e.g. USD' },
                                        { field: 'loadAmount', type: 'Number', notes: 'Amount debited from your wallet' },
                                    ].map((item, idx) => (
                                        <tr key={idx} className="hover:bg-[#021008] transition-colors">
                                            <td className="py-3.5 px-5 font-bold text-gray-200">{item.field}</td>
                                            <td className="py-3.5 px-5 text-gray-500">{item.type}</td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-[#052618] border border-[#0f3b28] text-[#2ee59d] px-2 py-0.5 rounded text-[10px] tracking-wide">Required</span>
                                            </td>
                                            <td className="py-3.5 px-5 text-gray-400">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                <span className="text-[#f59e0b]">curl</span> -X POST https://uat-cards.almanzarcards.com/api/v1/cards \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-[#86efac]">"X-Access-Key: &lt;your-access-key&gt;"</span> \<br />
                                {'  '}-H <span className="text-[#86efac]">"Idempotency-Key: 7f1c9a2e-card-001"</span> \<br />
                                {'  '}-H <span className="text-[#86efac]">"Content-Type: application/json"</span> \<br />
                                {'  '}-d <span className="text-[#93c5fd]">'{'{'}<br />
                                    {'    "holderId": "183633",\n'}
                                    {'    "cardType": "virtual",\n'}
                                    {'    "card_product_id": "111054",\n'}
                                    {'    "currency": "USD",\n'}
                                    {'    "loadAmount": 20\n'}
                                    {'  }'}'</span>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                        <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                {'{\n'}
                                {'  '}<span className="text-[#93c5fd]">"success"</span>: <span className="text-[#c4b5fd]">true</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"cardId"</span>: <span className="text-[#86efac]">"6a2b..."</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"cardRef"</span>: <span className="text-[#86efac]">"98765"</span>,       <span className="text-gray-500 italic">// use this for /reveal</span><br />
                                {'  '}<span className="text-[#93c5fd]">"holderId"</span>: <span className="text-[#86efac]">"183633"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"cardType"</span>: <span className="text-[#86efac]">"physical"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"status"</span>: <span className="text-[#86efac]">"pending"</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"loadAmount"</span>: <span className="text-[#c4b5fd]">20</span>,<br />
                                {'  '}<span className="text-[#93c5fd]">"loadedBalance"</span>: <span className="text-[#c4b5fd]">20</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 5: CARD LIFECYCLE INFO BOXES & REVEAL --- */}
                <section className="space-y-8">

                    {/* Warning Box */}
                    <div className="bg-[#2a1a05] border border-[#4a3212] p-4 rounded-xl flex items-start gap-4 text-gray-300 text-sm">
                        <div className="bg-[#eab308] text-[#2a1a05] rounded-full p-1 shrink-0 mt-0.5">
                            <BiError className="text-sm" />
                        </div>
                        <p>
                            If your pool has no available card number, the call returns <code className="bg-[#021008] border border-[#4a3212] text-yellow-500 font-mono px-1.5 py-0.5 rounded text-xs mx-1">409 No physical card available in your pool</code>. Ask the admin to assign card numbers to your distributor account first.
                        </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-[#052618] border border-[#0f3b28] p-4 rounded-xl flex items-start gap-4 text-gray-300 text-sm">
                        <div className="bg-[#2ee59d] text-[#02160d] rounded-full p-1 shrink-0 mt-0.5">
                            <BiInfoCircle className="text-sm" />
                        </div>
                        <p>
                            Same activation behaviour as a virtual card: a newly issued physical card is <code className="bg-[#021008] border border-[#0f3b28] text-[#2ee59d] font-mono px-1.5 py-0.5 rounded text-xs mx-1">pending</code> for up to ~1 minute. If <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs mx-1">loadAmount</code> couldn't be applied at issue time, the response returns <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs mx-1">loadFailed: true</code> and the amount is refunded — deposit it with <code className="bg-[#021008] border border-[#0f3b28] text-gray-300 font-mono px-1.5 py-0.5 rounded text-xs mx-1">POST /cards/:cardId/deposit</code> once the card is active.
                        </p>
                    </div>

                    {/* Reveal Card Details */}
                    <div className="pt-8">
                        <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-6">
                            <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">GET</span>
                            <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/reveal</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl mb-6">
                            Reveal the full card number, CVV, and expiry. :cardId is the cardRef returned when the card was created. The card must be ACTIVE — a newly issued card activates within ~1 minute.
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                            <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                    <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                    <span className="text-[#f59e0b]">curl</span> https://uat-cards.almanzarcards.com/api/v1/cards/98765/reveal \<br />
                                    {'  '}-H <span className="text-[#86efac]">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                    {'  '}-H <span className="text-[#86efac]">"X-Access-Key: &lt;your-access-key&gt;"</span>
                                </pre>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                            <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                    <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                    {'{\n'}
                                    {'  '}<span className="text-[#93c5fd]">"success"</span>: <span className="text-[#c4b5fd]">true</span>,<br />
                                    {'  '}<span className="text-[#93c5fd]">"cardDetails"</span>: {'{\n'}
                                    {'    '}<span className="text-[#93c5fd]">"card_id"</span>: <span className="text-[#86efac]">"98765"</span>,<br />
                                    {'    '}<span className="text-[#93c5fd]">"card_number"</span>: <span className="text-[#86efac]">"4111111111111234"</span>,<br />
                                    {'    '}<span className="text-[#93c5fd]">"cvv"</span>: <span className="text-[#86efac]">"123"</span>,<br />
                                    {'    '}<span className="text-[#93c5fd]">"expiry_date"</span>: <span className="text-[#86efac]">"12/28"</span><br />
                                    {'  }'}<br />
                                    {'}'}
                                </pre>
                            </div>
                        </div>

                        {/* Red Warning Box */}
                        <div className="bg-[#2a0a0a] border border-[#4a1212] p-4 rounded-xl flex items-start gap-4 text-[#ef4444] text-sm mt-6">
                            <div className="bg-[#ef4444] text-[#2a0a0a] rounded-full p-1 shrink-0 mt-0.5">
                                <BiError className="text-sm" />
                            </div>
                            <p>
                                This endpoint returns <strong>full, sensitive card data</strong>. Request it only from a PCI-compliant server context, never log the response, and pass values to the user over an encrypted channel.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 6: CARD LIFECYCLE --- */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Card lifecycle</h2>
                        <p className="text-gray-300 leading-relaxed max-w-2xl text-sm">
                            Deposit to a card, withdraw from it, and manage its state. The card must be ACTIVE first. :cardId is the cardRef from issue.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* Deposit */}
                        <div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-4">
                                <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/deposit</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Deposit funds to the card (debited from your prepaid wallet).</p>
                            <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                    <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON BODY</span>
                                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                    {'{ '}<span className="text-[#93c5fd]">"amount"</span>: <span className="text-[#c4b5fd]">20</span> {' }'}
                                </pre>
                            </div>
                        </div>

                        {/* Withdraw */}
                        <div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/withdraw</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Withdraw funds from the card back into your prepaid wallet.</p>
                            <div className="bg-[#090d1a] border border-[#141b2d] rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                                    <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JSON BODY</span>
                                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                                    {'{ '}<span className="text-[#93c5fd]">"amount"</span>: <span className="text-[#c4b5fd]">5</span> {' }'}
                                </pre>
                            </div>
                        </div>

                        {/* Freeze */}
                        <div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/freeze</span>
                            </div>
                            <p className="text-gray-400 text-sm">Temporarily freeze the card. No request body.</p>
                        </div>

                        {/* Unfreeze */}
                        <div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/unfreeze</span>
                            </div>
                            <p className="text-gray-400 text-sm">Unfreeze a frozen card. No request body.</p>
                        </div>

                        {/* Terminate */}
                        <div>
                            <div className="bg-[#03140b] border border-[#0f3b28] p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-[#052618] border border-[#164a34] text-[#2ee59d] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-200 font-mono text-sm">/api/v1/cards/<span className="text-[#2ee59d]">:cardId</span>/terminate</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Permanently terminate the card. No request body.</p>

                            <div className="bg-[#052618] border border-[#0f3b28] p-4 rounded-xl flex items-start gap-4 text-gray-300 text-sm">
                                <div className="bg-[#2ee59d] text-[#02160d] rounded-full p-1 shrink-0 mt-0.5">
                                    <BiInfoCircle className="text-sm" />
                                </div>
                                <p>
                                    After a deposit/withdrawal the card balance may take a short while to reflect on the provider. A small provider fee may apply to a deposit.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 7: ERROR CODES --- */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Error codes</h2>
                        <p className="text-gray-300 leading-relaxed max-w-2xl text-sm">
                            Errors are returned with a standard HTTP status. Handle these explicitly in your integration.
                        </p>
                    </div>

                    <div className="border border-[#0f3b28] rounded-xl overflow-hidden bg-[#03140b]">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-[#021008] border-b border-[#0f3b28]">
                                <tr>
                                    <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/5">Status</th>
                                    <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Meaning & How to Handle</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs text-gray-300 divide-y divide-[#0f3b28]/50">
                                <tr className="hover:bg-[#021008] transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-[#eab308]/10 text-[#eab308] px-2 py-1 rounded font-mono font-bold">401</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-white">Invalid API credentials.</strong> Check that both X-Api-Key and X-Access-Key are present and correct.
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#021008] transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-[#ef4444]/10 text-[#ef4444] px-2 py-1 rounded font-mono font-bold">402</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-white">Insufficient wallet balance.</strong> Top up your prepaid wallet before issuing or loading.
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#021008] transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-gray-500/10 text-gray-400 px-2 py-1 rounded font-mono font-bold">404</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-white">Card / cardholder not found.</strong> Verify the <code className="font-mono text-gray-400">holderId</code> or <code className="font-mono text-gray-400">cardId</code>.
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#021008] transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-[#eab308]/10 text-[#eab308] px-2 py-1 rounded font-mono font-bold">409</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-white">Cardholder still under verification.</strong> Keep polling status until ACTIVE before issuing.
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#021008] transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-[#ef4444]/10 text-[#ef4444] px-2 py-1 rounded font-mono font-bold">422</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-white">Validation error or cardholder rejected.</strong> Fix the field(s) in error, or re-onboard a rejected holder.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-[#0f3b28]" />

                {/* --- SECTION 8: FULL QUICKSTART --- */}
                <section>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-white mb-4">Full quickstart</h2>
                        <p className="text-gray-300 leading-relaxed max-w-2xl text-sm">
                            End-to-end: create a holder, poll until active, issue a card, then reveal it.
                        </p>
                    </div>

                    {/* Code Tabs */}
                    <div className="flex gap-2 mb-2">
                        <button className="bg-[#090d1a] border border-[#141b2d] border-b-0 text-gray-300 font-mono text-xs px-4 py-2 rounded-t-lg">
                            Node.js
                        </button>
                        <button className="bg-transparent text-gray-500 hover:text-gray-300 font-mono text-xs px-4 py-2 rounded-t-lg transition-colors">
                            Python
                        </button>
                    </div>

                    {/* Code Block */}
                    <div className="bg-[#090d1a] border border-[#141b2d] rounded-b-xl rounded-tr-xl overflow-hidden shadow-lg">
                        <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141b2d] bg-[#0c1222]">
                            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">JAVASCRIPT</span>
                            <button className="flex items-center gap-1.5 text-gray-500 hover:text-white border border-[#1c253d] bg-[#0f1629] px-2 py-1 rounded text-[10px] transition-colors">
                                <BiCopy /> Copy
                            </button>
                        </div>
                        <pre className="p-6 text-xs font-mono leading-relaxed overflow-x-auto text-[#a5b4fc]">
                            <span className="text-gray-500 italic">// Node 18+ (global fetch, FormData)</span><br />
                            <span className="text-[#c4b5fd]">const</span> BASE = <span className="text-[#86efac]">"https://uat-cards.almanzarcards.com/api/v1"</span>;<br />
                            <span className="text-[#c4b5fd]">const</span> headers = {'{\n'}
                            {'  '}<span className="text-[#86efac]">"X-Api-Key"</span>: process.env.API_KEY,<br />
                            {'  '}<span className="text-[#86efac]">"X-Access-Key"</span>: process.env.ACCESS_KEY,<br />
                            {'}'};<br /><br />

                            <span className="text-gray-500 italic">// 1 — create cardholder (multipart)</span><br />
                            <span className="text-[#c4b5fd]">const</span> form = <span className="text-[#f59e0b]">new</span> FormData();<br />
                            form.append(<span className="text-[#86efac]">"email"</span>, <span className="text-[#86efac]">"ada@example.com"</span>);<br />
                            form.append(<span className="text-[#86efac]">"firstName"</span>, <span className="text-[#86efac]">"Ada"</span>);<br />
                            form.append(<span className="text-[#86efac]">"lastName"</span>, <span className="text-[#86efac]">"Lovelace"</span>);<br />
                            form.append(<span className="text-[#86efac]">"country"</span>, <span className="text-[#86efac]">"IN"</span>);<br />
                            form.append(<span className="text-[#86efac]">"mobile"</span>, <span className="text-[#86efac]">"9876543210"</span>);<br />
                            form.append(<span className="text-[#86efac]">"kycDocType"</span>, <span className="text-[#86efac]">"passport"</span>);<br />
                            form.append(<span className="text-[#86efac]">"kycIdNumber"</span>, <span className="text-[#86efac]">"P1234567"</span>);<br />
                            form.append(<span className="text-[#86efac]">"kycDob"</span>, <span className="text-[#86efac]">"1995-05-20"</span>);<br />
                            form.append(<span className="text-[#86efac]">"kycIssueDate"</span>, <span className="text-[#86efac]">"2020-01-01"</span>);<br />
                            form.append(<span className="text-[#86efac]">"kycExpiryDate"</span>, <span className="text-[#86efac]">"2030-01-01"</span>);<br />
                            form.append(<span className="text-[#86efac]">"docFront"</span>, docFrontBlob, <span className="text-[#86efac]">"front.jpg"</span>);<br />
                            form.append(<span className="text-[#86efac]">"docBack"</span>, docBackBlob, <span className="text-[#86efac]">"back.jpg"</span>);<br />
                            form.append(<span className="text-[#86efac]">"selfie"</span>, selfieBlob, <span className="text-[#86efac]">"selfie.jpg"</span>);<br /><br />

                            <span className="text-[#c4b5fd]">const</span> created = <span className="text-[#f59e0b]">await</span> (<span className="text-[#f59e0b]">await</span> fetch(<span className="text-[#86efac]">`</span><span className="text-[#93c5fd]">${'{'}</span>BASE<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/cardholders`</span>, {'{\n'}
                            {'  '}method: <span className="text-[#86efac]">"POST"</span>, headers, body: form,<br />
                            {'}'})).json();<br />
                            <span className="text-[#c4b5fd]">const</span> {'{'} holderId {'}'} = created;<br /><br />

                            <span className="text-gray-500 italic">// 2 — poll until ACTIVE</span><br />
                            <span className="text-[#c4b5fd]">async function</span> <span className="text-[#93c5fd]">waitActive</span>(id) {'{\n'}
                            {'  '}<span className="text-[#f59e0b]">while</span> (<span className="text-[#c4b5fd]">true</span>) {'{\n'}
                            {'    '}<span className="text-[#c4b5fd]">const</span> s = <span className="text-[#f59e0b]">await</span> (<span className="text-[#f59e0b]">await</span> fetch(<span className="text-[#86efac]">`</span><span className="text-[#93c5fd]">${'{'}</span>BASE<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/cardholders/</span><span className="text-[#93c5fd]">${'{'}</span>id<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/status`</span>, {'{'} headers {'}'})).json();<br />
                            {'    '}<span className="text-[#f59e0b]">if</span> (s.status === <span className="text-[#86efac]">"ACTIVE"</span>) <span className="text-[#f59e0b]">return</span>;<br />
                            {'    '}<span className="text-[#f59e0b]">await new</span> Promise(r =&gt; setTimeout(r, <span className="text-[#c4b5fd]">2000</span>));<br />
                            {'  }\n'}
                            {'}'}<br /><br />

                            <span className="text-gray-500 italic">// 3 — issue the card</span><br />
                            <span className="text-[#c4b5fd]">const</span> issued = <span className="text-[#f59e0b]">await</span> (<span className="text-[#f59e0b]">await</span> fetch(<span className="text-[#86efac]">`</span><span className="text-[#93c5fd]">${'{'}</span>BASE<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/cards`</span>, {'{\n'}
                            {'  '}method: <span className="text-[#86efac]">"POST"</span>,<br />
                            {'  '}headers: {'{'} ...headers, <span className="text-[#86efac]">"Content-Type"</span>: <span className="text-[#86efac]">"application/json"</span> {'}'},<br />
                            {'  '}body: JSON.stringify({'{'} holderId, cardType: <span className="text-[#86efac]">"virtual"</span>, loadAmount: <span className="text-[#c4b5fd]">20</span> {'}'})<br />
                            {'}'})).json();<br /><br />

                            <span className="text-gray-500 italic">// 4 — reveal PAN</span><br />
                            <span className="text-[#c4b5fd]">const</span> secret = <span className="text-[#f59e0b]">await</span> (<span className="text-[#f59e0b]">await</span> fetch(<span className="text-[#86efac]">`</span><span className="text-[#93c5fd]">${'{'}</span>BASE<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/cards/</span><span className="text-[#93c5fd]">${'{'}</span>issued.cardRef<span className="text-[#93c5fd]">{'}'}</span><span className="text-[#86efac]">/reveal`</span>, {'{\n'}
                            {'  '}headers<br />
                            {'}'})).json();
                        </pre>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DistributorDeveloperCom;