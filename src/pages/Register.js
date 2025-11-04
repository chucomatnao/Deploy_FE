import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import axios from "../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", { name, email, password });
      if (res.status === 201 || res.data.success) {
        alert("🎉 Đăng ký thành công! Hãy đăng nhập.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "❌ Đăng ký thất bại!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-96"
      >
        <div className="flex justify-center mb-4">
          <UserPlus size={40} className="text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
          Đăng ký tài khoản
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Tên hiển thị"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Đăng ký
          </motion.button>

          <p className="text-center text-sm mt-3 text-gray-600">
            Đã có tài khoản?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-pink-600 cursor-pointer hover:underline"
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
