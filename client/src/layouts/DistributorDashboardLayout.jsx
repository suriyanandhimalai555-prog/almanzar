import React, { useState } from 'react';
import Sidebar from '../components/distributor/Sidebar';
import Navbar from '../components/distributor/Navbar';

const DistributorDashboardLayout = ({ children }) => {
  // State to manage mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#010905] min-h-screen font-sans selection:bg-[#2ee59d] selection:text-[#02160d]">
      
      {/* Pass state and close function to Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Pass toggle function to Navbar */}
        <Navbar onMenuClick={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DistributorDashboardLayout;