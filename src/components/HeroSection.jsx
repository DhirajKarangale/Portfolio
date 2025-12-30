import { Code, Award, Download, Shield, Zap, TrendingUp, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  const codeSnippets = [
    "import { Engineer } from 'production';",
    "",
    "const dhiraj = new Engineer({",
    "  roles: ['Full-Stack', 'Backend'],",
    "  stack: ['React', 'Node', 'Spring Boot'],",
    "  data: ['PostgreSQL', 'Redis'],",
    "  realtime: ['WebSockets'],",
    "  ai: ['RAG', 'LangChain'],",
    "  openSource: true,",
    "});",
    "",
    "dhiraj.ship();",
    "console.log('✔ systems live');",
  ];

  const achievements = [
    { number: "1.5+", label: "Years in Production", icon: <Shield className="h-3 w-3" /> },
    { number: "160K+", label: "App Downloads", icon: <TrendingUp className="h-3 w-3" /> },
    { number: "2+", label: "npm Libraries", icon: <Zap className="h-3 w-3" /> },
    { number: "Finalist", label: "HackWithInfy", icon: <Award className="h-3 w-3" /> },
  ];

  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];

    if (displayedCode.length < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 30);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (currentCodeLine < codeSnippets.length - 1) {
        setCurrentCodeLine((p) => p + 1);
        setDisplayedCode("");
      } else {
        setTimeout(() => {
          setCurrentCodeLine(0);
          setDisplayedCode("");
        }, 4000);
      }
    }, 700);

    return () => clearTimeout(t);
  }, [displayedCode, currentCodeLine]);

  const handleViewResume = () => {
    window.open('https://github.com/DhirajKarangale/Resume/blob/main/DhirajKarangale.pdf', '_blank', 'noopener,noreferrer');
  };

  const getLineClass = (line) => {
    const t = line.trim();

    // import line
    if (t.startsWith("import")) return "text-purple-400 font-semibold";

    // const dhiraj = new Engineer({
    if (t.startsWith("const dhiraj")) return "text-amber-400 font-semibold";

    // closing / structural lines: }); , etc
    if (/^[\s{}[\]();,]+$/.test(line)) return "text-amber-400 font-semibold";

    // dhiraj.ship();
    if (t.startsWith("dhiraj.ship")) return "text-emerald-400 font-semibold";

    // console.log(...)
    if (t.startsWith("console.log")) return "text-yellow-400";

    // roles, stack
    if (t.startsWith("roles:") || t.startsWith("stack:")) return "text-purple-400";

    // data, realtime, ai
    if (t.startsWith("data:") || t.startsWith("realtime:") || t.startsWith("ai:")) return "text-cyan-400";

    // openSource
    if (t.startsWith("openSource:")) return "text-foreground";

    return "text-foreground";
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>

          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Briefcase className="h-4 w-4" /> Currently Accepting new Opportunities
            </motion.div> */}

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">Dhiraj Karangale</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>
                Full-Stack Engineer
              </motion.span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I design and ship <span className="text-primary font-semibold">production-grade systems</span> —
              from UI architecture and APIs to databases, caching, and real-time pipelines.
              Focused on reliability, performance, and systems that survive beyond localhost.
            </motion.p>

            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-background/60 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {achievement.icon}
                    <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" />
                <span>View Production Work</span>
                <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </motion.a>

              <motion.button
                onClick={handleViewResume}
                className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                <span>View Resume</span>
              </motion.button>
            </motion.div>

            <motion.div className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <div className="text-sm text-muted-foreground">
                🚀 Open to <span className="text-primary font-semibold">Full-Stack, Backend & Java / Spring Boot</span> roles
              </div>
            </motion.div>
          </div>

          <motion.div className="flex-1 flex justify-center lg:justify-end w-full" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <div className="relative w-full max-w-md">
              <motion.div className="bg-background/90 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl w-full group hover:shadow-3xl transition-all duration-500" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 h-[600px] sm:h-[380px] flex">
                  <div className="p-2 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start select-none">
                      {codeSnippets.map((line, index) => (
                        <div
                          key={index}
                          className={`${getLineClass(line)} min-h-[18px] text-left`}
                        >
                          {index < currentCodeLine && line}

                          {index === currentCodeLine && (
                            <span>
                              {displayedCode}
                              <span className="inline-block w-[1ch]">
                                <motion.span
                                  className="text-primary"
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                  ▊
                                </motion.span>
                              </span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="mt-3 text-xs font-mono text-muted-foreground text-center">
                  STATUS:
                  <span className="text-emerald-400 ml-1">DEPLOYED</span> ·
                  <span className="text-cyan-400 ml-1">LIVE TRAFFIC</span> ·
                  <span className="text-amber-400 ml-1">OPEN SOURCE</span>
                </div> */}

                <motion.div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center border-2 border-background shadow-2xl" animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Code className="h-5 w-5 text-white" />
                </motion.div>

                <motion.div className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}>
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">Solutions</span>
                </motion.div>

                {/* <motion.div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg text-center" initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 2, type: "spring" }}>
                  <div className="text-xs font-mono text-muted-foreground">Built with</div>
                  <div className="text-sm font-bold text-foreground">Modern Tech</div>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div> */}
    </section>
  );
};