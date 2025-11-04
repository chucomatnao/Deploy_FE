import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center"
      >
        <div className="flex flex-col items-center space-y-4">
          <User size={60} className="text-white bg-white/20 p-3 rounded-full" />
          <h1 className="text-4xl font-bold">Chào mừng bạn 👋</h1>
          <p className="text-lg text-white/90">Bạn đã đăng nhập thành công 🎉</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            <LogOut size={20} />
            Đăng xuất
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
