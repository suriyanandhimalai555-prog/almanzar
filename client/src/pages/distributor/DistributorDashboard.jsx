import React from 'react';
import DistributorDashboardCom from '../../components/distributor/home/DistributorDashboardCom';
import DistributorDashboardLayout from "../../layouts/DistributorDashboardLayout"

const DistributorDashboard = () => {
  return (
    <DistributorDashboardLayout>
      <DistributorDashboardCom />
    </DistributorDashboardLayout>
  );
};

export default DistributorDashboard;