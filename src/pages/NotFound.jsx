import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Neon background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* 404 */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-9xl font-extrabold 
          bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
        >
          404
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          Page not found. You’re lost in the neon void.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl
            border border-cyan-400/40
            text-cyan-300 font-medium
            bg-cyan-400/10 backdrop-blur
            hover:bg-cyan-400/20 hover:text-white
            transition-all duration-300
            shadow-[0_0_20px_rgba(34,211,238,0.4)]
            hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
