import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";
import { loginUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";

function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      setAuth(data.token, { email });

      alert("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🕌 Ziyaarah</h1>
          <p>Your Spiritual Journey Companion</p>
        </div>

        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Continue your spiritual journey with us.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <Button type="submit">Sign In</Button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <a
            href="/register"
            onClick={() => (window.location.href = "/register")}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
