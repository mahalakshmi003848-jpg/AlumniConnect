import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Users,
  Briefcase,
  Handshake,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

const alumni = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bengaluru",
  },
  {
    initials: "RM",
    name: "Rahul Menon",
    role: "Product Manager",
    company: "Amazon",
    location: "Bengaluru",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Data Scientist",
    company: "Google",
    location: "Hyderabad",
  },
  {
    initials: "KR",
    name: "Karthik Reddy",
    role: "ML Engineer",
    company: "NVIDIA",
    location: "Hyderabad",
  },
];

function Home() {
  return (
    <div className="premium-home">
      <Navbar />

      {/* HERO */}
      <main>
        <section className="premium-hero">
          <div className="premium-hero-inner">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span></span>
                THE ALUMNI NETWORK, REIMAGINED
              </div>

              <h1>
                Your network
                <br />
                <em>has no limits.</em>
              </h1>

              <p>
                AlumniConnect brings students, alumni and institutions
                together in one professional network built around meaningful
                connections.
              </p>

              <div className="hero-buttons">
                <Link to="/alumni" className="hero-main-button">
                  Explore the network
                  <ArrowUpRight size={18} />
                </Link>

                <Link to="/register" className="hero-text-button">
                  Join AlumniConnect
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="hero-note">
                <CheckCircle2 size={15} />
                <span>Built for students, alumni & institutions</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="hero-network">
              <div className="network-label">
                <span>LIVE NETWORK</span>
                <strong>10,248 alumni</strong>
              </div>

              <div className="network-line line-a"></div>
              <div className="network-line line-b"></div>
              <div className="network-line line-c"></div>
              <div className="network-line line-d"></div>

              <div className="network-person person-one">
                <div className="person-image person-blue">AS</div>
                <div className="person-info">
                  <strong>Ananya Sharma</strong>
                  <span>Microsoft · 2019</span>
                </div>
              </div>

              <div className="network-person person-two">
                <div className="person-image person-purple">PN</div>
                <div className="person-info">
                  <strong>Priya Nair</strong>
                  <span>Google · 2020</span>
                </div>
              </div>

              <div className="network-person person-three">
                <div className="person-image person-green">KR</div>
                <div className="person-info">
                  <strong>Karthik Reddy</strong>
                  <span>NVIDIA · 2022</span>
                </div>
              </div>

              <div className="network-person person-four">
                <div className="person-image person-orange">RM</div>
                <div className="person-info">
                  <strong>Rahul Menon</strong>
                  <span>Amazon · 2018</span>
                </div>
              </div>

              <div className="network-core">
                <div className="core-inner">
                  <span>A</span>
                </div>
              </div>

              <div className="network-status">
                <span className="status-dot"></span>
                2,481 connections online
              </div>
            </div>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="numbers-section">
          <div className="numbers-inner">
            <div className="number-intro">
              <span>THE NETWORK</span>
              <p>
                One place to discover the people, opportunities and
                experiences that make your alumni community valuable.
              </p>
            </div>

            <div className="number-item">
              <strong>10K<span>+</span></strong>
              <small>Alumni</small>
            </div>

            <div className="number-item">
              <strong>250<span>+</span></strong>
              <small>Mentors</small>
            </div>

            <div className="number-item">
              <strong>500<span>+</span></strong>
              <small>Opportunities</small>
            </div>

            <div className="number-item">
              <strong>100<span>+</span></strong>
              <small>Events</small>
            </div>
          </div>
        </section>

        {/* ALUMNI */}
        <section className="alumni-section">
          <div className="section-top">
            <div>
              <span className="section-kicker">DISCOVER YOUR NETWORK</span>

              <h2>
                Meet the people
                <br />
                behind the <i>community.</i>
              </h2>
            </div>

            <div className="section-description">
              <p>
                From first jobs to global careers, discover alumni who can
                become your next connection, mentor or opportunity.
              </p>

              <Link to="/alumni">
                Browse all alumni <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="alumni-row">
            {alumni.map((person, index) => (
              <Link
                to="/alumni"
                className={`alumni-profile profile-${index + 1}`}
                key={person.name}
              >
                <div className="profile-top">
                  <div className={`large-avatar avatar-${index + 1}`}>
                    {person.initials}
                  </div>

                  <ArrowUpRight size={18} />
                </div>

                <div className="profile-details">
                  <span>{person.company}</span>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>

                  <div className="profile-location">
                    <MapPin size={12} />
                    {person.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MENTORSHIP */}
        <section className="mentorship-section">
          <div className="mentorship-inner">
            <div className="mentorship-visual">
              <div className="mentor-window">
                <div className="mentor-window-top">
                  <span>MENTOR MATCH</span>
                  <div className="match-score">94% match</div>
                </div>

                <div className="mentor-profile">
                  <div className="mentor-avatar">AS</div>

                  <div>
                    <strong>Ananya Sharma</strong>
                    <span>Senior Software Engineer · Microsoft</span>
                  </div>
                </div>

                <div className="mentor-tags">
                  <span>Software Engineering</span>
                  <span>Career Growth</span>
                  <span>React</span>
                </div>

                <div className="mentor-footer">
                  <span>Available for mentorship</span>
                  <button>Connect</button>
                </div>
              </div>
            </div>

            <div className="mentorship-copy">
              <span className="section-kicker">MENTORSHIP</span>

              <h2>
                Learn from someone
                <br />
                who has <i>been there.</i>
              </h2>

              <p>
                Great careers are rarely built alone. Find alumni who have
                already navigated the path you're interested in and turn
                their experience into your advantage.
              </p>

              <Link to="/mentorship" className="dark-link">
                Find a mentor
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section className="opportunities-section">
          <div className="section-top">
            <div>
              <span className="section-kicker">CAREER OPPORTUNITIES</span>

              <h2>
                Opportunities move
                <br />
                through <i>networks.</i>
              </h2>
            </div>

            <div className="section-description">
              <p>
                Jobs and internships shared by people who understand where
                you've come from and where you want to go.
              </p>

              <Link to="/jobs">
                Explore opportunities <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="opportunity-list">
            <div className="opportunity-row">
              <div className="company-mark microsoft">M</div>

              <div className="opportunity-main">
                <strong>Software Engineer</strong>
                <span>Microsoft · Bengaluru</span>
              </div>

              <div className="opportunity-type">FULL-TIME</div>

              <div className="opportunity-posted">
                Posted by <b>Ananya Sharma</b>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="opportunity-row">
              <div className="company-mark amazon">a</div>

              <div className="opportunity-main">
                <strong>Product Analyst</strong>
                <span>Amazon · Hyderabad</span>
              </div>

              <div className="opportunity-type">FULL-TIME</div>

              <div className="opportunity-posted">
                Posted by <b>Rahul Menon</b>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="opportunity-row">
              <div className="company-mark adobe">A</div>

              <div className="opportunity-main">
                <strong>UX Design Intern</strong>
                <span>Adobe · Bengaluru</span>
              </div>

              <div className="opportunity-type">INTERNSHIP</div>

              <div className="opportunity-posted">
                Posted by <b>Sneha Iyer</b>
              </div>

              <ArrowUpRight size={18} />
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="search-section">
          <div className="search-inner">
            <div className="search-copy">
              <span className="section-kicker">FIND YOUR CONNECTION</span>

              <h2>
                Start with a
                <br />
                <i>search.</i>
              </h2>

              <p>
                Search thousands of alumni by name, company, batch, industry
                or skill.
              </p>
            </div>

            <div className="big-search">
              <Search size={21} />

              <span>Search alumni, companies, skills...</span>

              <div className="search-key">⌘ K</div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-section">
          <div className="final-inner">
            <span>ALUMNI CONNECT</span>

            <h2>
              The next great
              <br />
              connection is <i>out there.</i>
            </h2>

            <p>
              Build your network. Find your people. Create what comes next.
            </p>

            <Link to="/register" className="final-button">
              Join the network
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="premium-footer">
        <div className="footer-left">
          <div className="footer-symbol">A</div>

          <div>
            <strong>AlumniConnect</strong>
            <span>Professional alumni networking platform</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/alumni">Alumni</Link>
          <Link to="/mentorship">Mentorship</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/events">Events</Link>
        </div>

        <div className="footer-right">
          WMAD HACKATHON · 2026
        </div>
      </footer>
    </div>
  );
}

export default Home;