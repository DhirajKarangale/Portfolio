import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
// Frontend / UI
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import tailwindIcon from "@/assets/icons/tailwind.png";
import bootstrapIcon from "@/assets/icons/bootstrap.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import reduxIcon from "@/assets/icons/redux.png";
import reactQueryIcon from "@/assets/icons/reactquery.png";

// Backend & APIs
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import restapiIcon from "@/assets/icons/restapi.png";
import websocketIcon from "@/assets/icons/websocket.png";
import socketioIcon from "@/assets/icons/socketio.png";
import jwtIcon from "@/assets/icons/jwt.png";
import oauthIcon from "@/assets/icons/oauth.png";
import javaIcon from "@/assets/icons/java.png";
import springbootIcon from "@/assets/icons/springboot.png";

// Databases & Infra
import postgresqlIcon from "@/assets/icons/postgresql.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import sqlIcon from "@/assets/icons/sql.png";
import redisIcon from "@/assets/icons/redis.png";
import dockerIcon from "@/assets/icons/docker.png";

// AI / ML
import pythonIcon from "@/assets/icons/python.png";
import langchainIcon from "@/assets/icons/langchain.png";
import huggingfaceIcon from "@/assets/icons/huggingface.png";
import ragIcon from "@/assets/icons/rag.png";
import searchLLMIcon from "@/assets/icons/search-llm.png"; // search-augmented LLM

// DevOps / Tooling
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import postmanIcon from "@/assets/icons/postman.png";
import cloudinaryIcon from "@/assets/icons/cloudinary.png";
import vercelIcon from "@/assets/icons/vercel.png";
import netlifyIcon from "@/assets/icons/netlify.png";
import renderIcon from "@/assets/icons/render.png";
import jenkinsIcon from "@/assets/icons/jenkins.png";

/* ===================== SKILLS ===================== */

const skills = [
  // Frontend Engineering
  { name: "React", level: 88, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "Redux Toolkit", level: 82, category: "frontend", icon: "redux" },
  { name: "React Query", level: 80, category: "frontend", icon: "reactquery" },

  // UI & Styling
  { name: "HTML", level: 90, category: "ui", icon: "html" },
  { name: "CSS", level: 88, category: "ui", icon: "css" },
  { name: "Tailwind CSS", level: 90, category: "ui", icon: "tailwind" },
  { name: "Bootstrap", level: 80, category: "ui", icon: "bootstrap" },

  // Backend & APIs
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express.js", level: 88, category: "backend", icon: "express" },
  { name: "REST APIs", level: 90, category: "backend", icon: "restapi" },
  { name: "WebSockets", level: 85, category: "backend", icon: "websocket" },
  { name: "Socket.IO", level: 85, category: "backend", icon: "socketio" },
  { name: "JWT Authentication", level: 85, category: "backend", icon: "jwt" },
  { name: "OAuth 2.0", level: 80, category: "backend", icon: "oauth" },
  { name: "Java", level: 85, category: "backend", icon: "java" },
  { name: "Spring Boot", level: 82, category: "backend", icon: "springboot" },

  // Databases & Infrastructure
  { name: "PostgreSQL", level: 88, category: "infra", icon: "postgresql" },
  { name: "MongoDB", level: 85, category: "infra", icon: "mongodb" },
  { name: "MySQL", level: 80, category: "infra", icon: "mysql" },
  { name: "SQL", level: 90, category: "infra", icon: "sql" },
  { name: "Redis", level: 82, category: "infra", icon: "redis" },
  { name: "Docker", level: 80, category: "infra", icon: "docker" },

  // AI / ML Systems
  { name: "Python", level: 85, category: "ai", icon: "python" },
  { name: "LangChain", level: 80, category: "ai", icon: "langchain" },
  { name: "Hugging Face", level: 78, category: "ai", icon: "huggingface" },
  { name: "RAG Pipelines", level: 82, category: "ai", icon: "rag" },
  { name: "Search-Augmented\nLLM Pipelines", level: 80, category: "ai", icon: "searchllm" },

  // DevOps & Tooling
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 90, category: "tools", icon: "github" },
  { name: "Postman", level: 85, category: "tools", icon: "postman" },
  { name: "Cloudinary", level: 80, category: "tools", icon: "cloudinary" },
  { name: "Vercel", level: 85, category: "tools", icon: "vercel" },
  { name: "Netlify", level: 80, category: "tools", icon: "netlify" },
  { name: "Render", level: 78, category: "tools", icon: "render" },
  { name: "Jenkins", level: 75, category: "tools", icon: "jenkins" },
];

/* ===================== CATEGORIES ===================== */

const categories = [
  { id: "all", label: "All", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "ui", label: "UI & Styling", color: "bg-gradient-to-r from-fuchsia-500 to-pink-500" },
  { id: "backend", label: "Backend & APIs", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "infra", label: "Databases & Infra", color: "bg-gradient-to-r from-orange-500 to-amber-500" },
  { id: "ai", label: "AI / ML", color: "bg-gradient-to-r from-indigo-500 to-violet-500" },
  { id: "tools", label: "DevOps & Tools", color: "bg-gradient-to-r from-slate-500 to-gray-600" },
];

/* ===================== ICON MAP ===================== */

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  tailwind: tailwindIcon,
  bootstrap: bootstrapIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  redux: reduxIcon,
  reactquery: reactQueryIcon,

  nodejs: nodejsIcon,
  express: expressIcon,
  restapi: restapiIcon,
  websocket: websocketIcon,
  socketio: socketioIcon,
  jwt: jwtIcon,
  oauth: oauthIcon,
  java: javaIcon,
  springboot: springbootIcon,

  postgresql: postgresqlIcon,
  mongodb: mongodbIcon,
  mysql: mysqlIcon,
  sql: sqlIcon,
  redis: redisIcon,
  docker: dockerIcon,

  python: pythonIcon,
  langchain: langchainIcon,
  huggingface: huggingfaceIcon,
  rag: ragIcon,
  searchllm: searchLLMIcon,

  git: gitIcon,
  github: githubIcon,
  postman: postmanIcon,
  cloudinary: cloudinaryIcon,
  vercel: vercelIcon,
  netlify: netlifyIcon,
  render: renderIcon,
  jenkins: jenkinsIcon,
};

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${level > 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
        level > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' :
          'bg-gradient-to-r from-red-400 to-pink-500'
        }`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-sm font-medium text-center">
              {skill.name.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div key={`${skill.name}-reverse-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-sm font-medium text-center">
              {skill.name.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill =>
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I've mastered and my proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 select-none">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${activeCategory === category.id
                ? `${category.color} text-white shadow-md`
                : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                      <img src={iconImages[skill.icon]} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {skill.name.split("\n").map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </h3>

                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${skill.level > 75 ? 'bg-emerald-500/10 text-emerald-500' :
                          skill.level > 50 ? 'bg-amber-500/10 text-amber-500' :
                            'bg-pink-500/10 text-pink-500'
                          }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Basic</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};