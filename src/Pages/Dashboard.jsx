import React from "react";
import LoanOffers from "./LoanOffers";
import { Routes, Route } from "react-router-dom";
import LoanApplication from "./LoanApplication";
import Login from "./Login";

const Dashboard = () => {
  const id = 1;
  return (
    <div className="dashboard">
      <div className="container py-4">
        <Routes>
          <Route
            path={`/user/applications/${id}/offers`}
            index
            element={<LoanOffers />}
          />
          <Route path="*" index element={<LoanApplication />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
