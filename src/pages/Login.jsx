import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, LogIn, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <Navbar />

      <main className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <ShieldCheck size={28} />
            </div>

            <span className="login-eyebrow">WELCOME BACK</span>

            <h1>Welcome back to AlumniConnect</h1>

            <p>
              Sign in to reconnect with your alumni network, discover
              opportunities, and grow together.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <div className="input-wrapper">
                <Mail size={19} />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Password recovery will be connected to Supabase.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="input-wrapper">
                <Lock size={19} />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <label className="remember-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="login-submit">
              <LogIn size={19} />
              Sign In
            </button>
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <div className="login-register">
            <p>Don't have an account?</p>

            <Link to="/register">
              Create your AlumniConnect account
            </Link>
          </div>

          <Link to="/" className="back-home">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>

        <div className="login-side">
          <div className="side-content">
            <span>YOUR NETWORK AWAITS</span>

            <h2>
              One connection
              <br />
              can change your
              <br />
              <strong>next opportunity.</strong>
            </h2>

            <p>
              Connect with alumni, discover mentors, explore career
              opportunities, and stay involved with your institution.
            </p>

            <div className="side-stats">
              <div>
                <strong>10K+</strong>
                <span>Alumni</span>
              </div>

              <div>
                <strong>250+</strong>
                <span>Mentors</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;