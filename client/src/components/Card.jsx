// Card.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Card({ icon, title, desc, onClick, badge }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ translateY: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-full text-left bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-slate-700">
            {icon}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {badge && (
              <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md">
                {badge}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
