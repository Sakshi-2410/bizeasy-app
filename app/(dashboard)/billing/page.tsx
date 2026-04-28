"use client";

import { useState } from "react";

export default function Billing() {
  const [bills, setBills] = useState([
    { id: 1, name: "Customer A", amount: 1200 },
    { id: 2, name: "Customer B", amount: 2500 }
  ]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "240px",
        background: "#0f172a",
        color: "white",
        padding: "20px"
      }}>
        <h2>BizEasy 💼</h2>

        {["Dashboard", "Billing", "Reports"].map((item) => (
          <p key={item} style={{ margin: "15px 0" }}>{item}</p>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, background: "#f1f5f9", padding: "20px" }}>
        <h2>Billing 💳</h2>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px"
        }}>
          <h3>Invoices</h3>

          {bills.map((bill) => (
            <div key={bill.id} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee"
            }}>
              <span>{bill.name}</span>
              <span>₹{bill.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}