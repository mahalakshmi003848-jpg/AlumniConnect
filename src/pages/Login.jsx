import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { supabase } from "../supabase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <Navbar />

      <main className="auth-shell">
        <section className="auth-visual">
          <div className="auth-visual-top">
            <span>ALUMNICONNECT</span>
            <span>01 / 02</span>
          </div>

          <div className="auth-visual-content">
            <div className="auth-eyebrow">
              <span className="auth-dot"></span>
              YOUR NETWORK IS WAITING
            </div>

            <h1>
              One network.
              <br />
              <em>Many possibilities.</em>
            </h1>

            <p>
              Connect with alumni, discover opportunities, find mentors and
              stay connected to the community that shaped your journey.
            </p>

            <div className="auth-network">
              <div className="network-line line-one"></div>
              <div className="network-line line-two"></div>
              <div className="network-line line-three"></div>

              <div className="network-node node-main">A</div>
              <div className="network-node node-one">R</div>
              <div className="network-node node-two">P</div>
              <div className="network-node node-three">K</div>
              <div className="network-node node-four">S</div>
            </div>
          </div>

          <div className="auth-visual-footer">
            <span>
              <Users size={16} />
              2,500+ alumni
            </span>

            <span>
              <ShieldCheck size={16} />
              Verified community
            </span>
          </div>
        </section>

        <section className="auth-form-side">
          <div className="auth-form-wrap">
            <div className="auth-form-heading">
              <span>WELCOME BACK</span>
              <h2>Sign in to your network.</h2>
              <p>
                Access your profile, connections and career opportunities.
              </p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
              {error && <div className="auth-error">{error}</div>}

              <div className="field-group">
                <label>Email address</label>

                <div className="field-input">
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="field-group">
                <div className="field-label-row">
                  <label>Password</label>
                  <button
                    type="button"
                    className="forgot-button"
                    onClick={() =>
                      setError(
                        "Password reset can be added after the main authentication flow."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="field-input">
                  <LockKeyhole size={18} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="auth-submit"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            <div className="auth-divider">
              <span>NEW TO ALUMNICONNECT?</span>
            </div>

            <Link to="/register" className="auth-register-link">
              Create your account
              <ArrowRight size={17} />
            </Link>

            <p className="auth-note">
              By continuing, you agree to use AlumniConnect responsibly and
              keep your profile information accurate.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;