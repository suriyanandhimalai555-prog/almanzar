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

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="flex items-center text-3xl font-bold text-gray-900 mb-2">
                        <BiCodeAlt className="text-[#2B6CF0] mr-3 text-4xl" />
                        Developer / API Reference
                    </h1>
                    <p className="text-gray-500 text-sm">
                        The reference below is the exact document you can download as PDF or import into Postman.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-blue-200 bg-white hover:bg-blue-50 text-[#1E40AF] px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm">
                        <SiPostman className="text-base" />
                        Postman Collection
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] hover:opacity-90 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_4px_14px_rgba(43,108,240,0.2)]">
                        <BiCloudDownload className="text-base" />
                        Download PDF
                    </button>
                    <button className="flex items-center gap-2 border border-blue-200 bg-white hover:bg-blue-50 text-[#1E40AF] px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm">
                        <BiLinkExternal className="text-base" />
                        Open
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 lg:p-14 space-y-20 relative overflow-hidden shadow-sm">

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B6CF0]/5 blur-[150px] pointer-events-none rounded-full"></div>

                <section>
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-[#2B6CF0]"></div>
                            <span className="text-[#1E40AF] text-[10px] font-bold tracking-widest uppercase">Card Issuing API</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Distributor Card API</h2>
                        <p className="text-gray-600 leading-relaxed max-w-2xl text-sm">
                            Create cardholders, run KYC, and issue virtual cards programmatically — from one prepaid wallet, over a single REST interface.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
                        <div className="lg:col-span-3 bg-gradient-to-br from-[#2B6CF0] to-[#1E40AF] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-md aspect-[1.6/1]">
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

                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Base URL</p>
                                <p className="text-[#2B6CF0] font-mono text-xs break-all">https://uat-cards.almanzarcards.com/api/v1</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Format</p>
                                <p className="text-gray-700 font-mono text-xs">JSON · multipart/form-data</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Card Type</p>
                                <p className="text-gray-700 font-mono text-xs">virtual · prepaid</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                            The Distributor Card API lets you onboard end users, verify their identity, and issue prepaid virtual cards funded from your wallet balance. Every card is tied to a verified cardholder, and funds load directly from your prepaid wallet at issue time.
                        </p>
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-4 text-gray-700 text-sm">
                            <div className="bg-[#2B6CF0] text-white rounded-full p-1 shrink-0 mt-0.5">
                                <BiInfoCircle className="text-sm" />
                            </div>
                            <p>
                                This reference targets the <strong className="text-gray-900">UAT / sandbox</strong> environment. Endpoints, request shapes, and responses match production — only the base URL and your credentials change when you go live.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section className="space-y-8">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-4 text-gray-700 text-sm">
                        <div className="bg-[#2B6CF0] text-white rounded-full p-1 shrink-0">
                            <BiInfoCircle className="text-sm" />
                        </div>
                        <p>
                            Send an <code className="bg-white border border-gray-200 text-[#1E40AF] font-mono px-1.5 py-0.5 rounded text-xs mx-1">Idempotency-Key</code> header on <code className="bg-white border border-gray-200 text-[#1E40AF] font-mono px-1.5 py-0.5 rounded text-xs mx-1">POST /cards</code> so retries never issue or charge twice. Reuse the same key when retrying a request that may have already succeeded.
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                        <span className="text-gray-900 font-mono text-sm">/api/v1/cardholders</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                        Create the end user and their cardholder record. The body is <strong className="text-gray-900 font-mono text-xs">multipart/form-data</strong> so KYC document images upload in the same request.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Body Fields</p>
                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Field</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Type</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Required</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-600 divide-y divide-gray-100 font-mono">
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
                                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="py-3.5 px-5 font-bold text-gray-900">{item.field}</td>
                                            <td className="py-3.5 px-5 text-gray-500">{item.type}</td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-blue-50 border border-blue-100 text-[#2B6CF0] px-2 py-0.5 rounded text-[10px] tracking-wide">Required</span>
                                            </td>
                                            <td className="py-3.5 px-5 text-gray-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                <span className="text-yellow-400">curl</span> -X POST https://uat-cards.almanzarcards.com/api/v1/cardholders \<br />
                                {'  '}-H <span className="text-green-400">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-green-400">"X-Access-Key: &lt;your-access-key&gt;"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"email=ada@example.com"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"firstName=Ada"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"lastName=Lovelace"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"country=IN"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"mobile=9876543210"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"kycDocType=passport"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"kycIdNumber=P1234567"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"kycDob=1995-05-20"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"kycIssueDate=2020-01-01"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"kycExpiryDate=2030-01-01"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"docFront=@id-front.jpg"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"docBack=@id-back.jpg"</span> \<br />
                                {'  '}-F <span className="text-blue-300">"selfie=@selfie.jpg"</span>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                {'{\n'}
                                {'  '}<span className="text-blue-300">"success"</span>: <span className="text-purple-400">true</span>,<br />
                                {'  '}<span className="text-blue-300">"userId"</span>: <span className="text-green-400">"6a2a5427d6bd69d062555175"</span>,<br />
                                {'  '}<span className="text-blue-300">"holderId"</span>: <span className="text-green-400">"183633"</span>,<br />
                                {'  '}<span className="text-blue-300">"holderStatus"</span>: <span className="text-green-400">"IN_REVIEW"</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section className="space-y-8">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-green-100 border border-green-200 text-green-700 font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">GET</span>
                        <span className="text-gray-900 font-mono text-sm">/api/v1/cardholders/<span className="text-[#2B6CF0]">:holderId</span>/status</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                        Poll the verification status of a cardholder. Issue a card only once the status is ACTIVE and canIssueCard is true.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Status Values</p>
                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Status</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-600 divide-y divide-gray-100">
                                    <tr className="hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-2 py-1 rounded text-[10px] font-mono tracking-wide">IN_REVIEW</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-600">KYC is still being verified. Keep polling.</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded text-[10px] font-mono tracking-wide">ACTIVE</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-600">Verified. A card can now be issued.</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-5">
                                            <span className="bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded text-[10px] font-mono tracking-wide">REJECTED</span>
                                        </td>
                                        <td className="py-4 px-5 text-gray-600">Verification failed. No card can be issued.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                <span className="text-yellow-400">curl</span> https://uat-cards.almanzarcards.com/api/v1/cardholders/183633/status \<br />
                                {'  '}-H <span className="text-green-400">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-green-400">"X-Access-Key: &lt;your-access-key&gt;"</span>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                {'{\n'}
                                {'  '}<span className="text-blue-300">"success"</span>: <span className="text-purple-400">true</span>,<br />
                                {'  '}<span className="text-blue-300">"holderId"</span>: <span className="text-green-400">"183633"</span>,<br />
                                {'  '}<span className="text-blue-300">"status"</span>: <span className="text-green-400">"ACTIVE"</span>,    <span className="text-gray-400 italic">// IN_REVIEW | ACTIVE | REJECTED</span><br />
                                {'  '}<span className="text-blue-300">"canIssueCard"</span>: <span className="text-purple-400">true</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section className="space-y-8">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4">
                        <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                        <span className="text-gray-900 font-mono text-sm">/api/v1/cards</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                        Issue a virtual card against an ACTIVE holder. <code className="bg-white border border-gray-200 text-[#1E40AF] font-mono px-1.5 py-0.5 rounded text-xs">loadAmount</code> is debited from your prepaid wallet at issue time.
                    </p>

                    <div>
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">Body Fields</p>
                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/4">Field</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Type</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/6">Required</th>
                                        <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs text-gray-600 divide-y divide-gray-100 font-mono">
                                    {[
                                        { field: 'holderId', type: 'String', notes: 'An ACTIVE cardholder' },
                                        { field: 'cardType', type: 'String', notes: 'virtual' },
                                        { field: 'card_product_id', type: 'String', notes: 'Card product identifier, e.g. 111054' },
                                        { field: 'currency', type: 'String', notes: 'ISO currency, e.g. USD' },
                                        { field: 'loadAmount', type: 'Number', notes: 'Amount debited from your wallet' },
                                    ].map((item, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="py-3.5 px-5 font-bold text-gray-900">{item.field}</td>
                                            <td className="py-3.5 px-5 text-gray-500">{item.type}</td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-blue-50 border border-blue-100 text-[#2B6CF0] px-2 py-0.5 rounded text-[10px] tracking-wide">Required</span>
                                            </td>
                                            <td className="py-3.5 px-5 text-gray-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                <span className="text-yellow-400">curl</span> -X POST https://uat-cards.almanzarcards.com/api/v1/cards \<br />
                                {'  '}-H <span className="text-green-400">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                {'  '}-H <span className="text-green-400">"X-Access-Key: &lt;your-access-key&gt;"</span> \<br />
                                {'  '}-H <span className="text-green-400">"Idempotency-Key: 7f1c9a2e-card-001"</span> \<br />
                                {'  '}-H <span className="text-green-400">"Content-Type: application/json"</span> \<br />
                                {'  '}-d <span className="text-blue-300">'{'{'}<br />
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
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                    <BiCopy /> Copy
                                </button>
                            </div>
                            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                {'{\n'}
                                {'  '}<span className="text-blue-300">"success"</span>: <span className="text-purple-400">true</span>,<br />
                                {'  '}<span className="text-blue-300">"cardId"</span>: <span className="text-green-400">"6a2b..."</span>,<br />
                                {'  '}<span className="text-blue-300">"cardRef"</span>: <span className="text-green-400">"98765"</span>,       <span className="text-gray-400 italic">// use this for /reveal</span><br />
                                {'  '}<span className="text-blue-300">"holderId"</span>: <span className="text-green-400">"183633"</span>,<br />
                                {'  '}<span className="text-blue-300">"cardType"</span>: <span className="text-green-400">"physical"</span>,<br />
                                {'  '}<span className="text-blue-300">"status"</span>: <span className="text-green-400">"pending"</span>,<br />
                                {'  '}<span className="text-blue-300">"loadAmount"</span>: <span className="text-purple-400">20</span>,<br />
                                {'  '}<span className="text-blue-300">"loadedBalance"</span>: <span className="text-purple-400">20</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section className="space-y-8">

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex items-start gap-4 text-yellow-800 text-sm">
                        <div className="bg-yellow-200 text-yellow-700 rounded-full p-1 shrink-0 mt-0.5">
                            <BiError className="text-sm" />
                        </div>
                        <p>
                            If your pool has no available card number, the call returns <code className="bg-white border border-yellow-200 text-yellow-700 font-mono px-1.5 py-0.5 rounded text-xs mx-1">409 No physical card available in your pool</code>. Ask the admin to assign card numbers to your distributor account first.
                        </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-4 text-gray-700 text-sm">
                        <div className="bg-[#2B6CF0] text-white rounded-full p-1 shrink-0 mt-0.5">
                            <BiInfoCircle className="text-sm" />
                        </div>
                        <p>
                            Same activation behaviour as a virtual card: a newly issued physical card is <code className="bg-white border border-gray-200 text-[#1E40AF] font-mono px-1.5 py-0.5 rounded text-xs mx-1">pending</code> for up to ~1 minute. If <code className="bg-white border border-gray-200 text-gray-700 font-mono px-1.5 py-0.5 rounded text-xs mx-1">loadAmount</code> couldn't be applied at issue time, the response returns <code className="bg-white border border-gray-200 text-gray-700 font-mono px-1.5 py-0.5 rounded text-xs mx-1">loadFailed: true</code> and the amount is refunded — deposit it with <code className="bg-white border border-gray-200 text-gray-700 font-mono px-1.5 py-0.5 rounded text-xs mx-1">POST /cards/:cardId/deposit</code> once the card is active.
                        </p>
                    </div>

                    <div className="pt-8">
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-6">
                            <span className="bg-green-100 border border-green-200 text-green-700 font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">GET</span>
                            <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/reveal</span>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-4xl mb-6">
                            Reveal the full card number, CVV, and expiry. :cardId is the cardRef returned when the card was created. The card must be ACTIVE — a newly issued card activates within ~1 minute.
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-8">Request</p>
                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">cURL</span>
                                    <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                    <span className="text-yellow-400">curl</span> https://uat-cards.almanzarcards.com/api/v1/cards/98765/reveal \<br />
                                    {'  '}-H <span className="text-green-400">"X-Api-Key: dk_live_xxxxxxxx"</span> \<br />
                                    {'  '}-H <span className="text-green-400">"X-Access-Key: &lt;your-access-key&gt;"</span>
                                </pre>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-6">Response · 200</p>
                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON</span>
                                    <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                    {'{\n'}
                                    {'  '}<span className="text-blue-300">"success"</span>: <span className="text-purple-400">true</span>,<br />
                                    {'  '}<span className="text-blue-300">"cardDetails"</span>: {'{\n'}
                                    {'    '}<span className="text-blue-300">"card_id"</span>: <span className="text-green-400">"98765"</span>,<br />
                                    {'    '}<span className="text-blue-300">"card_number"</span>: <span className="text-green-400">"4111111111111234"</span>,<br />
                                    {'    '}<span className="text-blue-300">"cvv"</span>: <span className="text-green-400">"123"</span>,<br />
                                    {'    '}<span className="text-blue-300">"expiry_date"</span>: <span className="text-green-400">"12/28"</span><br />
                                    {'  }'}<br />
                                    {'}'}
                                </pre>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-4 text-red-700 text-sm mt-6">
                            <div className="bg-red-200 text-red-700 rounded-full p-1 shrink-0 mt-0.5">
                                <BiError className="text-sm" />
                            </div>
                            <p>
                                This endpoint returns <strong>full, sensitive card data</strong>. Request it only from a PCI-compliant server context, never log the response, and pass values to the user over an encrypted channel.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Card lifecycle</h2>
                        <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                            Deposit to a card, withdraw from it, and manage its state. The card must be ACTIVE first. :cardId is the cardRef from issue.
                        </p>
                    </div>

                    <div className="space-y-6">

                        <div>
                            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-4">
                                <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/deposit</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">Deposit funds to the card (debited from your prepaid wallet).</p>
                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON BODY</span>
                                    <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                    {'{ '}<span className="text-blue-300">"amount"</span>: <span className="text-purple-400">20</span> {' }'}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/withdraw</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">Withdraw funds from the card back into your prepaid wallet.</p>
                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JSON BODY</span>
                                    <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                        <BiCopy /> Copy
                                    </button>
                                </div>
                                <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                                    {'{ '}<span className="text-blue-300">"amount"</span>: <span className="text-purple-400">5</span> {' }'}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/freeze</span>
                            </div>
                            <p className="text-gray-500 text-sm">Temporarily freeze the card. No request body.</p>
                        </div>

                        <div>
                            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/unfreeze</span>
                            </div>
                            <p className="text-gray-500 text-sm">Unfreeze a frozen card. No request body.</p>
                        </div>

                        <div>
                            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 mb-4 mt-8">
                                <span className="bg-blue-100 border border-blue-200 text-[#1E40AF] font-bold text-[10px] px-2.5 py-1 rounded tracking-wider uppercase">POST</span>
                                <span className="text-gray-900 font-mono text-sm">/api/v1/cards/<span className="text-[#2B6CF0]">:cardId</span>/terminate</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Permanently terminate the card. No request body.</p>

                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-4 text-gray-700 text-sm">
                                <div className="bg-[#2B6CF0] text-white rounded-full p-1 shrink-0 mt-0.5">
                                    <BiInfoCircle className="text-sm" />
                                </div>
                                <p>
                                    After a deposit/withdrawal the card balance may take a short while to reflect on the provider. A small provider fee may apply to a deposit.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <hr className="border-gray-200" />

                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Error codes</h2>
                        <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                            Errors are returned with a standard HTTP status. Handle these explicitly in your integration.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase w-1/5">Status</th>
                                    <th className="py-3 px-5 text-gray-500 text-[10px] font-bold tracking-widest uppercase">Meaning & How to Handle</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs text-gray-600 divide-y divide-gray-100">
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-mono font-bold">401</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-gray-900">Invalid API credentials.</strong> Check that both X-Api-Key and X-Access-Key are present and correct.
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-mono font-bold">402</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-gray-900">Insufficient wallet balance.</strong> Top up your prepaid wallet before issuing or loading.
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded font-mono font-bold">404</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-gray-900">Card / cardholder not found.</strong> Verify the <code className="font-mono text-gray-500">holderId</code> or <code className="font-mono text-gray-500">cardId</code>.
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-mono font-bold">409</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-gray-900">Cardholder still under verification.</strong> Keep polling status until ACTIVE before issuing.
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-mono font-bold">422</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <strong className="text-gray-900">Validation error or cardholder rejected.</strong> Fix the field(s) in error, or re-onboard a rejected holder.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-gray-200" />

                <section>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Full quickstart</h2>
                        <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                            End-to-end: create a holder, poll until active, issue a card, then reveal it.
                        </p>
                    </div>

                    <div className="flex gap-2 mb-2">
                        <button className="bg-gray-900 border border-gray-800 border-b-0 text-gray-100 font-mono text-xs px-4 py-2 rounded-t-lg">
                            Node.js
                        </button>
                        <button className="bg-transparent text-gray-500 hover:text-gray-700 font-mono text-xs px-4 py-2 rounded-t-lg transition-colors">
                            Python
                        </button>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-b-xl rounded-tr-xl overflow-hidden shadow-lg">
                        <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-700 bg-gray-800">
                            <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">JAVASCRIPT</span>
                            <button className="flex items-center gap-1.5 text-gray-300 hover:text-white border border-gray-600 bg-gray-700 px-2 py-1 rounded text-[10px] transition-colors">
                                <BiCopy /> Copy
                            </button>
                        </div>
                        <pre className="p-6 text-xs font-mono leading-relaxed overflow-x-auto text-gray-100">
                            <span className="text-gray-400 italic">// Node 18+ (global fetch, FormData)</span><br />
                            <span className="text-purple-400">const</span> BASE = <span className="text-green-400">"https://uat-cards.almanzarcards.com/api/v1"</span>;<br />
                            <span className="text-purple-400">const</span> headers = {'{\n'}
                            {'  '}<span className="text-green-400">"X-Api-Key"</span>: process.env.API_KEY,<br />
                            {'  '}<span className="text-green-400">"X-Access-Key"</span>: process.env.ACCESS_KEY,<br />
                            {'}'};<br /><br />

                            <span className="text-gray-400 italic">// 1 — create cardholder (multipart)</span><br />
                            <span className="text-purple-400">const</span> form = <span className="text-yellow-400">new</span> FormData();<br />
                            form.append(<span className="text-green-400">"email"</span>, <span className="text-green-400">"ada@example.com"</span>);<br />
                            form.append(<span className="text-green-400">"firstName"</span>, <span className="text-green-400">"Ada"</span>);<br />
                            form.append(<span className="text-green-400">"lastName"</span>, <span className="text-green-400">"Lovelace"</span>);<br />
                            form.append(<span className="text-green-400">"country"</span>, <span className="text-green-400">"IN"</span>);<br />
                            form.append(<span className="text-green-400">"mobile"</span>, <span className="text-green-400">"9876543210"</span>);<br />
                            form.append(<span className="text-green-400">"kycDocType"</span>, <span className="text-green-400">"passport"</span>);<br />
                            form.append(<span className="text-green-400">"kycIdNumber"</span>, <span className="text-green-400">"P1234567"</span>);<br />
                            form.append(<span className="text-green-400">"kycDob"</span>, <span className="text-green-400">"1995-05-20"</span>);<br />
                            form.append(<span className="text-green-400">"kycIssueDate"</span>, <span className="text-green-400">"2020-01-01"</span>);<br />
                            form.append(<span className="text-green-400">"kycExpiryDate"</span>, <span className="text-green-400">"2030-01-01"</span>);<br />
                            form.append(<span className="text-green-400">"docFront"</span>, docFrontBlob, <span className="text-green-400">"front.jpg"</span>);<br />
                            form.append(<span className="text-green-400">"docBack"</span>, docBackBlob, <span className="text-green-400">"back.jpg"</span>);<br />
                            form.append(<span className="text-green-400">"selfie"</span>, selfieBlob, <span className="text-green-400">"selfie.jpg"</span>);<br /><br />

                            <span className="text-purple-400">const</span> created = <span className="text-yellow-400">await</span> (<span className="text-yellow-400">await</span> fetch(<span className="text-green-400">`</span><span className="text-blue-300">${'{'}</span>BASE<span className="text-blue-300">{'}'}</span><span className="text-green-400">/cardholders`</span>, {'{\n'}
                            {'  '}method: <span className="text-green-400">"POST"</span>, headers, body: form,<br />
                            {'}'})).json();<br />
                            <span className="text-purple-400">const</span> {'{'} holderId {'}'} = created;<br /><br />

                            <span className="text-gray-400 italic">// 2 — poll until ACTIVE</span><br />
                            <span className="text-purple-400">async function</span> <span className="text-blue-300">waitActive</span>(id) {'{\n'}
                            {'  '}<span className="text-yellow-400">while</span> (<span className="text-purple-400">true</span>) {'{\n'}
                            {'    '}<span className="text-purple-400">const</span> s = <span className="text-yellow-400">await</span> (<span className="text-yellow-400">await</span> fetch(<span className="text-green-400">`</span><span className="text-blue-300">${'{'}</span>BASE<span className="text-blue-300">{'}'}</span><span className="text-green-400">/cardholders/</span><span className="text-blue-300">${'{'}</span>id<span className="text-blue-300">{'}'}</span><span className="text-green-400">/status`</span>, {'{'} headers {'}'})).json();<br />
                            {'    '}<span className="text-yellow-400">if</span> (s.status === <span className="text-green-400">"ACTIVE"</span>) <span className="text-yellow-400">return</span>;<br />
                            {'    '}<span className="text-yellow-400">await new</span> Promise(r =&gt; setTimeout(r, <span className="text-purple-400">2000</span>));<br />
                            {'  }\n'}
                            {'}'}<br /><br />

                            <span className="text-gray-400 italic">// 3 — issue the card</span><br />
                            <span className="text-purple-400">const</span> issued = <span className="text-yellow-400">await</span> (<span className="text-yellow-400">await</span> fetch(<span className="text-green-400">`</span><span className="text-blue-300">${'{'}</span>BASE<span className="text-blue-300">{'}'}</span><span className="text-green-400">/cards`</span>, {'{\n'}
                            {'  '}method: <span className="text-green-400">"POST"</span>,<br />
                            {'  '}headers: {'{'} ...headers, <span className="text-green-400">"Content-Type"</span>: <span className="text-green-400">"application/json"</span> {'}'},<br />
                            {'  '}body: JSON.stringify({'{'} holderId, cardType: <span className="text-green-400">"virtual"</span>, loadAmount: <span className="text-purple-400">20</span> {'}'})<br />
                            {'}'})).json();<br /><br />

                            <span className="text-gray-400 italic">// 4 — reveal PAN</span><br />
                            <span className="text-purple-400">const</span> secret = <span className="text-yellow-400">await</span> (<span className="text-yellow-400">await</span> fetch(<span className="text-green-400">`</span><span className="text-blue-300">${'{'}</span>BASE<span className="text-blue-300">{'}'}</span><span className="text-green-400">/cards/</span><span className="text-blue-300">${'{'}</span>issued.cardRef<span className="text-blue-300">{'}'}</span><span className="text-green-400">/reveal`</span>, {'{\n'}
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