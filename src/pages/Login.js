import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import axios from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("✅ Đăng nhập thành công!");
        navigate("/home");
      } else {
        setError("Sai email hoặc mật khẩu!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "❌ Đăng nhập thất bại!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-96"
      >
        <div className="flex justify-center mb-4">
          <LogIn size={40} className="text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Đăng nhập
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Đăng nhập
          </motion.button>

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
      </motion.div>
    </div>
  );
}
