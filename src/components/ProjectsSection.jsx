import { useState, useRef } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ChevronUp, Star, Code, Sparkles, Play, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SatyaMark",
    category: "AI Infrastructure",
    description:
      "SatyaMark is an open-source, multi-modal content verification infrastructure that provides real-time, explainable trust signals using LLM pipelines, RAG-based evidence retrieval, image forensics, Redis Streams, and WebSockets.",
    image: "/projects/satyamark_logo.png",
    gif: "/projects/satyamark_gif.gif",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "Redis Streams",
      "WebSockets",
      "Node.js",
      "PostgreSQL",
      "React",
      "Open Source"
    ],
    demoUrl: "https://satyamark.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/SatyaMark",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
    status: "Live",
    highlights: [
      "Designed multi-stage LLM verification pipelines",
      "Built RAG system for evidence retrieval and summarization",
      "Implemented Redis Streams + WebSockets for live result streaming",
      "Published production-ready React SDK to npm"
    ]
  },
  {
    id: 2,
    title: "PDF & PPT Export",
    category: "Developer Tooling",
    description:
      "A DOM-driven export engine for React dashboards that converts real rendered UI into structured multi-page PDFs and fully editable PowerPoint files instead of flat screenshots.",
    image: "/projects/pdfppt_logo.png",
    gif: "/projects/pdfppt_gif.gif",
    tags: [
      "React",
      "jsPDF",
      "pptxgenjs",
      "DOM Analysis",
      "Open Source"
    ],
    demoUrl: "https://pdfppt-export.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/pdfppt-export",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: [
      "Converted live DOM layouts into structured PDF pages",
      "Generated editable PowerPoint slides from React dashboards",
      "Implemented smart pagination without breaking components",
      "Designed minimal, production-ready React API"
    ]
  },
  {
    id: 3,
    title: "PipelineX",
    category: "Full-Stack Systems",
    description:
      "PipelineX is a visual workflow and AI pipeline builder that allows users to design, validate, and execute DAG-based workflows using a drag-and-drop canvas with backend validation.",
    image: "/projects/pipelinex_logo.png",
    gif: "/projects/pipelinex_gif.gif",
    tags: [
      "React",
      "React Flow",
      "Zustand",
      "FastAPI",
      "Python",
      "DAG Validation"
    ],
    demoUrl: "https://pipeline-x-one.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/PipelineX",
    featured: false,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: [
      "Built drag-and-drop workflow canvas using React Flow",
      "Designed node abstraction with dynamic variable handles",
      "Implemented backend DAG validation to prevent cycles",
      "Focused on UX: grid snapping, keyboard shortcuts, smooth interactions"
    ]
  },
  {
    id: 4,
    title: "FUSE",
    category: "Real-time Systems",
    description:
      "FUSE is a real-time social media platform featuring category-based feeds, personalized timelines, and live messaging with media support built on WebSockets.",
    image: "/projects/fuse_logo.png",
    gif: "/projects/fuse_gif.gif",
    tags: [
      "React",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Cloudinary",
      "Real-time Systems"
    ],
    demoUrl: "https://fuse-phi.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/FUSE",
    featured: false,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Live",
    highlights: [
      "Implemented real-time messaging using Socket.IO",
      "Designed category-based posting and personalized feeds",
      "Optimized media uploads and delivery via Cloudinary",
      "Handled concurrent users with stable WebSocket connections"
    ]
  },
];

const categoryColors = {
  "AI Infrastructure": "from-cyan-500/20 to-blue-600/20 text-cyan-600 border-cyan-500/30",
  "Developer Tooling": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "Full-Stack Systems": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "Real-Time Systems": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Product Engineering": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    setIsMobileFilterOpen(false);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  const truncate = (text, limit = 120) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "…" : text;
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Projects
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Project
            <span className="block text-primary">Portfolio</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects I've built to showcase my skills in full-stack development and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Simple Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">

                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${project.status === "Live"
                        ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
                        }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    >
                      <motion.button
                        onClick={() => handleSelectProject(project)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full backdrop-blur-sm border bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                      >
                        <Play size={20} />
                      </motion.button>

                      {/* Code Button */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${project.githubUrl === "#"
                          ? "bg-gray-500/50 text-gray-300 border-gray-500/30 cursor-not-allowed"
                          : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                          }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Code size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {truncate(project.description, 120)}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${project.demoUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                          }`}
                        onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                      >
                        <Eye size={16} />
                        {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border transition-all duration-300 ${project.githubUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                          : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                          }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Accent Border */}
                  <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${showAll
                ? "bg-muted text-foreground border border-border"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

      </div>

      <AnimatePresence mode="sync">
        {selectedProject && (
          <ProjectDetails
            open={!!selectedProject}
            setOpen={(state) => {
              if (!state) setSelectedProject(null);
            }}
            project={selectedProject ? selectedProject : null}
          />
        )}
      </AnimatePresence>

    </section>
  );
};