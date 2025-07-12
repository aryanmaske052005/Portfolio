"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  GraduationCap,
  Code,
  Terminal,
  Cpu,
  Database,
  Globe,
  Zap,
  ChevronRight,
  Brackets,
  Binary,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [terminalText, setTerminalText] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())

  const fullTerminalText =
    "$ who am i\n> Aryan Nitin Maske\n$ cat skills.txt\n> Frontend Developer | React.js | TypeScript\n$ status\n> Ready for new challenges..."

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: "HTML5", icon: <Code className="w-4 h-4" />, level: 90 },
    { name: "CSS3", icon: <Brackets className="w-4 h-4" />, level: 85 },
    { name: "TypeScript", icon: <Terminal className="w-4 h-4" />, level: 80 },
    { name: "React.js", icon: <Cpu className="w-4 h-4" />, level: 85 },
    { name: "Tailwind CSS", icon: <Brackets className="w-4 h-4" />, level: 90 },
    { name: "GitHub", icon: <Github className="w-4 h-4" />, level: 85 },
    { name: "C Programming", icon: <Binary className="w-4 h-4" />, level: 75 },
    { name: "SQL", icon: <Database className="w-4 h-4" />, level: 60 },
    { name: "Node.js", icon: <Globe className="w-4 h-4" />, level: 45 },
    { name: "MongoDB", icon: <Database className="w-4 h-4" />, level: 40 },
  ]

  const projects = [
    {
      title: "AI Based Early Disaster Warning System",
      description:
        "A frontend-only simulation project that showcases real-time disaster alerts using AI concepts. Built with TypeScript, React (Next.js), and Tailwind CSS.",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/aryanmaske052005/DisMgmt",
      features: ["Real-time monitoring", "Interactive dashboard", "Modular TypeScript code", "Responsive UI"],
      status: "Production",
      lines: "2.5K+ LOC",
    },
    {
      title: "AI Driven Research Engine for Commercial Courts",
      description:
        "Developed a legal research assistant designed to streamline case analysis and legal document search for court professionals and students.",
      tech: ["React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/aryanmaske052005/Lex-Ai--The-Research-Engine-For-Court",
      features: ["AI-driven responses", "Case summaries", "Document insights", "Clean UI"],
      status: "Beta",
      lines: "3.2K+ LOC",
    },
    {
      title: "CODE CLUB WEBSITE",
      description:
        "Developed a fully responsive website for Code Club AGPIT to showcase club activities, events, team members, and gallery.",
      tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/aryanmaske052005/CodeClubAGPIT",
      features: ["Smooth navigation", "Animated transitions", "Modular architecture", "CI/CD deployment"],
      status: "Live",
      lines: "1.8K+ LOC",
    },
  ]

  const achievements = [
    {
      title: "Campus Ambassador",
      description:
        "GSSoC Campus Ambassador and Core Member of Code Club AGPIT, leading event planning, tech workshops, and promoting open-source engagement.",
      icon: <Award className="w-5 h-5" />,
      year: "2024",
      type: "Leadership",
    },
    {
      title: "Runner Up in Techfest",
      description: "Secured runner up prize at AG tech Fest Solapur for Paper Presentation Event Topic: IOT",
      icon: <Zap className="w-5 h-5" />,
      year: "2024",
      type: "Competition",
    },
    {
      title: "Aptitude Training Program",
      description:
        "Successfully completed a 1-week aptitude skills training, strengthening logical reasoning and problem-solving capabilities",
      icon: <GraduationCap className="w-5 h-5" />,
      year: "2024",
      type: "Training",
    },
    {
      title: "C Programming Internship",
      description:
        "Completed a structured internship at APT TECH to strengthen foundational programming concepts in C language.",
      icon: <Code className="w-5 h-5" />,
      year: "2024",
      type: "Internship",
    },
  ]

  const education = [
    {
      degree: "B-Tech Computer Engineering",
      institution: "A.G. PATIL INSTITUTE OF TECHNOLOGY, SOLAPUR",
      duration: "08/2022 - 05/2026",
      status: "Pursuing",
      grade: "Current CGPA: 7.1/10",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "D.B.F Dayanand College Of Arts And Science Solapur",
      duration: "06/2022",
      status: "Completed",
      grade: "Percentage: 60%",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      degree: "Secondary (X)",
      institution: "P.S.English Medium Technical High School Solapur",
      duration: "06/2020",
      status: "Completed",
      grade: "Percentage: 81%",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ]

  const references = [
    {
      name: "Dr. S. V. Kulkarni",
      position: "Head of Department, CSE",
      institution: "A.G. PATIL INSTITUTE OF TECHNOLOGY",
      email: "svkulkarni1203@agpit.edu.in",
      phone: "+91 9420624370",
      relationship: "Department Head",
    },
    {
      name: "Prof. Mayur Shinde",
      position: "Assistant Professor, BCA",
      institution: "Maharashtra Mahavidyalaya Nilanga",
      email: "mayurwshinde@gmail.com",
      phone: "+91 9561712894",
      relationship: "Project Mentor",
    },
    {
      name: "Mr. Santosh Khawale",
      position: "CEO and Founder",
      institution: "Dhenoo Tech Solutions",
      email: "santosh.khawale@dhenoo.com",
      phone: "+91 9823000000",
      relationship: "Internship Mentor",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Circuit Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-500/5 to-yellow-600/5 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-600/5 to-amber-700/5 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-amber-500/20"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-xl sm:text-2xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {"<ARYAN_MASKE />"}
            </motion.div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["About", "Skills", "Projects", "Education", "Achievements", "References"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-amber-400 transition-colors duration-300 font-mono text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-amber-400">
                <Terminal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Terminal Window */}
            <motion.div
              className="max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-lg rounded-lg border border-amber-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-amber-500/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-amber-400 font-mono text-xs sm:text-sm">terminal@aryan-portfolio:~$</div>
                <div className="text-amber-400 font-mono text-xs">{currentTime.toLocaleTimeString()}</div>
              </div>
              <div className="p-4 sm:p-6 font-mono text-left">
                <pre className="text-green-400 text-xs sm:text-sm whitespace-pre-wrap">
                  {terminalText}
                  <span className="animate-pulse">|</span>
                </pre>
              </div>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-8xl font-bold font-mono bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                ARYAN NITIN MASKE
              </motion.h1>

              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-lg text-amber-200 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <span className="px-3 py-1 bg-amber-900/20 rounded border border-amber-500/30">Web Developer</span>
                <span className="px-3 py-1 bg-amber-900/20 rounded border border-amber-500/30">
                  Computer Engineering Student
                </span>
                <span className="px-3 py-1 bg-amber-900/20 rounded border border-amber-500/30">
                  Frontend Specialist
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black border-none hover:from-amber-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 font-mono"
                  asChild
                >
                  <a href="tel:+919765727119">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 9765727119
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-yellow-400 text-black border-none hover:from-yellow-700 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 font-mono"
                  asChild
                >
                  <a href="mailto:maskearyan420@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="flex justify-center space-x-6 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <motion.a
                  href="https://github.com/aryanmaske052005"
                  className="text-amber-400 hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aryan-maske-5b5423253"
                  className="text-amber-400 hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<About />"}
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-amber-500/30 backdrop-blur-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-left font-mono text-sm sm:text-base">
                    <div className="text-amber-400 mb-4">
                      <span className="text-gray-500">01</span> const developer = {"{"}
                    </div>
                    <div className="pl-4 sm:pl-8 space-y-2 text-amber-100">
                      <div>
                        <span className="text-yellow-400">name:</span>{" "}
                        <span className="text-green-400">"Aryan Nitin Maske"</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">role:</span>{" "}
                        <span className="text-green-400">"Frontend Developer"</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">education:</span>{" "}
                        <span className="text-green-400">"Computer Engineering Student"</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">specialization:</span> [
                        <span className="text-green-400">"React.js", "TypeScript", "Tailwind CSS"</span>],
                      </div>
                      <div>
                        <span className="text-yellow-400">experience:</span>{" "}
                        <span className="text-green-400">"GSSoC Campus Ambassador"</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">passion:</span>{" "}
                        <span className="text-green-400">"Building clean, responsive UIs"</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">goal:</span>{" "}
                        <span className="text-green-400">"Full-stack development mastery"</span>
                      </div>
                    </div>
                    <div className="text-amber-400 mt-4">
                      <span className="text-gray-500">08</span> {"}"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<Skills />"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-lg border border-amber-500/30 rounded-lg p-4 sm:p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-amber-400">{skill.icon}</div>
                      <span className="font-mono text-amber-200 text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="font-mono text-yellow-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-400 to-amber-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<Projects />"}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gray-900/50 border-amber-500/30 backdrop-blur-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Terminal className="w-4 h-4 text-amber-400" />
                            <h3 className="text-lg sm:text-xl font-bold font-mono text-amber-300 group-hover:text-yellow-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-4 mb-3 text-xs font-mono">
                            <span
                              className={`px-2 py-1 rounded ${
                                project.status === "Live"
                                  ? "bg-green-900/30 text-green-400 border border-green-500/30"
                                  : project.status === "Production"
                                    ? "bg-blue-900/30 text-blue-400 border border-blue-500/30"
                                    : "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30"
                              }`}
                            >
                              {project.status}
                            </span>
                            <span className="text-amber-400">{project.lines}</span>
                          </div>
                        </div>
                        <motion.a
                          href={project.github}
                          className="text-amber-400 hover:text-yellow-300 transition-colors duration-300"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                      <p className="text-amber-100 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded text-xs font-mono text-amber-200 border border-amber-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {project.features.map((feature) => (
                          <div key={feature} className="text-amber-200 text-sm flex items-center font-mono">
                            <ChevronRight className="w-3 h-3 text-amber-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<Education />"}
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-900/50 border-amber-500/30 backdrop-blur-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-lg border border-amber-500/30">
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold font-mono text-amber-300 mb-1">{edu.degree}</h3>
                            <p className="text-amber-200 text-sm sm:text-base mb-2">{edu.institution}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                              <span className="text-amber-400 font-mono text-sm">{edu.duration}</span>
                              <span
                                className={`px-2 py-1 rounded text-xs font-mono ${
                                  edu.status === "Pursuing"
                                    ? "bg-blue-900/30 text-blue-400 border border-blue-500/30"
                                    : "bg-green-900/30 text-green-400 border border-green-500/30"
                                }`}
                              >
                                {edu.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-yellow-400 font-mono text-sm">{edu.grade}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<Achievements />"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="bg-gray-900/50 border-amber-500/30 backdrop-blur-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-lg border border-amber-500/30">
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold font-mono text-amber-300 mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-amber-100 leading-relaxed text-sm sm:text-base">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="text-yellow-400 font-mono text-sm">{achievement.year}</div>
                          <div className="px-2 py-1 bg-amber-900/30 text-amber-400 rounded text-xs font-mono border border-amber-500/30">
                            {achievement.type}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              {"<References />"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {references.map((reference, index) => (
                <motion.div
                  key={reference.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-900/50 border-amber-500/30 backdrop-blur-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 space-y-4 text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-full flex items-center justify-center border border-amber-500/30">
                        <Terminal className="w-8 h-8 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-mono text-amber-300 mb-1">{reference.name}</h3>
                        <p className="text-amber-200 font-medium mb-1 text-sm sm:text-base">{reference.position}</p>
                        <p className="text-amber-400 text-sm mb-2">{reference.institution}</p>
                        <div className="px-2 py-1 bg-amber-900/30 text-amber-400 rounded text-xs font-mono border border-amber-500/30 inline-block mb-3">
                          {reference.relationship}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center space-x-2 text-amber-200 text-sm">
                            <Mail className="w-4 h-4" />
                            <span className="font-mono">{reference.email}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-amber-200 text-sm">
                            <Phone className="w-4 h-4" />
                            <span className="font-mono">{reference.phone}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-amber-500/20 bg-gray-900/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="font-mono text-amber-400 text-sm sm:text-base">{"// End of portfolio"}</div>
            <p className="text-amber-200 font-mono text-sm">© 2024 Aryan Nitin Maske. All rights reserved.</p>
            <p className="text-amber-400 font-mono text-xs sm:text-sm">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </p>
            <div className="flex justify-center space-x-4 text-amber-400 font-mono text-xs">
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
