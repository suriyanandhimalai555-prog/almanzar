import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DistributorLogin from '../pages/auth/DistributorLogin';
import DistributorRegister from '../pages/auth/DistributorRegister';

import ProtectedRoute from './ProtectedRoute';
import DistributorDashboard from '../pages/distributor/DistributorDashboard';
import DistributorWallet from '../pages/distributor/DistributorWallet';
import DistributorTransactions from '../pages/distributor/DistributorTransactions';
import DistributorAPIKey from '../pages/distributor/DistributorAPIKey';
import DistributorMyUser from '../pages/distributor/DistributorMyUser';
import DistributorCards from '../pages/distributor/DistributorCards';
import DistributorPhysicalCards from '../pages/distributor/DistributorPhysicalCards';
import DistributorAPILogs from '../pages/distributor/DistributorAPILogs';
import DistributorDeveloper from '../pages/distributor/DistributorDeveloper';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Exact route shown in the browser URL bar of the screenshot */}
        <Route path="/distributor/login" element={<DistributorLogin />} />
        <Route path="/distributor/register" element={<DistributorRegister />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/distributor/dashboard" element={<DistributorDashboard />} />
          <Route path="/distributor/wallet" element={<DistributorWallet />} />
          <Route path="/distributor/transactions" element={<DistributorTransactions />} />
          <Route path="/distributor/api-keys" element={<DistributorAPIKey />} />
          <Route path="/distributor/users" element={<DistributorMyUser />} />
          <Route path="/distributor/cards" element={<DistributorCards />} />
          <Route path="/distributor/physical-cards" element={<DistributorPhysicalCards />} />
          <Route path="/distributor/api-logs" element={<DistributorAPILogs />} />
          <Route path="/distributor/developer" element={<DistributorDeveloper />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRouter;