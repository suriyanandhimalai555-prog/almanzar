import React, { useState } from 'react';
import { FiEye, FiLock } from "react-icons/fi";
import { BiCodeAlt, BiWallet, BiCreditCard, BiEnvelope } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const DistributorLogin = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({ email: '', password: '' });

  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!formData.email || !formData.password) {
      setLoading(false);
      return setMessage({ type: 'error', text: 'Please fill in all fields.' });
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/distributor/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('distributorId', data.distributorId);
      localStorage.setItem('companyName', data.companyName);

      setMessage({ type: 'success', text: 'Login successful! Redirecting...' });

      setTimeout(() => {
        navigate('/distributor/dashboard');
      }, 800);

    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FF] text-gray-900 font-sans flex flex-col relative overflow-hidden selection:bg-[#2B6CF0] selection:text-white">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2B6CF0] blur-[160px] opacity-15 pointer-events-none rounded-full"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto w-full px-6 gap-10 lg:gap-16 relative z-10 pb-10 pt-2">

        {/* Left Section - Info */}
        <div className="flex-1 max-w-lg w-full">
          <div className="flex items-center gap-2 text-[#1E40AF] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest w-max mb-5">
            <BsBoxSeam className="text-xs" />
            DISTRIBUTOR PORTAL
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold leading-[1.2] mb-4 tracking-tight text-gray-900">
            Issue cards via API, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF]">at your own scale.</span>
          </h1>

          <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-6 pr-4">
            Generate API credentials, fund your prepaid wallet with crypto, and create cards programmatically from your own platform.
          </p>

          {/* Feature List */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white border border-gray-200 hover:border-[#2B6CF0] shadow-sm transition-colors p-3 lg:p-4 rounded-2xl">
              <div className="bg-blue-50 text-[#2B6CF0] p-2 rounded-xl shrink-0">
                <BiCodeAlt className="text-lg" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-xs lg:text-sm mb-0.5">Programmatic API</h3>
                <p className="text-gray-500 text-[11px] lg:text-xs">API key + access key · single-call card issuance</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-gray-200 hover:border-[#2B6CF0] shadow-sm transition-colors p-3 lg:p-4 rounded-2xl">
              <div className="bg-blue-50 text-[#2B6CF0] p-2 rounded-xl shrink-0">
                <BiWallet className="text-lg" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-xs lg:text-sm mb-0.5">Prepaid wallet</h3>
                <p className="text-gray-500 text-[11px] lg:text-xs">Top up with USDT across 8 chains</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-gray-200 hover:border-[#2B6CF0] shadow-sm transition-colors p-3 lg:p-4 rounded-2xl">
              <div className="bg-blue-50 text-[#2B6CF0] p-2 rounded-xl shrink-0">
                <BiCreditCard className="text-lg" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-xs lg:text-sm mb-0.5">Card lifecycle</h3>
                <p className="text-gray-500 text-[11px] lg:text-xs">Issue, load, freeze, terminate via /api/v1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full max-w-[460px] flex flex-col items-center">
          <div className="w-full bg-white border border-gray-200 rounded-[1.5rem] px-8 py-6 lg:px-10 lg:py-8 shadow-[0_10px_60px_rgba(43,108,240,0.08)] relative overflow-hidden">

            {/* Inner top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#2B6CF0] to-transparent opacity-40"></div>

            {/* Logo/Icon inside form */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-gradient-to-br from-[#2B6CF0] to-[#1E40AF] text-white p-3 rounded-[1rem] mb-4 shadow-[0_4px_20px_rgba(43,108,240,0.3)]">
                <BsBoxSeam className="text-xl stroke-[0.5]" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1.5">Distributor Sign In</h2>
              <p className="text-gray-500 text-xs">Manage API keys, wallet & cards</p>
            </div>

            {/* Status Message Display */}
            {message.text && (
              <div className={`w-full p-3 rounded-xl mb-4 text-xs font-semibold text-center border ${message.type === 'error' ? 'bg-red-50 border-red-200 text-red-600' : 'bg-blue-50 border-blue-200 text-[#1E40AF]'
                }`}>
                {message.text}
              </div>
            )}

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-[#1E40AF] text-[9px] font-bold tracking-widest uppercase mb-1.5 ml-1">
                  Email Address
                </label>
                <div className="flex items-center bg-[#F4F8FF] border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-[#2B6CF0] focus-within:ring-1 focus-within:ring-[#2B6CF0] transition-all group">
                  <BiEnvelope className="text-gray-400 group-focus-within:text-[#2B6CF0] mr-3 text-lg transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="distributor@example.com"
                    className="bg-transparent w-full outline-none text-gray-900 placeholder-gray-400 text-xs"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1E40AF] text-[9px] font-bold tracking-widest uppercase mb-1.5 ml-1">
                  Password
                </label>
                <div className="flex items-center bg-[#F4F8FF] border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-[#2B6CF0] focus-within:ring-1 focus-within:ring-[#2B6CF0] transition-all group">
                  <FiLock className="text-gray-400 group-focus-within:text-[#2B6CF0] mr-3 text-lg transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="bg-transparent w-full outline-none text-gray-900 placeholder-gray-400 text-xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-[#2B6CF0] ml-2 outline-none"
                  >
                    <FiEye className="text-base" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2B6CF0] to-[#1E40AF] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs lg:text-sm py-3 rounded-xl mt-3 transition-all duration-200 shadow-[0_5px_20px_rgba(43,108,240,0.25)] hover:shadow-[0_5px_25px_rgba(43,108,240,0.35)] hover:-translate-y-0.5"
              >
                {loading ? 'Authenticating...' : 'Sign In to Distributor Portal'}
              </button>
            </form>

            <div className="mt-5 text-center">
              <p className="text-gray-500 text-[11px] lg:text-xs">
                Don't have an account? <a href="/distributor/register" className="text-[#2B6CF0] hover:text-[#1E40AF] transition-colors hover:underline font-semibold ml-1">Sign Up</a>
              </p>
            </div>

          </div>

          <p className="text-gray-400 text-[11px] mt-6 font-medium">
            Almanzar Cards - Distributor Portal
          </p>
        </div>

      </div>
    </div>
  );
};

export default DistributorLogin;