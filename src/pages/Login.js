import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";
import axios from "../api";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("/auth/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } else {
        setError("Sai email hoặc mật khẩu!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "❌ Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Chào trở lại"
      subtitle="Đăng nhập để tiếp tục tận hưởng các tính năng"
      asideLogo={<LogIn size={56} />}
    >
      <form onSubmit={handleLogin} className="space-y-4">
        <FormInput
          icon={<Mail size={18} />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
        />

        <FormInput
          icon={<Lock size={18} />}
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          {loading ? "Đang xử lý..." : "Đăng nhập"}
        </button>

        <p className="text-center text-sm mt-3 text-gray-600">
          Chưa có tài khoản?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Đăng ký ngay
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
