import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Đăng ký</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Tên hiển thị"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Đăng ký
          </button>
          <p className="text-center text-sm mt-3">
            Đã có tài khoản?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-pink-600 cursor-pointer hover:underline"
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
