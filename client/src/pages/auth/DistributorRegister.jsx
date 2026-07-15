import React, { useState } from 'react';
import { FiArrowLeft, FiSun, FiEye, FiLock } from "react-icons/fi";
import { BiSupport, BiCodeAlt, BiWallet, BiCreditCard, BiEnvelope, BiUser } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const DistributorRegister = () => {
    // Form State
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // UI State
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' }); // type: 'error' | 'success'

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        // Basic Validation
        if (!formData.companyName || !formData.email || !formData.password) {
            return setMessage({ type: 'error', text: 'Please fill in all fields.' });
        }
        if (formData.password !== formData.confirmPassword) {
            return setMessage({ type: 'error', text: 'Passwords do not match.' });
        }

        setLoading(true);

        try {
            // Using Vite environment variable for the API URL
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/distributor/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName: formData.companyName,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setMessage({ type: 'success', text: 'Account created successfully!' });

            // Optional: Clear form on success
            setFormData({ companyName: '', email: '', password: '', confirmPassword: '' });

            // Optional: Redirect to login after a few seconds
            // setTimeout(() => window.location.href = '/distributor/login', 2000);

        } catch (error) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#02160d] text-white font-sans flex flex-col relative overflow-hidden selection:bg-[#2ee59d] selection:text-[#02160d]">

            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#0c3823] blur-[160px] opacity-30 pointer-events-none rounded-full"></div>

            {/* Top Navigation */}
            <div className="flex justify-between items-center px-6 lg:px-10 py-5 relative z-10">
                <button className="flex items-center gap-2 text-[#2ee59d] hover:text-white transition-colors text-[11px] lg:text-xs font-semibold tracking-wide border border-[#0f3b28] bg-[#031c11] hover:bg-[#052618] px-4 py-2 rounded-full">
                    <FiArrowLeft className="text-base" />
                    BACK TO LOGIN
                </button>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-[#2ee59d] hover:text-white transition-colors text-[11px] lg:text-xs font-semibold border border-[#0f3b28] bg-[#031c11] hover:bg-[#052618] px-4 py-2 rounded-full">
                        <BiSupport className="text-base" />
                        SUPPORT
                    </button>
                    <button className="flex items-center justify-center text-[#2ee59d] hover:text-white transition-colors border border-[#0f3b28] bg-[#031c11] hover:bg-[#052618] w-9 h-9 rounded-full">
                        <FiSun className="text-base" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto w-full px-6 gap-10 lg:gap-16 relative z-10 pb-10 pt-2">

                {/* Left Section - Info */}
                <div className="flex-1 max-w-lg w-full">
                    <div className="flex items-center gap-2 text-[#2ee59d] bg-[#042416] border border-[#0f3b28] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest w-max mb-5">
                        <BsBoxSeam className="text-xs" />
                        DISTRIBUTOR PORTAL
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-extrabold leading-[1.2] mb-4 tracking-tight text-white">
                        Issue cards via API, <br />
                        <span className="text-[#2ee59d]">at your own scale.</span>
                    </h1>

                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed mb-6 pr-4">
                        Generate API credentials, fund your prepaid wallet with crypto, and create cards programmatically from your own platform.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-[#031c11] border border-[#0f3b28] hover:border-[#1a573d] transition-colors p-3 lg:p-4 rounded-2xl">
                            <div className="bg-[#062e1d] text-[#2ee59d] p-2 rounded-xl shrink-0">
                                <BiCodeAlt className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-xs lg:text-sm mb-0.5">Programmatic API</h3>
                                <p className="text-gray-400 text-[11px] lg:text-xs">API key + access key · single-call card issuance</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-[#031c11] border border-[#0f3b28] hover:border-[#1a573d] transition-colors p-3 lg:p-4 rounded-2xl">
                            <div className="bg-[#062e1d] text-[#2ee59d] p-2 rounded-xl shrink-0">
                                <BiWallet className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-xs lg:text-sm mb-0.5">Prepaid wallet</h3>
                                <p className="text-gray-400 text-[11px] lg:text-xs">Top up with USDT across 8 chains</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-[#031c11] border border-[#0f3b28] hover:border-[#1a573d] transition-colors p-3 lg:p-4 rounded-2xl">
                            <div className="bg-[#062e1d] text-[#2ee59d] p-2 rounded-xl shrink-0">
                                <BiCreditCard className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-xs lg:text-sm mb-0.5">Card lifecycle</h3>
                                <p className="text-gray-400 text-[11px] lg:text-xs">Issue, load, freeze, terminate via /api/v1</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Register Form */}
                <div className="w-full max-w-[460px] flex flex-col items-center">
                    <div className="w-full bg-gradient-to-b from-[#052618] to-[#02140c] border border-[#12422e] rounded-[1.5rem] px-8 py-6 lg:px-10 lg:py-7 shadow-[0_10px_60px_rgba(46,229,157,0.12)] relative">

                        {/* Inner top glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#2ee59d] to-transparent opacity-60"></div>

                        {/* Logo/Icon inside form */}
                        <div className="flex flex-col items-center mb-5">
                            <div className="bg-[#2ee59d] text-[#02160d] p-3 rounded-[1rem] mb-3 shadow-[0_0_20px_rgba(46,229,157,0.3)]">
                                <BsBoxSeam className="text-xl stroke-[0.5]" />
                            </div>
                            <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">Create Account</h2>
                            <p className="text-gray-400 text-[11px] lg:text-xs">Sign up to manage API keys & cards</p>
                        </div>

                        {/* Status Message */}
                        {message.text && (
                            <div className={`w-full p-3 rounded-xl mb-4 text-xs font-semibold text-center border ${message.type === 'error' ? 'bg-red-950/40 border-red-800 text-red-400' : 'bg-[#062e1d] border-[#1a573d] text-[#2ee59d]'
                                }`}>
                                {message.text}
                            </div>
                        )}

                        {/* Form Fields */}
                        <form className="space-y-3" onSubmit={handleRegister}>
                            <div>
                                <label className="block text-[#21a670] text-[9px] font-bold tracking-widest uppercase mb-1 ml-1">
                                    Company / Full Name
                                </label>
                                <div className="flex items-center bg-[#010e08] border border-[#0f3b28] rounded-xl px-4 py-2.5 focus-within:border-[#2ee59d] focus-within:ring-1 focus-within:ring-[#2ee59d] transition-all group">
                                    <BiUser className="text-gray-500 group-focus-within:text-[#2ee59d] mr-3 text-base transition-colors" />
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Enter company or full name"
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-xs"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#21a670] text-[9px] font-bold tracking-widest uppercase mb-1 ml-1">
                                    Email Address
                                </label>
                                <div className="flex items-center bg-[#010e08] border border-[#0f3b28] rounded-xl px-4 py-2.5 focus-within:border-[#2ee59d] focus-within:ring-1 focus-within:ring-[#2ee59d] transition-all group">
                                    <BiEnvelope className="text-gray-500 group-focus-within:text-[#2ee59d] mr-3 text-base transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="distributor@example.com"
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-xs"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#21a670] text-[9px] font-bold tracking-widest uppercase mb-1 ml-1">
                                    Password
                                </label>
                                <div className="flex items-center bg-[#010e08] border border-[#0f3b28] rounded-xl px-4 py-2.5 focus-within:border-[#2ee59d] focus-within:ring-1 focus-within:ring-[#2ee59d] transition-all group">
                                    <FiLock className="text-gray-500 group-focus-within:text-[#2ee59d] mr-3 text-base transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Create a password"
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-xs"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-500 hover:text-gray-300 ml-2 outline-none"
                                    >
                                        <FiEye className="text-base" />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#21a670] text-[9px] font-bold tracking-widest uppercase mb-1 ml-1">
                                    Confirm Password
                                </label>
                                <div className="flex items-center bg-[#010e08] border border-[#0f3b28] rounded-xl px-4 py-2.5 focus-within:border-[#2ee59d] focus-within:ring-1 focus-within:ring-[#2ee59d] transition-all group">
                                    <FiLock className="text-gray-500 group-focus-within:text-[#2ee59d] mr-3 text-base transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-xs"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#2ee59d] hover:bg-[#25c485] disabled:opacity-50 disabled:cursor-not-allowed text-[#02160d] font-bold text-xs lg:text-sm py-3 rounded-xl mt-2 transition-all duration-200 shadow-[0_5px_20px_rgba(46,229,157,0.2)] hover:shadow-[0_5px_25px_rgba(46,229,157,0.3)] hover:-translate-y-0.5"
                            >
                                {loading ? 'Creating Account...' : 'Sign Up for Distributor Portal'}
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-gray-400 text-[11px] lg:text-xs">
                                Already have an account? <a href="/distributor/login" className="text-[#2ee59d] hover:text-white transition-colors hover:underline font-semibold ml-1">Sign In</a>
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-500 text-[11px] mt-6 font-medium">
                        Almanzar Cards - Distributor Portal
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DistributorRegister;