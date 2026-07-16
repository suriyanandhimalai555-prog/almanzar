import React, { useState } from 'react';
import Sidebar from '../components/distributor/Sidebar';
import Navbar from '../components/distributor/Navbar';

const DistributorDashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        <Navbar onMenuClick={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DistributorDashboardLayout;