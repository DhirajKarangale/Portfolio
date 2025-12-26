"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      id: 1,
      company: "Infosys",
      role: "Specialist Programmer — Full-Stack Engineer",
      duration: "Aug 2024 - Present",
      location: "India",
      highlights: [
        "Owned features end-to-end from requirements to deployment",
        "Built REST APIs with 99.9% uptime",
        "Reduced backend response time by ~25% using Redis caching",
        "Improved frontend load time from 3.5s → 2.1s",
      ],
      tech: ["React", "Node.js", "Spring Boot", "PostgreSQL", "Redis"],
      logo: "/experience/infosys.jpg"
    },
    {
      id: 2,
      company: "SaralTech",
      role: "Junior Programmer — Frontend Developer",
      duration: "Jan 2024 - Jun 2024",
      location: "Remote",
      highlights: [
        "Built responsive, multi-user UIs",
        "Integrated Google OAuth 2.0",
        "Implemented WebSocket-driven live updates",
        "Reduced bandwidth usage by ~35%",
      ],
      tech: ["React", "Tailwind", "WebSockets", "OAuth"],
      logo: "/experience/saraltech.jpg"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleExperiences = experiences.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // while (visibleExperiences.length < itemsPerPage) {
  //   visibleExperiences.push(experiences[visibleExperiences.length]);
  // }

  // while (visibleExperiences.length < itemsPerPage) {
  //   visibleExperiences.push(
  //     experiences[visibleExperiences.length % experiences.length]
  //   );
  // }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
      ref={ref}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-20"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-sm sm:text-lg font-mono text-primary mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
              Professional Experience
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Experience That Ships to Production
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Real-world engineering across frontend, backend, and systems.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleExperiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative inline-block mb-3">
                    <p className="font-semibold text-left">
                      {experience.role}
                    </p>
                    <span className="absolute left-0 -bottom-1 w-full h-[2px]
                   bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                  </div>

                  <div className="flex flex-col h-full">
                    <motion.div className="text-base sm:text-lg text-muted-foreground my-2 flex-1">
                      <motion.ul className="text-sm text-left text-muted-foreground space-y-2 mt-2">
                        {experience.highlights.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">▸</span>
                            {point}
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <div className="mt-auto">
                      <motion.div className="mt-auto pt-4 flex flex-wrap gap-2 mb-2">
                        {experience.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </motion.div>

                      <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-primary/20 group-hover:border-primary/50 overflow-hidden transition-all">
                          {experience.logo ? (
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary/50">
                              {experience.company}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base">{experience.company}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{experience.location}</p>
                        </div>
                        <div>
                          <p className="font-normal text-sm">{experience.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows - Show only when needed */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevExperience}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Previous experience"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <button
                  onClick={nextExperience}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Next experience"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation - Show only when needed */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 sm:gap-4 sm:hidden">
              <button
                onClick={prevExperience}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Previous experience"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary' : 'bg-muted-foreground/20'}`}
                    aria-label={`Go to experience ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextExperience}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Next experience"
              >
                <ChevronRight className="h-4 w-4 sm:h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Animated gradient background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-blue-500 to-primary blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 5
          }}
        />
      </motion.div>
    </section>
  );
};