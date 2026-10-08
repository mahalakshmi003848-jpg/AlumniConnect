import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  Bookmark,
  CheckCircle2,
  Briefcase,
  Building2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./Jobs.css";

const jobs = [
  {
    id: 1,
    company: "Microsoft",
    logo: "M",
    logoClass: "microsoft",
    title: "Software Engineer",
    location: "Bengaluru",
    type: "Full-time",
    category: "Technology",
    experience: "0–2 years",
    salary: "₹12–18 LPA",
    posted: "2 days ago",
    alumni: "Ananya Sharma",
    skills: ["React", "Python", "Azure"],
  },
  {
    id: 2,
    company: "Amazon",
    logo: "a",
    logoClass: "amazon",
    title: "Product Analyst",
    location: "Hyderabad",
    type: "Full-time",
    category: "Product",
    experience: "1–3 years",
    salary: "₹10–16 LPA",
    posted: "3 days ago",
    alumni: "Rahul Menon",
    skills: ["Analytics", "SQL", "Product"],
  },
  {
    id: 3,
    company: "Adobe",
    logo: "A",
    logoClass: "adobe",
    title: "UX Design Intern",
    location: "Bengaluru",
    type: "Internship",
    category: "Design",
    experience: "Students",
    salary: "₹35K / month",
    posted: "5 days ago",
    alumni: "Sneha Iyer",
    skills: ["Figma", "UX", "Research"],
  },
  {
    id: 4,
    company: "Google",
    logo: "G",
    logoClass: "google",
    title: "Data Science Intern",
    location: "Hyderabad",
    type: "Internship",
    category: "Data & AI",
    experience: "Students",
    salary: "₹45K / month",
    posted: "1 week ago",
    alumni: "Priya Nair",
    skills: ["Python", "ML", "TensorFlow"],
  },
  {
    id: 5,
    company: "Deloitte",
    logo: "D",
    logoClass: "deloitte",
    title: "Cloud Engineer",
    location: "Pune",
    type: "Full-time",
    category: "Technology",
    experience: "2–4 years",
    salary: "₹14–20 LPA",
    posted: "1 week ago",
    alumni: "Vikram Singh",
    skills: ["AWS", "DevOps", "Cloud"],
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [saved, setSaved] = useState([]);

  const categories = ["All", "Technology", "Product", "Data & AI", "Design"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleSaved = (id) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="jobs-page">
      <Navbar />

      {/* HERO */}
      <section className="jobs-premium-hero">
        <div className="jobs-hero-inner">
          <div className="jobs-hero-copy">
            <span className="jobs-kicker">
              <i></i>
              CAREER OPPORTUNITIES
            </span>

            <h1>
              Opportunities
              <br />
              move through
              <br />
              <em>networks.</em>
            </h1>

            <p>
              Discover jobs and internships shared by alumni who understand
              your journey — and can help you take the next step.
            </p>

            <div className="jobs-hero-actions">
              <a href="#jobs" className="jobs-dark-button">
                Explore opportunities
                <ArrowRight size={17} />
              </a>

              <a href="#post" className="jobs-text-button">
                Post an opportunity
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="jobs-hero-visual">
            <div className="jobs-visual-label">
              <span>ACTIVE NETWORK</span>
              <strong>500+ opportunities</strong>
            </div>

            <div className="career-grid"></div>

            <div className="career-main-card">
              <div className="career-card-top">
                <span>FEATURED ROLE</span>
                <div className="open-dot">OPEN</div>
              </div>

              <div className="career-company">
                <div className="career-company-logo">M</div>

                <div>
                  <strong>Microsoft</strong>
                  <span>Bengaluru · India</span>
                </div>
              </div>

              <h3>Software Engineer</h3>

              <div className="career-tags">
                <span>React</span>
                <span>Python</span>
                <span>Azure</span>
              </div>

              <div className="career-card-bottom">
                <span>₹12–18 LPA</span>
                <strong>Apply <ArrowUpRight size={13} /></strong>
              </div>
            </div>

            <div className="floating-opportunity float-one">
              <div className="float-icon google-float">G</div>
              <div>
                <strong>Data Scientist</strong>
                <span>Google · Hyderabad</span>
              </div>
            </div>

            <div className="floating-opportunity float-two">
              <div className="float-icon adobe-float">A</div>
              <div>
                <strong>UX Intern</strong>
                <span>Adobe · Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="jobs-stats">
        <div className="jobs-stats-inner">
          <div>
            <strong>500+</strong>
            <span>Open Opportunities</span>
          </div>

          <div>
            <strong>120+</strong>
            <span>Companies</span>
          </div>

          <div>
            <strong>42%</strong>
            <span>Alumni Referrals</span>
          </div>

          <div>
            <strong>18</strong>
            <span>Career Domains</span>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="jobs-directory" id="jobs">
        <div className="jobs-directory-inner">
          <div className="jobs-heading">
            <div>
              <span className="jobs-section-kicker">THE OPPORTUNITY BOARD</span>

              <h2>
                Find work that
                <br />
                <em>moves you forward.</em>
              </h2>
            </div>

            <p>
              Search roles shared by companies and alumni across technology,
              product, design, data and more.
            </p>
          </div>

          <div className="jobs-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search jobs, companies or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span>⌘ K</span>
          </div>

          <div className="jobs-category-row">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="jobs-result-header">
            <span>
              {filteredJobs.length} opportunities found
            </span>

            <span>RECENTLY POSTED</span>
          </div>

          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <article className="premium-job" key={job.id}>
                <div className={`job-logo ${job.logoClass}`}>
                  {job.logo}
                </div>

                <div className="job-information">
                  <div className="job-title-line">
                    <h3>{job.title}</h3>

                    <span className="job-verified">
                      <CheckCircle2 size={12} />
                      Alumni verified
                    </span>
                  </div>

                  <div className="job-company">
                    <strong>{job.company}</strong>

                    <span>
                      <MapPin size={11} />
                      {job.location}
                    </span>

                    <span>{job.type}</span>
                  </div>

                  <div className="job-skills-row">
                    {job.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="job-side">
                  <span>{job.experience}</span>
                  <strong>{job.salary}</strong>
                  <small>{job.posted}</small>
                </div>

                <div className="job-actions-premium">
                  <button
                    className={`save-button ${
                      saved.includes(job.id) ? "saved" : ""
                    }`}
                    onClick={() => toggleSaved(job.id)}
                    title="Save job"
                  >
                    <Bookmark
                      size={16}
                      fill={saved.includes(job.id) ? "currentColor" : "none"}
                    />
                  </button>

                  <button className="apply-button">
                    Apply
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="job-posted-by">
                  Shared by <strong>{job.alumni}</strong>
                </div>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <div className="jobs-empty-state">
                <Search size={25} />
                <h3>No opportunities found</h3>
                <p>Try a different keyword or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY ALUMNI */}
      <section className="jobs-feature">
        <div className="jobs-feature-inner">
          <div className="jobs-feature-copy">
            <span className="jobs-section-kicker">
              WHY ALUMNI OPPORTUNITIES
            </span>

            <h2>
              A job is good.
              <br />
              A <em>connection</em>
              <br />
              is better.
            </h2>

            <p>
              Alumni don't just share openings. They understand the
              institution, the student experience and the potential behind
              the application.
            </p>

            <a href="#jobs">
              Explore alumni-shared roles
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="referral-card">
            <div className="referral-top">
              <span>ALUMNI REFERRAL</span>
              <strong>HIGH IMPACT</strong>
            </div>

            <div className="referral-person">
              <div className="referral-avatar">AS</div>

              <div>
                <strong>Ananya Sharma</strong>
                <span>Senior Software Engineer · Microsoft</span>
              </div>
            </div>

            <div className="referral-message">
              <span>SHARED AN OPPORTUNITY</span>

              <h3>Software Engineer</h3>

              <p>
                Looking for students and alumni with strong fundamentals,
                curiosity and a passion for building.
              </p>
            </div>

            <div className="referral-bottom">
              <span>Microsoft · Bengaluru</span>
              <button>View role <ArrowUpRight size={13} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* POST CTA */}
      <section className="post-job-section" id="post">
        <div className="post-job-inner">
          <div>
            <span className="jobs-section-kicker">FOR ALUMNI & EMPLOYERS</span>

            <h2>
              Know a great
              <br />
              opportunity?
              <br />
              <em>Share it.</em>
            </h2>
          </div>

          <div className="post-job-copy">
            <p>
              Help someone from your community discover their next
              opportunity. Share a job, internship or career opening with the
              AlumniConnect network.
            </p>

            <button>
              Post an opportunity
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <footer className="jobs-footer">
        <div className="jobs-footer-brand">
          <div>A</div>
          <span>AlumniConnect</span>
        </div>

        <span>CAREERS · OPPORTUNITIES · NETWORK</span>
      </footer>
    </div>
  );
}

export default Jobs;