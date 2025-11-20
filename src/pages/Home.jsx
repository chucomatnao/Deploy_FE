import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User, ShieldCheck } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 text-white p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-1 flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-xl">
              <User size={56} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Xin chào 👋</h1>
              <p className="text-gray-200 mt-1">
                Bạn đã đăng nhập thành công. Chúc bạn một ngày làm việc hiệu quả!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
            >
              <LogOut size={18} />
              Đăng xuất
            </button>
            <div className="bg-white/6 px-4 py-2 rounded-lg flex items-center gap-3">
              <ShieldCheck size={20} className="text-white/80" />
              <div>
                <div className="text-sm text-gray-200">Bảo mật</div>
                <div className="text-xs text-gray-300">
                  Phiên đăng nhập của bạn an toàn
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/6 p-4 rounded-lg">
            <div className="text-sm text-gray-300">Hoạt động gần đây</div>
            <div className="text-lg font-semibold mt-2">Không có hoạt động</div>
          </div>
          <div className="bg-white/6 p-4 rounded-lg">
            <div className="text-sm text-gray-300">Tính năng</div>
            <div className="text-lg font-semibold mt-2">Quản lý tài khoản</div>
          </div>
          <div className="bg-white/6 p-4 rounded-lg">
            <div className="text-sm text-gray-300">Hỗ trợ</div>
            <div className="text-lg font-semibold mt-2">Liên hệ chúng tôi</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
