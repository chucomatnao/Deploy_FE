// ...existing code...
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock } from "lucide-react";
import axios from "../api";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("/auth/register", { name, email, password });
      if (res.status === 201 || res.data.success) {
        alert("🎉 Đăng ký thành công! Hãy đăng nhập.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "❌ Đăng ký thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Tạo tài khoản"
      subtitle="Nhanh chóng, bảo mật và dễ dàng quản lý thông tin của bạn."
      asideLogo={<UserPlus size={56} />}
    >
      <form onSubmit={handleRegister} className="space-y-4">
        <FormInput
          icon={<UserPlus size={18} />}
          type="text"
          placeholder="Tên hiển thị"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          name="name"
        />

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
          placeholder="Mật khẩu (>=6 ký tự)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          name="password"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
        >
          {loading ? "Đang xử lý..." : "Đăng ký"}
        </button>

        <p className="text-center text-sm mt-1 text-gray-600">
          Đã có tài khoản?{" "}
          <span onClick={() => navigate("/login")} className="text-indigo-600 cursor-pointer hover:underline">
            Đăng nhập
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
// ...existing code...