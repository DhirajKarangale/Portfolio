import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetails({ open, setOpen, project }) {
  const handleClose = () => setOpen(false);

  const handleVisitSite = () => {
    if (project?.link) window.open(project.link, "_blank", "noopener,noreferrer");
  };

  // Disable background scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <AnimatePresence mode="sync">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[95vw] max-w-[620px]
                       -translate-x-1/2 -translate-y-1/2 z-50
                       rounded-2xl border border-white/10
                       bg-white/10 backdrop-blur-xl text-white p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>

              <button
                onClick={handleClose}
                className="flex items-center gap-1 text-white/80 hover:text-white transition px-2 py-1 rounded-md hover:bg-white/10"
              >
                <X size={20} />
                <span className="text-xs">Close</span>
              </button>
            </div>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl mb-4 object-cover shadow-md"
            />

            {/* GIF (optional) */}
            {project.gif && (
              <img
                src={project.gif}
                alt={project.title + ' GIF'}
                className="w-full rounded-xl mb-4 object-cover shadow-md"
              />
            )}

            {/* Category + Visit Button */}
            <div className="flex justify-between items-center mb-4 text-sm text-gray-300">
              <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
                {project.category}
              </div>

              {project.link && (
                <button
                  onClick={handleVisitSite}
                  className="px-3 py-1 text-xs rounded-md border border-white/30 
                           bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Visit Site
                </button>
              )}
            </div>

            {/* Description → ONLY text, left aligned, scrollable */}
            <p
              className="text-gray-200 text-sm leading-relaxed text-left
                         max-h-[140px] overflow-y-auto pr-2
                         scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent
                         hover:scrollbar-thumb-white/40 transition"
            >
              {project.description}
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
