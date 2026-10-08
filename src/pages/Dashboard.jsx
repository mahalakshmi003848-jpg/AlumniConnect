import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Handshake,
  LogOut,
  MapPin,
  Pencil,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { supabase } from "../supabase";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadProfile();
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/login");
      return;
    }

    setUser(user);

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (!error) {
      setProfile(data);
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-dot"></div>
        Loading your network...
      </div>
    );
  }

  const displayName =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    "AlumniConnect Member";

  const firstName = displayName.split(" ")[0];

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard-main">
        <section className="dashboard-hero">
          <div>
            <span className="dashboard-eyebrow">
              <span></span>
              YOUR ALUMNICONNECT
            </span>

            <h1>
              Welcome back,
              <br />
              <em>{firstName}.</em>
            </h1>

            <p>
              Your professional network, opportunities and connections —
              all in one place.
            </p>
          </div>

          <button className="dashboard-logout" onClick={handleLogout}>
            <LogOut size={16} />
            Sign out
          </button>
        </section>

        <section className="dashboard-profile-strip">
          <div className="dashboard-avatar">
            {displayName.charAt(0).toUpperCase()}
          </div>

          <div className="dashboard-profile-info">
            <div className="dashboard-name-row">
              <h2>{displayName}</h2>

              {profile?.verified && (
                <span className="verified-badge">
                  <ShieldCheck size={14} />
                  Verified
                </span>
              )}
            </div>

            <p>
              {profile?.job_title || "AlumniConnect Member"}
              {profile?.company ? ` · ${profile.company}` : ""}
            </p>

            <div className="dashboard-meta">
              {profile?.location && (
                <span>
                  <MapPin size={14} />
                  {profile.location}
                </span>
              )}

              {profile?.graduation_year && (
                <span>
                  <Users size={14} />
                  Class of {profile.graduation_year}
                </span>
              )}

              {profile?.degree && (
                <span>
                  <UserRound size={14} />
                  {profile.degree}
                  {profile.branch ? ` · ${profile.branch}` : ""}
                </span>
              )}
            </div>
          </div>

          <Link to="/alumni" className="edit-profile">
            <Pencil size={15} />
            View network
          </Link>
        </section>

        <section className="dashboard-stats">
          <div>
            <span>NETWORK</span>
            <strong>2,500+</strong>
            <p>Alumni connected</p>
          </div>

          <div>
            <span>OPPORTUNITIES</span>
            <strong>120+</strong>
            <p>Active opportunities</p>
          </div>

          <div>
            <span>MENTORSHIP</span>
            <strong>86</strong>
            <p>Mentors available</p>
          </div>

          <div>
            <span>EVENTS</span>
            <strong>24</strong>
            <p>Upcoming events</p>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <span>EXPLORE</span>
                <h2>Make your network work for you.</h2>
              </div>
            </div>

            <div className="dashboard-actions">
              <Link to="/alumni" className="dashboard-action">
                <div className="action-icon">
                  <Users size={21} />
                </div>

                <div>
                  <h3>Explore Alumni</h3>
                  <p>Find alumni by batch, industry and skills.</p>
                </div>

                <ArrowRight size={18} />
              </Link>

              <Link to="/mentorship" className="dashboard-action">
                <div className="action-icon">
                  <Handshake size={21} />
                </div>

                <div>
                  <h3>Find a Mentor</h3>
                  <p>Connect with experienced alumni.</p>
                </div>

                <ArrowRight size={18} />
              </Link>

              <Link to="/jobs" className="dashboard-action">
                <div className="action-icon">
                  <Briefcase size={21} />
                </div>

                <div>
                  <h3>Career Opportunities</h3>
                  <p>Discover jobs, internships and referrals.</p>
                </div>

                <ArrowRight size={18} />
              </Link>

              <Link to="/events" className="dashboard-action">
                <div className="action-icon">
                  <CalendarDays size={21} />
                </div>

                <div>
                  <h3>Upcoming Events</h3>
                  <p>Meet the community beyond the screen.</p>
                </div>

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <aside className="dashboard-side-card">
            <span>YOUR PROFILE</span>

            <h3>Keep your profile current.</h3>

            <p>
              Complete your professional profile so alumni and students can
              discover your experience and expertise.
            </p>

            <div className="profile-progress">
              <div>
                <span>Profile strength</span>
                <strong>65%</strong>
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>
            </div>

            <button
              onClick={() =>
                alert("Profile editing will be connected next.")
              }
            >
              Complete profile
              <ArrowRight size={16} />
            </button>
          </aside>
        </section>

        <section className="dashboard-bottom">
          <div>
            <span>ALUMNICONNECT</span>
            <h2>
              Stay connected.
              <br />
              Keep growing.
            </h2>
          </div>

          <p>
            The strongest opportunities often begin with a conversation.
            Explore the network and make your next connection count.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;