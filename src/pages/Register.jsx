import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  GraduationCap,
  CalendarDays,
  UserPlus,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="register-page">
      <Navbar />

      <main className="register-container">
        <div className="register-visual">
          <div className="register-visual-content">
            <span>JOIN THE NETWORK</span>

            <h1>
              Your journey
              <br />
              doesn't end
              <br />
              at <strong>graduation.</strong>
            </h1>

            <p>
              Stay connected with your university community, discover
              opportunities, find mentors, and make meaningful professional
              connections.
            </p>

            <div className="register-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <User size={19} />
                </div>
                <div>
                  <strong>Build your profile</strong>
                  <span>Showcase your journey and achievements</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <strong>Connect with alumni</strong>
                  <span>Find people from your batch and industry</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <UserPlus size={19} />
                </div>
                <div>
                  <strong>Grow together</strong>
                  <span>Mentor, network, and discover opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="register-card">
          <div className="register-header">
            <div className="register-icon">
              <UserPlus size={27} />
            </div>

            <span className="register-eyebrow">CREATE ACCOUNT</span>

            <h2>Join AlumniConnect</h2>

            <p>
              Create your profile and become part of a growing alumni network.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="register-form-group">
                <label htmlFor="firstName">First Name</label>

                <div className="register-input">
                  <User size={18} />
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>

              <div className="register-form-group">
                <label htmlFor="lastName">Last Name</label>

                <div className="register-input">
                  <User size={18} />
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="register-form-group">
              <label htmlFor="registerEmail">Email Address</label>

              <div className="register-input">
                <Mail size={18} />
                <input
                  id="registerEmail"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="register-form-group">
                <label htmlFor="graduationYear">Graduation Year</label>

                <div className="register-input">
                  <CalendarDays size={18} />

                  <select id="graduationYear" defaultValue="" required>
                    <option value="" disabled>
                      Select year
                    </option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                  </select>
                </div>
              </div>

              <div className="register-form-group">
                <label htmlFor="registerRole">Role</label>

                <div className="register-input">
                  <GraduationCap size={18} />

                  <select id="registerRole" defaultValue="" required>
                    <option value="" disabled>
                      Select role
                    </option>
                    <option value="alumni">Alumni</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="register-form-group">
              <label htmlFor="registerPassword">Password</label>

              <div className="register-input">
                <Lock size={18} />

                <input
                  id="registerPassword"
                  type="password"
                  placeholder="Create a password"
                  minLength="6"
                  required
                />
              </div>

              <small>Password must contain at least 6 characters.</small>
            </div>

            <label className="terms-row">
              <input type="checkbox" required />

              <span>
                I agree to the <a href="#terms">Terms of Service</a> and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit" className="register-submit">
              <UserPlus size={19} />
              Create My Account
            </button>
          </form>

          <div className="already-account">
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>

          <Link to="/" className="register-back">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Register;