import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  CalendarDays,
  Handshake,
  ArrowRight,
  Search,
  MapPin,
  Clock3,
  Building2,
  TrendingUp,
  Bell,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      label: "Alumni Network",
      value: "10,248",
      change: "+12.4%",
      icon: <Users size={21} />,
    },
    {
      label: "Career Opportunities",
      value: "524",
      change: "+8.7%",
      icon: <Briefcase size={21} />,
    },
    {
      label: "Active Mentors",
      value: "286",
      change: "+15.2%",
      icon: <Handshake size={21} />,
    },
    {
      label: "Upcoming Events",
      value: "18",
      change: "+4.1%",
      icon: <CalendarDays size={21} />,
    },
  ];

  const opportunities = [
    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Bengaluru, India",
      type: "Full Time",
      posted: "2 days ago",
    },
    {
      company: "Deloitte",
      role: "Data Analyst Intern",
      location: "Hyderabad, India",
      type: "Internship",
      posted: "4 days ago",
    },
    {
      company: "Google",
      role: "ML Research Intern",
      location: "Bengaluru, India",
      type: "Internship",
      posted: "1 week ago",
    },
  ];

  const alumni = [
    {
      name: "Ananya Sharma",
      role: "Senior Software Engineer",
      company: "Microsoft",
      batch: "2019",
      initials: "AS",
    },
    {
      name: "Rahul Menon",
      role: "Product Manager",
      company: "Amazon",
      batch: "2018",
      initials: "RM",
    },
    {
      name: "Priya Nair",
      role: "Data Scientist",
      company: "Google",
      batch: "2020",
      initials: "PN",
    },
  ];

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard-container">
        {/* Welcome Header */}
        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-eyebrow">
              <Sparkles size={14} />
              ALUMNICONNECT DASHBOARD
            </span>

            <h1>
              Welcome back, <span>Maha!</span>
            </h1>

            <p>
              Stay connected, discover opportunities, and grow with your
              alumni community.
            </p>
          </div>

          <div className="dashboard-header-actions">
            <button className="notification-btn">
              <Bell size={19} />
              <span></span>
            </button>

            <Link to="/alumni" className="dashboard-profile">
              <div className="profile-avatar">MG</div>

              <div>
                <strong>Maha Gopinath</strong>
                <small>CSE • AIML</small>
              </div>

              <ChevronRight size={17} />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="dashboard-stats">
          {stats.map((stat) => (
            <div className="dashboard-stat-card" key={stat.label}>
              <div className="stat-top">
                <div className="stat-icon">{stat.icon}</div>

                <span className="stat-growth">
                  <TrendingUp size={13} />
                  {stat.change}
                </span>
              </div>

              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Main Grid */}
        <section className="dashboard-main-grid">
          {/* Opportunities */}
          <div className="dashboard-panel opportunities-panel">
            <div className="panel-heading">
              <div>
                <span>CAREER</span>
                <h2>Latest Opportunities</h2>
              </div>

              <Link to="/jobs">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="opportunity-list">
              {opportunities.map((job) => (
                <div className="opportunity-item" key={job.role}>
                  <div className="company-logo">
                    {job.company.charAt(0)}
                  </div>

                  <div className="opportunity-info">
                    <strong>{job.role}</strong>
                    <span>
                      <Building2 size={13} />
                      {job.company}
                    </span>

                    <small>
                      <MapPin size={12} />
                      {job.location}
                    </small>
                  </div>

                  <div className="opportunity-meta">
                    <span>{job.type}</span>
                    <small>
                      <Clock3 size={12} />
                      {job.posted}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-panel quick-panel">
            <div className="panel-heading">
              <div>
                <span>EXPLORE</span>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className="quick-actions">
              <Link to="/alumni" className="quick-action">
                <div className="quick-icon blue">
                  <Users size={21} />
                </div>

                <div>
                  <strong>Find Alumni</strong>
                  <span>Explore your alumni network</span>
                </div>

                <ArrowRight size={17} />
              </Link>

              <Link to="/mentorship" className="quick-action">
                <div className="quick-icon purple">
                  <Handshake size={21} />
                </div>

                <div>
                  <strong>Find a Mentor</strong>
                  <span>Learn from experienced alumni</span>
                </div>

                <ArrowRight size={17} />
              </Link>

              <Link to="/jobs" className="quick-action">
                <div className="quick-icon green">
                  <Briefcase size={21} />
                </div>

                <div>
                  <strong>Explore Jobs</strong>
                  <span>Discover career opportunities</span>
                </div>

                <ArrowRight size={17} />
              </Link>

              <Link to="/events" className="quick-action">
                <div className="quick-icon orange">
                  <CalendarDays size={21} />
                </div>

                <div>
                  <strong>Upcoming Events</strong>
                  <span>Connect at alumni events</span>
                </div>

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section className="dashboard-panel alumni-panel">
          <div className="panel-heading">
            <div>
              <span>NETWORK</span>
              <h2>Alumni You May Know</h2>
            </div>

            <Link to="/alumni">
              Explore directory
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="alumni-cards">
            {alumni.map((person) => (
              <div className="alumni-card" key={person.name}>
                <div className="alumni-avatar">{person.initials}</div>

                <div className="alumni-info">
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                  <small>
                    {person.company} • Batch {person.batch}
                  </small>
                </div>

                <Link
                  to="/alumni"
                  className="connect-btn"
                >
                  Connect
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Search CTA */}
        <section className="dashboard-search-banner">
          <div className="search-banner-icon">
            <Search size={25} />
          </div>

          <div>
            <span>LOOKING FOR SOMEONE?</span>
            <h2>Find the right connection.</h2>
            <p>
              Search alumni by name, batch, company, location, industry,
              or skills.
            </p>
          </div>

          <Link to="/alumni" className="search-banner-btn">
            Search Alumni
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;