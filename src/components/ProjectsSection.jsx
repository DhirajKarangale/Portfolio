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
      "SatyaMark is an open-source, multi-modal content verification infrastructure designed to provide real-time, explainable trust signals across text and images. Instead of issuing absolute truth claims, the system surfaces transparent verification marks, confidence scores, and human-readable reasoning, enabling users and platforms to assess credibility with context.\n\nThe platform combines LLM-driven fact verification for text with ML-based and forensic analysis for images, orchestrated through independent AI workers. Verification results are streamed live using Redis Streams and WebSockets, allowing UIs to reflect progressive updates as confidence evolves.\n\nSatyaMark is built as embeddable infrastructure, featuring a centralized inspection dashboard and an official React SDK that injects live verification marks directly into existing applications. The architecture emphasizes modularity, privacy-first data handling, and extensibility, making it suitable as a shared trust layer across social platforms, media tools, and information-driven products.",
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
      "PDF & PPT Export is an open-source React export engine that converts real, rendered DOM dashboards into multi-page PDFs and fully editable PowerPoint (PPTX) files. Unlike screenshot-based solutions, it uses a structure-first approach that analyzes the DOM layout, components, and metadata to preserve semantic structure and layout fidelity.\n\nThe system intelligently paginates complex dashboards into print-ready A4 PDFs without splitting cards or breaking visual hierarchy, while gracefully handling headers, footers, and layout fallbacks. For PowerPoint exports, it reconstructs dashboards as native PPT elements — including text boxes, shapes, and charts — enabling true post-export editing.\n\nBuilt as a reusable React library with production-ready defaults, the project prioritizes developer experience, predictable output, and extensibility. A complete demo and reference implementation showcase real-world usage patterns, edge cases, and customization strategies for data-heavy applications.",
    image: "/projects/pdfppt_logo.png",
    gif: "/projects/pdfppt_gif.gif",
    tags: [
      "React",
      "jsPDF",
      "pptxgenjs",
      "PDF Generation",
      "PPTX Export",
      "DOM Analysis",
      "Open Source",
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
      "PipelineX is a full-stack visual workflow and AI pipeline builder that allows users to design, connect, and validate modular pipelines using an interactive, node-based canvas. It is built to support AI workflows, automation systems, and data-processing graphs where structure, correctness, and clarity are critical.\n\nThe frontend is powered by a React Flow–based editor with drag-and-drop nodes, multi-selection, keyboard shortcuts, and grid-snapped layouts for precise composition. A unified node abstraction layer enables rapid creation of new node types while maintaining consistent behavior, validation rules, and visual styling.\n\nOn the backend, PipelineX uses FastAPI to validate pipeline structure, enforce DAG constraints, and analyze graph metadata such as node and edge counts. The system prevents circular dependencies and invalid connections in real time, ensuring pipelines are both visually intuitive and structurally sound.",
    image: "/projects/pipelinex_logo.png",
    gif: "/projects/pipelinex_gif.gif",
    tags: [
      "React",
      "React Flow",
      "Zustand",
      "Workflow Builder",
      "Graph Systems",
      "Python",
      "FastAPI",
      "DAG Validation",
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
      "FUSE is a modern, interest-based social media platform designed to promote high-quality content discovery and real-time interaction. The platform organizes content into predefined creative categories such as UI/UX, Game Design, 2D/3D Art, and Animation, ensuring relevance and reducing feed noise.\n\nUsers can personalize their experience by selecting categories of interest, resulting in a curated feed that surfaces only relevant posts. A trending section highlights high-engagement content across all categories, while real-time messaging enables seamless text and image communication between users.\n\nThe system leverages WebSockets for instant message delivery and Cloudinary for optimized media handling. Built with a mobile-first mindset, FUSE delivers a smooth, responsive UI enhanced with Framer Motion animations, making it a polished example of a real-time, user-centric social platform.",
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
  {
    id: 5,
    title: "Puzzle Challenge",
    category: "Product Engineering",
    description:
      "Puzzle Challenge is a full-stack product engineering project that demonstrates a complete, production-style user journey — from secure authentication to validated payments — wrapped in a modern, responsive UI. The project focuses on correctness, security, and smooth user experience across both web and mobile views.\n\nThe application implements an email-based OTP authentication flow using JWT for session management, ensuring a passwordless and secure login experience. Payments are handled through Stripe Checkout with built-in validation, including mandatory user consent before initiating transactions.\n\nOn the frontend, the app is built with React 19 and enhanced using Tailwind CSS and Framer Motion for polished animations, while Redux Toolkit manages global state predictably. The backend, powered by Express.js and PostgreSQL, handles authentication, payment verification, and secure API communication, making the project a strong example of end-to-end product delivery.",
    image: "/projects/puzzlechallenge_logo.png",
    gif: "/projects/puzzlechallenge_gif.gif",
    tags: [
      "React",
      "Redux Toolkit",
      "Stripe",
      "OTP Authentication",
      "PostgreSQL",
      "Product Engineering"
    ],
    demoUrl: "https://puzzle-challenge-eight.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/PuzzleChallenge",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    status: "Live",
    highlights: [
      "Implemented secure email-based OTP authentication using Nodemailer and JWT",
      "Integrated Stripe Checkout with validation and consent-based payment flow",
      "Built a responsive, mobile-first UI with Tailwind CSS and Framer Motion",
      "Managed global application state using Redux Toolkit",
      "Delivered a complete, test-ready payment experience using Stripe test cards"
    ]
  },
  {
    id: 6,
    title: "BaliLore",
    category: "Full-Stack Systems",
    description:
      "BaliLore is a fast, modular web platform built to preserve and showcase Bali’s rich cultural heritage through community-driven storytelling. The application enables locals and visitors to share stories, hidden histories, photos, videos, poems, and street art, forming a living digital archive of the island’s culture.\n\nBuilt with React and Vite, the platform emphasizes performance, SEO readiness, and clean navigation. Users can explore curated content, submit stories through validated forms, browse community galleries, and toggle between day and night themes for an enhanced reading experience.\n\nDeployed on Vercel and optimized for scalability, BaliLore demonstrates modular frontend architecture, thoughtful UI/UX design, and a strong focus on accessibility and performance, making it a polished example of modern web development for cultural and content-driven platforms.",
    image: "/projects/balilore_logo.png",
    gif: "/projects/balilore_gif.gif",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "SEO",
      "Content Platform",
      "Community-Driven"
    ],
    demoUrl: "https://balilore-staging.vercel.app",
    githubUrl: "https://github.com/DhirajKarangale/balilore-staging",
    featured: false,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: [
      "Built a modular, performance-focused React + Vite application with SEO-ready pages",
      "Enabled community submissions with validated forms for stories and media",
      "Implemented responsive layouts and smooth navigation using React Router",
      "Added theme toggling for improved accessibility and user experience",
      "Deployed on Vercel with optimizations for fast load times and scalability"
    ]
  },
  {
    id: 7,
    title: "Consent Management",
    category: "Product Engineering",
    description:
      "Consent Management is a role-based web platform built to model and enforce data consent workflows aligned with India’s Digital Personal Data Protection (DPDP) Act, 2023. The system demonstrates how regulated consent flows can be implemented with clarity, security, and scalability in mind.\n\nThe application supports four distinct user roles — User, Company, Consent Manager, and Government — each with dedicated interfaces and permissions. Role-based routing and access control ensure that users can only view and act on data relevant to their responsibilities.\n\nBuilt with React, the platform emphasizes performance and maintainability through lazy loading, code splitting, and structured state management. Data fetching and synchronization are handled efficiently using React Query, resulting in a responsive, compliant, and production-style consent management system.",
    image: "/projects/consentmanagement_logo.png",
    gif: "/projects/consentmanagement_logo.png",
    tags: [
      "React",
      "Role-Based Access",
      "DPDP Act 2023",
      "React Query",
      "Redux Toolkit",
      "Product Engineering"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/DhirajKarangale/ConsentManagement",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    status: "Completed",
    highlights: [
      "Designed a consent workflow aligned with India’s DPDP Act, 2023",
      "Implemented role-based access control across four distinct user types",
      "Built responsive and accessible UIs using Bootstrap and custom components",
      "Integrated React Query for efficient data fetching and caching",
      "Optimized performance using lazy loading, code splitting, and Redux Toolkit"
    ]
  },
  {
    id: 8,
    title: "Pocket Money",
    category: "Full-Stack Systems",
    description:
      "Pocket Money is a full-stack job-matching platform built to help students discover part-time work and internship opportunities across multiple domains. The platform focuses on simplicity, real-time interactions, and accessibility, making it easy for students and job providers to connect efficiently.\n\nBuilt using React and Firebase, the system supports real-time database updates, secure user authentication, and streamlined job listing workflows. Students can browse opportunities using dynamic filters based on role, location, and domain preferences, while providers can post and manage listings with minimal friction.\n\nThe platform also includes a seeker–provider messaging system implemented using SMTP.js, enabling direct communication without exposing personal contact details. With a responsive UI, validated forms, and structured navigation, Pocket Money demonstrates a practical, production-style full-stack application.",
    image: "/projects/pocketmoney_logo.png",
    gif: "/projects/pocketmoney_gif.gif",
    tags: [
      "React",
      "Firebase",
      "Real-Time Database",
      "Job Platform",
      "Full-Stack"
    ],
    demoUrl: "https://pocket-money-web.vercel.app/",
    githubUrl: "https://github.com/DhirajKarangale/PocketMoneyWeb",
    featured: false,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: [
      "Built a job-matching platform for students targeting part-time and internship opportunities",
      "Integrated Firebase for real-time database operations and user authentication",
      "Implemented seeker-provider messaging using SMTP.js",
      "Added dynamic job filters for role, location, and domain-based discovery",
      "Delivered a responsive UI with form validation and route-based navigation"
    ]
  }
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
          <span className="text-muted-foreground text-left">{highlight}</span>
        </div>
      ))}
    </div>
  );

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

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-left line-clamp-3">
                      {project.description}
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
                    <div className="mt-auto flex gap-3 pt-4 border-t border-border">
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