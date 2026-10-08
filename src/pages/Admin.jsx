import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CalendarDays,
  Bell,
  TrendingUp,
  UserPlus,
  Eye,
  CheckCircle2,
  Clock3,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  GraduationCap,
  Building2,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <LayoutDashboard size={19} /> },
    { name: "Alumni", icon: <Users size={19} /> },
    { name: "Jobs", icon: <Briefcase size={19} /> },
    { name: "Events", icon: <CalendarDays size={19} /> },
  ];

  const stats = [
    {
      title: "Total Alumni",
      value: "10,248",
      change: "+12.5%",
      icon: <Users size={23} />,
      type: "blue",
    },
    {
      title: "Active Alumni",
      value: "8,642",
      change: "+8.2%",
      icon: <CheckCircle2 size={23} />,
      type: "green",
    },
    {
      title: "Job Opportunities",
      value: "524",
      change: "+18.7%",
      icon: <Briefcase size={23} />,
      type: "purple",
    },
    {
      title: "Upcoming Events",
      value: "32",
      change: "+5.4%",
      icon: <CalendarDays size={23} />,
      type: "orange",
    },
  ];

  const recentAlumni = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@email.com",
      batch: "2024",
      department: "CSE",
      status: "Verified",
    },
    {
      name: "Ishita Rao",
      email: "ishita.rao@email.com",
      batch: "2023",
      department: "AIML",
      status: "Verified",
    },
    {
      name: "Rohan Mehta",
      email: "rohan.mehta@email.com",
      batch: "2022",
      department: "ECE",
      status: "Pending",
    },
    {
      name: "Nisha Kapoor",
      email: "nisha.kapoor@email.com",
      batch: "2021",
      department: "ISE",
      status: "Verified",
    },
    {
      name: "Aditya Menon",
      email: "aditya.menon@email.com",
      batch: "2020",
      department: "CSE",
      status: "Verified",
    },
  ];

  const activities = [
    {
      icon: <UserPlus size={17} />,
      title: "New alumni registered",
      text: "Aarav Sharma joined the network",
      time: "12 min ago",
    },
    {
      icon: <Briefcase size={17} />,
      title: "New job posted",
      text: "Software Engineer at Microsoft",
      time: "38 min ago",
    },
    {
      icon: <CalendarDays size={17} />,
      title: "Event created",
      text: "Alumni Meet 2026",
      time: "1 hour ago",
    },
    {
      icon: <GraduationCap size={17} />,
      title: "Mentorship request",
      text: "3 new mentorship requests",
      time: "2 hours ago",
    },
  ];

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-page">
      <Navbar />

      <div className="admin-mobile-header">
        <button
          className="admin-menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="admin-mobile-title">
          <strong>Admin Dashboard</strong>
        </div>
      </div>

      <div className="admin-layout">
        <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="admin-sidebar-brand">
            <div className="admin-brand-icon">A</div>
            <div>
              <strong>Admin Panel</strong>
              <span>AlumniConnect</span>
            </div>
          </div>

          <div className="admin-menu">
            <p className="admin-menu-label">MAIN MENU</p>

            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`admin-menu-item ${
                  activeMenu === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActiveMenu(item.name);
                  closeSidebar();
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}

            <p className="admin-menu-label second-label">SYSTEM</p>

            <button className="admin-menu-item">
              <Bell size={19} />
              <span>Notifications</span>
              <small className="notification-count">4</small>
            </button>

            <button className="admin-menu-item">
              <TrendingUp size={19} />
              <span>Analytics</span>
            </button>
          </div>

          <div className="admin-sidebar-bottom">
            <div className="admin-user">
              <div className="admin-user-avatar">AD</div>
              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div className="admin-overlay" onClick={closeSidebar}></div>
        )}

        <main className="admin-main">
          <div className="admin-topbar">
            <div>
              <p className="admin-breadcrumb">Dashboard / Overview</p>
              <h1>Good morning, Admin 👋</h1>
              <p className="admin-subtitle">
                Here's what's happening across your alumni network today.
              </p>
            </div>

            <div className="admin-top-actions">
              <button className="admin-icon-btn">
                <Bell size={20} />
                <span></span>
              </button>

              <div className="admin-profile-mini">
                <div className="admin-mini-avatar">AD</div>
                <div>
                  <strong>Admin</strong>
                  <span>Super Admin</span>
                </div>
              </div>
            </div>
          </div>

          <section className="admin-stats-grid">
            {stats.map((stat) => (
              <div className="admin-stat-card" key={stat.title}>
                <div className={`admin-stat-icon ${stat.type}`}>
                  {stat.icon}
                </div>

                <div className="admin-stat-info">
                  <span>{stat.title}</span>
                  <h2>{stat.value}</h2>
                  <p>
                    <ArrowUpRight size={14} />
                    {stat.change}
                    <small> this month</small>
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="admin-content-grid">
            <div className="admin-panel large-panel">
              <div className="panel-heading">
                <div>
                  <h2>Alumni Growth</h2>
                  <p>Network growth over the last 6 months</p>
                </div>

                <select className="admin-period">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>All time</option>
                </select>
              </div>

              <div className="growth-chart">
                <div className="chart-y-axis">
                  <span>12K</span>
                  <span>9K</span>
                  <span>6K</span>
                  <span>3K</span>
                  <span>0</span>
                </div>

                <div className="chart-area">
                  <div className="chart-grid-line line-1"></div>
                  <div className="chart-grid-line line-2"></div>
                  <div className="chart-grid-line line-3"></div>
                  <div className="chart-grid-line line-4"></div>
                  <div className="chart-grid-line line-5"></div>

                  <svg
                    className="growth-svg"
                    viewBox="0 0 700 260"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2563eb"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#2563eb"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,220 C70,205 80,190 140,195 C210,200 220,155 280,165 C340,175 350,120 420,130 C490,140 500,80 560,95 C620,110 650,55 700,45 L700,260 L0,260 Z"
                      fill="url(#chartGradient)"
                    />

                    <path
                      d="M0,220 C70,205 80,190 140,195 C210,200 220,155 280,165 C340,175 350,120 420,130 C490,140 500,80 560,95 C620,110 650,55 700,45"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <circle cx="700" cy="45" r="6" fill="#2563eb" />
                  </svg>

                  <div className="chart-months">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-panel activity-panel">
              <div className="panel-heading">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest platform activity</p>
                </div>
              </div>

              <div className="activity-list">
                {activities.map((activity, index) => (
                  <div className="activity-item" key={index}>
                    <div className="activity-icon">{activity.icon}</div>

                    <div className="activity-content">
                      <strong>{activity.title}</strong>
                      <p>{activity.text}</p>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="admin-panel alumni-table-panel">
            <div className="panel-heading table-heading">
              <div>
                <h2>Recently Registered Alumni</h2>
                <p>Manage and verify newly registered alumni</p>
              </div>

              <button className="view-all-btn">
                View all <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="table-toolbar">
              <div className="table-search">
                <Search size={18} />
                <input placeholder="Search alumni..." />
              </div>

              <button className="table-filter-btn">All Status</button>
            </div>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ALUMNI</th>
                    <th>BATCH</th>
                    <th>DEPARTMENT</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {recentAlumni.map((alumni) => (
                    <tr key={alumni.email}>
                      <td>
                        <div className="table-user">
                          <div className="table-avatar">
                            {alumni.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>

                          <div>
                            <strong>{alumni.name}</strong>
                            <span>{alumni.email}</span>
                          </div>
                        </div>
                      </td>

                      <td>{alumni.batch}</td>

                      <td>
                        <span className="department-badge">
                          {alumni.department}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status-badge ${
                            alumni.status === "Verified"
                              ? "verified"
                              : "pending"
                          }`}
                        >
                          {alumni.status === "Verified" ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <Clock3 size={14} />
                          )}

                          {alumni.status}
                        </span>
                      </td>

                      <td>
                        <button className="more-btn">
                          <MoreHorizontal size={19} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="admin-quick-grid">
            <div className="quick-card">
              <div className="quick-icon blue">
                <Users size={22} />
              </div>
              <div>
                <h3>Alumni Directory</h3>
                <p>Manage alumni profiles and information.</p>
              </div>
              <ArrowUpRight size={18} />
            </div>

            <div className="quick-card">
              <div className="quick-icon purple">
                <Briefcase size={22} />
              </div>
              <div>
                <h3>Career Opportunities</h3>
                <p>Review jobs and internship postings.</p>
              </div>
              <ArrowUpRight size={18} />
            </div>

            <div className="quick-card">
              <div className="quick-icon orange">
                <Building2 size={22} />
              </div>
              <div>
                <h3>Events & Reunions</h3>
                <p>Manage upcoming alumni events.</p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Admin;