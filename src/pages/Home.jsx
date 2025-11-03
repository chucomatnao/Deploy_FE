import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // nếu có lưu token
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Chào mừng bạn!</h1>
      <p className="mb-6 text-lg">Bạn đã đăng nhập thành công 🎉</p>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Đăng xuất
      </button>
    </div>
  );
}
