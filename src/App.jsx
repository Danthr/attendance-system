import { useState } from "react";
import "./App.css";

const students = [
  { id: 1, name: "Riya Sharma", prn: "1032221001", attendance: 92, status: "present" },
  { id: 2, name: "Arjun Mehta", prn: "1032221002", attendance: 78, status: "absent" },
  { id: 3, name: "Sneha Patil", prn: "1032221003", attendance: 85, status: "present" },
  { id: 4, name: "Karan Desai", prn: "1032221004", attendance: 61, status: "absent" },
  { id: 5, name: "Priya Joshi", prn: "1032221005", attendance: 95, status: "present" },
  { id: 6, name: "Atharva Dange", prn: "1032221013", attendance: 88, status: "present" },
  { id: 7, name: "Neha Kulkarni", prn: "1032221007", attendance: 73, status: "present" },
  { id: 8, name: "Rohan Gupta", prn: "1032221008", attendance: 55, status: "absent" },
];

const stats = [
  { label: "Total Students", value: "8", icon: "👥" },
  { label: "Present Today", value: "5", icon: "✅" },
  { label: "Absent Today", value: "3", icon: "❌" },
  { label: "Avg Attendance", value: "78%", icon: "📊" },
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) => {
    const matchFilter = filter === "all" || s.status === filter;
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.prn.includes(search);
    return matchFilter && matchSearch;
  });

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="logo">🎓</div>
          <div>
            <h1 className="title">AttendAI</h1>
            <p className="subtitle">Student Attendance & Analytics System</p>
          </div>
        </div>
        <div className="header-right">
          <span className="date">{new Date().toDateString()}</span>
          <div className="ai-badge">AI Powered</div>
        </div>
      </header>

      <main className="main">
        <section className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        <section className="table-section">
          <div className="table-header">
            <h2 className="section-title">Today's Attendance</h2>
            <div className="controls">
              <input
                className="search"
                type="text"
                placeholder="Search by name or PRN"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="filters">
                {["all", "present", "absent"].map((f) => (
                  <button
                    key={f}
                    className={`filter-btn ${filter === f ? "active" : ""}`}
                    onClick={() => setFilter(f)}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>PRN</th>
                  <th>Attendance %</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.id} className="table-row">
                    <td className="td-num">{i + 1}</td>
                    <td className="td-name">{s.name}</td>
                    <td className="td-prn">{s.prn}</td>
                    <td className="td-att">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${s.attendance}%`,
                            background:
                              s.attendance >= 75 ? "#22c55e" : "#ef4444",
                          }}
                        />
                      </div>
                      <span className="att-pct">{s.attendance}%</span>
                    </td>
                    <td>
                      <span className={`badge badge-${s.status}`}>
                        {s.status === "present" ? "✓ Present" : "✗ Absent"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <p className="no-results">No students found.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Atharva Dange · PRN: 1032221013 · IT Project Management Lab</p>
      </footer>
    </div>
  );
}
