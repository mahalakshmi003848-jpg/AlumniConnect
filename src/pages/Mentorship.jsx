import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Mentorship.css";

const mentors = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bengaluru",
    expertise: "Software Engineering",
    experience: "6+ years",
    color: "blue",
  },
  {
    initials: "RM",
    name: "Rahul Menon",
    role: "Product Manager",
    company: "Amazon",
    location: "Bengaluru",
    expertise: "Product & Strategy",
    experience: "7+ years",
    color: "purple",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Data Scientist",
    company: "Google",
    location: "Hyderabad",
    expertise: "AI & Data Science",
    experience: "5+ years",
    color: "green",
  },
  {
    initials: "VI",
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "Deloitte",
    location: "Pune",
    expertise: "Cloud & DevOps",
    experience: "9+ years",
    color: "orange",
  },
];

function Mentorship() {
  return (
    <div className="mentorship-page">
      <Navbar />

      {/* HERO */}
      <section className="mentor-hero">
        <div className="mentor-hero-inner">
          <div className="mentor-hero-copy">
            <span className="mentor-kicker">
              <i></i>
              ALUMNI MENTORSHIP
            </span>

            <h1>
              Learn from
              <br />
              those who
              <br />
              <em>have been there.</em>
            </h1>

            <p>
              Connect with alumni who have already walked the path you're
              exploring. Get practical guidance, career advice and
              perspective from people who understand where you're starting.
            </p>

            <div className="mentor-hero-actions">
              <a href="#mentors" className="mentor-dark-button">
                Find your mentor
                <ArrowRight size={17} />
              </a>

              <a href="#become" className="mentor-link-button">
                Become a mentor
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mentor-hero-visual">
            <div className="mentor-visual-heading">
              <span>MENTOR NETWORK</span>
              <strong>250+ mentors</strong>
            </div>

            <div className="mentor-orbit orbit-one"></div>
            <div className="mentor-orbit orbit-two"></div>

            <div className="mentor-center">
              <div>MC</div>
              <span>MENTOR<br />CONNECT</span>
            </div>

            <div className="mentor-node node-one">
              <div className="node-avatar blue-avatar">AS</div>
              <div>
                <strong>Ananya</strong>
                <span>Microsoft</span>
              </div>
            </div>

            <div className="mentor-node node-two">
              <div className="node-avatar purple-avatar">RM</div>
              <div>
                <strong>Rahul</strong>
                <span>Amazon</span>
              </div>
            </div>

            <div className="mentor-node node-three">
              <div className="node-avatar green-avatar">PN</div>
              <div>
                <strong>Priya</strong>
                <span>Google</span>
              </div>
            </div>

            <div className="mentor-node node-four">
              <div className="node-avatar orange-avatar">VI</div>
              <div>
                <strong>Vikram</strong>
                <span>Deloitte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mentor-stats">
        <div className="mentor-stats-inner">
          <div>
            <strong>250+</strong>
            <span>Industry Mentors</span>
          </div>

          <div>
            <strong>18</strong>
            <span>Career Domains</span>
          </div>

          <div>
            <strong>94%</strong>
            <span>Average Match Rate</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>Personal Guidance</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mentor-process">
        <div className="mentor-process-inner">
          <div className="process-heading">
            <span className="mentor-section-kicker">HOW IT WORKS</span>

            <h2>
              A better way to
              <br />
              find <em>guidance.</em>
            </h2>
          </div>

          <div className="process-list">
            <div className="process-item">
              <span>01</span>
              <div>
                <h3>Tell us what you're exploring</h3>
                <p>
                  Choose your interests, career goals, skills and the kind of
                  guidance you're looking for.
                </p>
              </div>
              <Search size={19} />
            </div>

            <div className="process-item">
              <span>02</span>
              <div>
                <h3>Discover the right alumni</h3>
                <p>
                  Explore mentors whose experience, expertise and career path
                  align with your goals.
                </p>
              </div>
              <Briefcase size={19} />
            </div>

            <div className="process-item">
              <span>03</span>
              <div>
                <h3>Start a meaningful conversation</h3>
                <p>
                  Send a mentorship request and start learning directly from
                  someone who has already done it.
                </p>
              </div>
              <MessageCircle size={19} />
            </div>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="mentor-directory" id="mentors">
        <div className="mentor-directory-inner">
          <div className="mentor-directory-heading">
            <div>
              <span className="mentor-section-kicker">THE MENTOR NETWORK</span>

              <h2>
                Find someone
                <br />
                worth <em>learning from.</em>
              </h2>
            </div>

            <p>
              Experienced alumni from technology, product, design, finance,
              data and more — ready to share what they know.
            </p>
          </div>

          <div className="mentor-search">
            <Search size={18} />
            <span>Search by name, company, skill or career path...</span>
            <div>⌘ K</div>
          </div>

          <div className="mentor-filter-row">
            <span className="active">All mentors</span>
            <span>Technology</span>
            <span>Product</span>
            <span>Data & AI</span>
            <span>Design</span>
            <span>Leadership</span>
          </div>

          <div className="mentor-list">
            {mentors.map((mentor) => (
              <div className="mentor-list-item" key={mentor.name}>
                <div className={`mentor-large-avatar ${mentor.color}`}>
                  {mentor.initials}
                </div>

                <div className="mentor-main-info">
                  <div className="mentor-name-row">
                    <h3>{mentor.name}</h3>
                    <CheckCircle2 size={14} />
                  </div>

                  <p>{mentor.role}</p>

                  <div className="mentor-meta">
                    <span>{mentor.company}</span>
                    <span>
                      <MapPin size={11} />
                      {mentor.location}
                    </span>
                  </div>
                </div>

                <div className="mentor-expertise">
                  <span>EXPERTISE</span>
                  <strong>{mentor.expertise}</strong>
                  <small>{mentor.experience}</small>
                </div>

                <Link to="/alumni" className="mentor-connect">
                  View profile
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK FEATURE */}
      <section className="mentor-feature">
        <div className="mentor-feature-inner">
          <div className="mentor-feature-copy">
            <span className="mentor-section-kicker">THE RIGHT MATCH</span>

            <h2>
              Your experience
              <br />
              matters more than
              <br />
              <em>you think.</em>
            </h2>

            <p>
              Sometimes the most valuable career advice doesn't come from a
              course or a search engine. It comes from someone who has already
              faced the decision you're facing now.
            </p>

            <Link to="/alumni">
              Explore alumni
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mentor-match">
            <div className="match-top">
              <span>RECOMMENDED MENTOR</span>
              <strong>94% MATCH</strong>
            </div>

            <div className="match-person">
              <div className="match-avatar">PN</div>

              <div>
                <h3>Priya Nair</h3>
                <p>Data Scientist · Google</p>
              </div>
            </div>

            <div className="match-reasons">
              <span>Machine Learning</span>
              <span>Python</span>
              <span>Career Growth</span>
            </div>

            <div className="match-bottom">
              <div>
                <small>BASED ON</small>
                <strong>Your interests & goals</strong>
              </div>

              <button>Connect</button>
            </div>
          </div>
        </div>
      </section>

      {/* BECOME MENTOR */}
      <section className="become-mentor" id="become">
        <div className="become-inner">
          <div>
            <span className="mentor-section-kicker">GIVE BACK</span>

            <h2>
              You've learned a lot.
              <br />
              <em>Pass it on.</em>
            </h2>
          </div>

          <div className="become-right">
            <p>
              Help the next generation make better decisions, avoid the
              mistakes you made and see possibilities they haven't considered
              yet.
            </p>

            <button>
              Become a mentor
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mentor-footer">
        <div className="mentor-footer-brand">
          <div>A</div>
          <span>AlumniConnect</span>
        </div>

        <div>MENTORSHIP · CONNECT · GROW</div>
      </footer>
    </div>
  );
}

export default Mentorship;