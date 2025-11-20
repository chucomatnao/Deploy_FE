import React from "react";
import { motion } from "framer-motion";

export default function AuthLayout({ title, subtitle, children, asideLogo }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] p-6">
      <motion.div
    
      >
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-pink-500 text-white p-10 gap-4">
          
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm opacity-90 text-center px-6">{subtitle}</p>
          <div className="mt-6 text-xs bg-white/10 px-4 py-2 rounded-full">
            Miễn phí · Bảo mật · Hỗ trợ 24/7
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center md:text-left">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-gray-500 mb-6 text-center md:text-left">
              {subtitle}
            </p>
          )}
          <div className="max-w-md mx-auto">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}