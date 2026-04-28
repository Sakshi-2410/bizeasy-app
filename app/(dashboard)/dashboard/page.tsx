"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  const [stats, setStats] = useState({
    sales: 0,
    invoices: 0,
    customers: 0
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    setStats({
      sales: 25000,
      invoices: 120,
      customers: 45
    });
  }, []);

  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        fontFamily: "Arial"
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: isMobile ? "100%" : "240px",
          background: "#0f172a",
          color: "white",
          padding: "20px"
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>BizEasy 💼</h2>

        {["Dashboard", "Billing", "Reports", "Settings"].map((item) => (
          <p
            key={item}
            style={{
              margin: "15px 0",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "6px"
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#1e293b")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {item}
          </p>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, background: "#f1f5f9" }}>
        {/* Navbar */}
        <div
          style={{
            background: "white",
            padding: "15px 25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <h3 style={{ color: "#111827" }}>Dashboard</h3>
          <div
            style={{
              background: "#e2e8f0",
              padding: "8px 12px",
              borderRadius: "50px",
              color: "#111827"
            }}
          >
            👤 User
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "25px" }}>
          <h2 style={{ color: "#111827" }}>Welcome back 👋</h2>

          {/* Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "20px"
            }}
          >
            <div style={cardStyle}>
              <h4 style={{ color: "#6b7280" }}>Total Sales</h4>
              <h2 style={{ color: "#111827" }}>₹{stats.sales}</h2>
            </div>

            <div style={cardStyle}>
              <h4 style={{ color: "#6b7280" }}>Invoices</h4>
              <h2 style={{ color: "#111827" }}>{stats.invoices}</h2>
            </div>

            <div style={cardStyle}>
              <h4 style={{ color: "#6b7280" }}>Customers</h4>
              <h2 style={{ color: "#111827" }}>{stats.customers}</h2>
            </div>
          </div>

          {/* Chart */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "30px",
              border: "1px solid #e5e7eb"
            }}
          >
            <h3 style={{ color: "#111827" }}>Sales Overview 📈</h3>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#2563eb"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  border: "1px solid #e5e7eb"
};