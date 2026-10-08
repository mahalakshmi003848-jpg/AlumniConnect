import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  CalendarDays,
  MessageCircle,
  Handshake,
  Award,
  Code2,
  ExternalLink,
  CheckCircle2,
  UserRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./AlumniProfile.css";

const alumniProfiles = {
  1: {
    name: "Ananya Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bengaluru, India",
    batch: "2019",
    degree: "B.Tech CSE",
    industry: "Technology",
    initials: "AS",
    color: "linear-gradient(135deg, #2563eb, #4f46e5)",
    about:
      "Experienced software engineer passionate about building scalable products and helping students start their careers in technology.",
    skills: ["React", "Python", "Cloud", "JavaScript", "Azure"],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Microsoft",
        period: "2023 - Present",
      },
      {
        role: "Software Engineer",
        company: "Microsoft",
        period: "2020 - 2023",
      },
    ],
    achievements: [
      {
        title: "Microsoft Star Performer",
        description: "Recognized for outstanding product engineering.",
      },
      {
        title: "50+ Students Mentored",
        description: "Actively supports students entering the technology industry.",
      },
    ],
    email: "ananya.sharma@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  2: {
    name: "Rahul Menon",
    role: "Product Manager",
    company: "Amazon",
    location: "Bengaluru, India",
    batch: "2018",
    degree: "B.Tech IT",
    industry: "Technology",
    initials: "RM",
    color: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    about:
      "Product leader focused on building customer-centric digital products and helping young professionals understand product careers.",
    skills: ["Product Strategy", "Analytics", "Leadership", "Agile"],
    experience: [
      {
        role: "Product Manager",
        company: "Amazon",
        period: "2022 - Present",
      },
      {
        role: "Associate Product Manager",
        company: "Amazon",
        period: "2019 - 2022",
      },
    ],
    achievements: [
      {
        title: "Product Excellence Award",
        description: "Recognized for delivering high-impact products.",
      },
      {
        title: "Industry Mentor",
        description: "Regularly mentors students interested in product management.",
      },
    ],
    email: "rahul.menon@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  3: {
    name: "Priya Nair",
    role: "Data Scientist",
    company: "Google",
    location: "Hyderabad, India",
    batch: "2020",
    degree: "B.Tech AIML",
    industry: "Data Science",
    initials: "PN",
    color: "linear-gradient(135deg, #059669, #0f766e)",
    about:
      "Data scientist working on machine learning systems and analytics. Passionate about AI education and mentoring students.",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Statistics"],
    experience: [
      {
        role: "Data Scientist",
        company: "Google",
        period: "2023 - Present",
      },
      {
        role: "ML Engineer",
        company: "Analytics Labs",
        period: "2020 - 2023",
      },
    ],
    achievements: [
      {
        title: "AI Research Contributor",
        description: "Contributed to machine learning research initiatives.",
      },
      {
        title: "Women in AI Mentor",
        description: "Mentors students interested in artificial intelligence.",
      },
    ],
    email: "priya.nair@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  4: {
    name: "Arjun Rao",
    role: "Founder & CEO",
    company: "Nexora Labs",
    location: "Mumbai, India",
    batch: "2017",
    degree: "B.Tech CSE",
    industry: "Entrepreneurship",
    initials: "AR",
    color: "linear-gradient(135deg, #ea580c, #c2410c)",
    about:
      "Entrepreneur building technology products and helping aspiring founders turn ideas into scalable ventures.",
    skills: ["Startups", "Leadership", "AI", "Fundraising", "Strategy"],
    experience: [
      {
        role: "Founder & CEO",
        company: "Nexora Labs",
        period: "2021 - Present",
      },
      {
        role: "Technology Consultant",
        company: "Independent",
        period: "2018 - 2021",
      },
    ],
    achievements: [
      {
        title: "Startup Founder",
        description: "Built and scaled a technology startup.",
      },
      {
        title: "Entrepreneur Mentor",
        description: "Helps students and young founders validate startup ideas.",
      },
    ],
    email: "arjun.rao@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  5: {
    name: "Sneha Iyer",
    role: "UX Design Lead",
    company: "Adobe",
    location: "Bengaluru, India",
    batch: "2021",
    degree: "B.Des",
    industry: "Design",
    initials: "SI",
    color: "linear-gradient(135deg, #db2777, #be185d)",
    about:
      "UX designer focused on creating simple, accessible and delightful digital experiences.",
    skills: ["UX", "UI", "Figma", "Design Systems", "Research"],
    experience: [
      {
        role: "UX Design Lead",
        company: "Adobe",
        period: "2024 - Present",
      },
      {
        role: "Product Designer",
        company: "Design Studio",
        period: "2021 - 2024",
      },
    ],
    achievements: [
      {
        title: "Design Excellence Award",
        description: "Recognized for outstanding user experience design.",
      },
      {
        title: "Design Mentor",
        description: "Supports students building design portfolios.",
      },
    ],
    email: "sneha.iyer@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  6: {
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "Deloitte",
    location: "Pune, India",
    batch: "2016",
    degree: "B.Tech CSE",
    industry: "Technology",
    initials: "VS",
    color: "linear-gradient(135deg, #0891b2, #155e75)",
    about:
      "Cloud architect specializing in scalable infrastructure, DevOps and enterprise cloud transformation.",
    skills: ["AWS", "Azure", "DevOps", "Docker", "Kubernetes"],
    experience: [
      {
        role: "Cloud Architect",
        company: "Deloitte",
        period: "2021 - Present",
      },
      {
        role: "Cloud Engineer",
        company: "Tech Solutions",
        period: "2017 - 2021",
      },
    ],
    achievements: [
      {
        title: "Cloud Transformation Lead",
        description: "Led multiple enterprise cloud transformation projects.",
      },
      {
        title: "Cloud Mentor",
        description: "Mentors students interested in cloud computing.",
      },
    ],
    email: "vikram.singh@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  7: {
    name: "Meera Krishnan",
    role: "Marketing Manager",
    company: "Flipkart",
    location: "Bengaluru, India",
    batch: "2019",
    degree: "MBA",
    industry: "Marketing",
    initials: "MK",
    color: "linear-gradient(135deg, #f59e0b, #d97706)",
    about:
      "Marketing professional passionate about digital growth, branding and building strong customer communities.",
    skills: ["Marketing", "Branding", "Growth", "Campaigns", "Analytics"],
    experience: [
      {
        role: "Marketing Manager",
        company: "Flipkart",
        period: "2023 - Present",
      },
      {
        role: "Marketing Executive",
        company: "GrowthWorks",
        period: "2019 - 2023",
      },
    ],
    achievements: [
      {
        title: "Growth Champion",
        description: "Recognized for successful digital marketing campaigns.",
      },
      {
        title: "Marketing Mentor",
        description: "Guides students interested in marketing careers.",
      },
    ],
    email: "meera.krishnan@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  8: {
    name: "Karthik Reddy",
    role: "ML Engineer",
    company: "NVIDIA",
    location: "Hyderabad, India",
    batch: "2022",
    degree: "B.Tech AIML",
    industry: "Artificial Intelligence",
    initials: "KR",
    color: "linear-gradient(135deg, #16a34a, #166534)",
    about:
      "Machine learning engineer working on AI systems and accelerated computing technologies.",
    skills: ["Machine Learning", "Python", "CUDA", "Deep Learning", "NLP"],
    experience: [
      {
        role: "ML Engineer",
        company: "NVIDIA",
        period: "2024 - Present",
      },
      {
        role: "AI Engineer",
        company: "AI Research Lab",
        period: "2022 - 2024",
      },
    ],
    achievements: [
      {
        title: "AI Innovation Award",
        description: "Recognized for contributions to AI engineering.",
      },
      {
        title: "AI Community Mentor",
        description: "Helps students learn practical machine learning.",
      },
    ],
    email: "karthik.reddy@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },

  9: {
    name: "Divya Menon",
    role: "Financial Analyst",
    company: "EY",
    location: "Chennai, India",
    batch: "2020",
    degree: "B.Com",
    industry: "Finance",
    initials: "DM",
    color: "linear-gradient(135deg, #4f46e5, #3730a3)",
    about:
      "Financial analyst working with business intelligence, financial modelling and data-driven decision making.",
    skills: ["Finance", "Excel", "Analytics", "Financial Modelling"],
    experience: [
      {
        role: "Financial Analyst",
        company: "EY",
        period: "2022 - Present",
      },
      {
        role: "Finance Associate",
        company: "Business Consulting",
        period: "2020 - 2022",
      },
    ],
    achievements: [
      {
        title: "Finance Excellence Award",
        description: "Recognized for analytical excellence.",
      },
      {
        title: "Career Mentor",
        description: "Supports students exploring finance careers.",
      },
    ],
    email: "divya.menon@alumniconnect.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

function AlumniProfile() {
  const { id } = useParams();
  const profile = alumniProfiles[id];

  if (!profile) {
    return (
      <div className="alumni-profile-page">
        <Navbar />

        <div className="profile-not-found">
          <div className="profile-not-found-icon">
            <UserRound size={32} />
          </div>

          <h2>Alumni profile not found</h2>

          <p>
            The alumni profile you're looking for doesn't exist.
          </p>

          <Link to="/alumni" className="primary-btn">
            Back to Alumni Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="alumni-profile-page">
      <Navbar />

      <main className="alumni-profile-container">
        <Link to="/alumni" className="profile-back">
          <ArrowLeft size={17} />
          Back to Alumni Directory
        </Link>

        <section className="profile-hero">
          <div className="profile-main">
            <div
              className="profile-avatar-large"
              style={{ background: profile.color }}
            >
              {profile.initials}
            </div>

            <div className="profile-info">
              <div className="verified-profile">
                <CheckCircle2 size={15} />
                Verified Alumni
              </div>

              <h1>{profile.name}</h1>

              <div className="profile-role">
                {profile.role}
              </div>

              <div className="profile-company">
                {profile.company}
              </div>

              <div className="profile-meta">
                <span>
                  <MapPin size={15} />
                  {profile.location}
                </span>

                <span>
                  <GraduationCap size={15} />
                  Batch {profile.batch}
                </span>

                <span>
                  <Briefcase size={15} />
                  {profile.industry}
                </span>
              </div>

              <div className="profile-socials">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="connect-btn">
              <Handshake size={17} />
              Connect
            </button>

            <button className="message-btn">
              <MessageCircle size={17} />
              Message
            </button>
          </div>
        </section>

        <div className="profile-layout">
          <div className="profile-left">
            <section className="profile-card">
              <h2 className="profile-card-title">
                <UserRound size={20} />
                About
              </h2>

              <p className="profile-about">
                {profile.about}
              </p>
            </section>

            <section className="profile-card">
              <h2 className="profile-card-title">
                <Briefcase size={20} />
                Experience
              </h2>

              {profile.experience.map((item, index) => (
                <div className="experience-item" key={index}>
                  <div className="experience-dot"></div>

                  <h3>{item.role}</h3>

                  <div className="experience-company">
                    {item.company}
                  </div>

                  <div className="experience-period">
                    {item.period}
                  </div>
                </div>
              ))}
            </section>

            <section className="profile-card">
              <h2 className="profile-card-title">
                <Award size={20} />
                Achievements
              </h2>

              <div className="achievement-list">
                {profile.achievements.map((item, index) => (
                  <div className="achievement-item" key={index}>
                    <div className="achievement-icon">
                      <Award size={19} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="profile-right">
            <section className="profile-card">
              <h2 className="profile-card-title">
                <GraduationCap size={20} />
                Education
              </h2>

              <div className="education-box">
                <div className="education-icon">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3>{profile.degree}</h3>

                  <p>
                    Reva University
                    <br />
                    Class of {profile.batch}
                  </p>
                </div>
              </div>
            </section>

            <section className="profile-card">
              <h2 className="profile-card-title">
                <Code2 size={20} />
                Skills & Expertise
              </h2>

              <div className="skills-list">
                {profile.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="profile-card">
              <h2 className="profile-card-title">
                <Mail size={20} />
                Contact
              </h2>

              <div className="contact-list">
                <a
                  href={`mailto:${profile.email}`}
                  className="contact-link"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <ExternalLink size={16} />
                  LinkedIn Profile
                </a>
              </div>
            </section>

            <section className="mentoring-card">
              <h3>Looking for a mentor?</h3>

              <p>
                {profile.name} is open to helping students and young
                professionals with career guidance.
              </p>

              <button className="mentoring-btn">
                <Handshake size={17} />
                Request Mentorship
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AlumniProfile;