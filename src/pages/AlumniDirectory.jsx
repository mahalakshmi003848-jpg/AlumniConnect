import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  GraduationCap,
  ArrowRight,
  UserRound,
  X,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./AlumniDirectory.css";

const alumniData = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bengaluru, India",
    batch: "2019",
    degree: "B.Tech CSE",
    industry: "Technology",
    skills: ["React", "Python", "Cloud"],
    initials: "AS",
    color: "blue",
  },
  {
    id: 2,
    name: "Rahul Menon",
    role: "Product Manager",
    company: "Amazon",
    location: "Bengaluru, India",
    batch: "2018",
    degree: "B.Tech IT",
    industry: "Technology",
    skills: ["Product", "Strategy", "Analytics"],
    initials: "RM",
    color: "purple",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Data Scientist",
    company: "Google",
    location: "Hyderabad, India",
    batch: "2020",
    degree: "B.Tech AIML",
    industry: "Data Science",
    skills: ["Python", "ML", "TensorFlow"],
    initials: "PN",
    color: "green",
  },
  {
    id: 4,
    name: "Arjun Rao",
    role: "Founder & CEO",
    company: "Nexora Labs",
    location: "Mumbai, India",
    batch: "2017",
    degree: "B.Tech CSE",
    industry: "Entrepreneurship",
    skills: ["Startups", "Leadership", "AI"],
    initials: "AR",
    color: "orange",
  },
  {
    id: 5,
    name: "Sneha Iyer",
    role: "UX Design Lead",
    company: "Adobe",
    location: "Bengaluru, India",
    batch: "2021",
    degree: "B.Des",
    industry: "Design",
    skills: ["UX", "UI", "Figma"],
    initials: "SI",
    color: "pink",
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "Deloitte",
    location: "Pune, India",
    batch: "2016",
    degree: "B.Tech CSE",
    industry: "Technology",
    skills: ["AWS", "Azure", "DevOps"],
    initials: "VS",
    color: "cyan",
  },
  {
    id: 7,
    name: "Meera Krishnan",
    role: "Marketing Manager",
    company: "Flipkart",
    location: "Bengaluru, India",
    batch: "2019",
    degree: "MBA",
    industry: "Marketing",
    skills: ["Marketing", "Branding", "Growth"],
    initials: "MK",
    color: "rose",
  },
  {
    id: 8,
    name: "Karthik Reddy",
    role: "ML Engineer",
    company: "NVIDIA",
    location: "Hyderabad, India",
    batch: "2022",
    degree: "B.Tech AIML",
    industry: "Artificial Intelligence",
    skills: ["Machine Learning", "Python", "CUDA"],
    initials: "KR",
    color: "indigo",
  },
  {
    id: 9,
    name: "Divya Menon",
    role: "Financial Analyst",
    company: "EY",
    location: "Chennai, India",
    batch: "2020",
    degree: "B.Com",
    industry: "Finance",
    skills: ["Finance", "Excel", "Analytics"],
    initials: "DM",
    color: "teal",
  },
];

function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [industry, setIndustry] = useState("All Industries");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        alumni.name.toLowerCase().includes(searchText) ||
        alumni.role.toLowerCase().includes(searchText) ||
        alumni.company.toLowerCase().includes(searchText) ||
        alumni.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesBatch =
        batch === "All Batches" || alumni.batch === batch;

      const matchesIndustry =
        industry === "All Industries" || alumni.industry === industry;

      return matchesSearch && matchesBatch && matchesIndustry;
    });
  }, [search, batch, industry]);

  const clearFilters = () => {
    setSearch("");
    setBatch("All Batches");
    setIndustry("All Industries");
  };

  return (
    <div className="directory-page">
      <Navbar />

      <main className="directory-container">
        {/* Header */}
        <section className="directory-header">
          <div>
            <span className="directory-eyebrow">
              <Sparkles size={14} />
              ALUMNI NETWORK
            </span>

            <h1>
              Meet your <span>Alumni.</span>
            </h1>

            <p>
              Discover alumni, build meaningful connections, and explore
              professional opportunities across industries.
            </p>
          </div>

          <div className="directory-count">
            <strong>{filteredAlumni.length}</strong>
            <span>Alumni Found</span>
          </div>
        </section>

        {/* Search */}
        <section className="directory-search-section">
          <div className="directory-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search by name, company, role, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            className={`filter-toggle ${
              showFilters ? "filter-active" : ""
            }`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </section>

        {/* Filters */}
        {showFilters && (
          <section className="directory-filters">
            <div className="filter-group">
              <label>Graduation Batch</label>

              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              >
                <option>All Batches</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Industry</label>

              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option>All Industries</option>
                <option>Technology</option>
                <option>Data Science</option>
                <option>Artificial Intelligence</option>
                <option>Design</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Entrepreneurship</option>
              </select>
            </div>

            <button className="clear-filters" onClick={clearFilters}>
              Clear Filters
            </button>
          </section>
        )}

        {/* Active Filters */}
        {(search ||
          batch !== "All Batches" ||
          industry !== "All Industries") && (
          <div className="active-filters">
            <span>Active filters:</span>

            {search && (
              <button onClick={() => setSearch("")}>
                Search: {search}
                <X size={13} />
              </button>
            )}

            {batch !== "All Batches" && (
              <button onClick={() => setBatch("All Batches")}>
                {batch}
                <X size={13} />
              </button>
            )}

            {industry !== "All Industries" && (
              <button onClick={() => setIndustry("All Industries")}>
                {industry}
                <X size={13} />
              </button>
            )}
          </div>
        )}

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <section className="alumni-directory-grid">
            {filteredAlumni.map((alumni) => (
              <article className="directory-card" key={alumni.id}>
                <div className={`directory-avatar ${alumni.color}`}>
                  {alumni.initials}
                </div>

                <div className="directory-card-content">
                  <div className="directory-card-top">
                    <div>
                      <h2>{alumni.name}</h2>
                      <p>{alumni.role}</p>
                    </div>

                    <span className="batch-badge">
                      {alumni.batch}
                    </span>
                  </div>

                  <div className="directory-details">
                    <span>
                      <Briefcase size={14} />
                      {alumni.company}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {alumni.location}
                    </span>

                    <span>
                      <GraduationCap size={14} />
                      {alumni.degree}
                    </span>
                  </div>

                  <div className="skill-list">
                    {alumni.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <Link
                    to={`/alumni/${alumni.id}`}
                    className="view-profile-btn"
                  >
                    View Profile
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="no-results">
            <div>
              <UserRound size={30} />
            </div>

            <h2>No alumni found</h2>

            <p>
              Try changing your search or removing some filters.
            </p>

            <button onClick={clearFilters}>
              Clear all filters
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default AlumniDirectory;