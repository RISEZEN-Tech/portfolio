import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Menu } from "lucide-react";

export default function Portfolio() {
  const [textIndex, setTextIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const typingTexts = [
    "AI & Data Science Specialist",
    "Full Stack Developer",
    "Data Visualizer",
    "Dashboard Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.div
      className="min-h-screen flex bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Toggle Button for Sidebar */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-md"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <motion.nav
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: menuOpen ? 0 : -300, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-md shadow-lg py-16 px-6 space-y-6 z-40 transform transition-transform duration-200"
      >
        {["Home", "Projects", "Skills", "Experience", "Education", "Certifications", "Contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section.toLowerCase())}
            className="text-white text-lg font-medium hover:text-cyan-400 hover:translate-x-1 transition-transform duration-200 w-full text-left"
          >
            {section}
          </button>
        ))}
      </motion.nav>

      <div className={`w-full transition-all duration-200 ${menuOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hafiz Subhan Amir</h1>
            <motion.h2
              key={textIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl text-cyan-400"
            >
              {typingTexts[textIndex]}
            </motion.h2>
            <p className="mt-2 text-white/80">Driving innovation at RISEZEN Tech & Recruit</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              title: "Amazon Product Dashboard",
              link: "https://github.com/RISEZEN-Tech/Data-Analysis-on-Amazon-Dataset-Products-Based-Dashboard",
              desc: "An interactive dashboard for analyzing Amazon product trends."
            }, {
              title: "Real Estate Data Analysis",
              link: "https://github.com/RISEZEN-Tech/Analysis-on-Real-Estate-Data-and-Dashboard",
              desc: "Visual insights and analytics over real estate trends."
            }, {
              title: "Django LMS",
              link: "https://github.com/RISEZEN-Tech/DJango-Python-LMS",
              desc: "A Django-based Learning Management System."
            }].map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                className="block bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-cyan-400 hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 bg-gray-950">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Programming & Data",
                items: ["Python, Pandas, NumPy", "Matplotlib, Seaborn, Plotly, Dash", "Data Visualization, Data Cleaning"]
              },
              {
                title: "AI & Development",
                items: ["AI Model Training", "Chatbot Development", "AI Agents & Automation", "Web Development"]
              },
              {
                title: "Soft & Business Skills",
                items: ["Project Management", "Communication", "Recruitment & HR Support"]
              }
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 hover:bg-gray-700"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{skill.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {skill.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-10">
            {[{
              title: "AI & Data Science Specialist",
              company: "RISEZEN Tech & Recruit",
              duration: "Jan 2023 – Present",
              points: [
                "Leading AI-driven innovation for client projects in multiple domains.",
                "Managing a remote-first team and delivering dashboards and prediction tools.",
                "Implemented ML models to support recruitment tech and analytics systems."
              ]
            }, {
              title: "Customer Support Representative",
              company: "Mindbridge",
              duration: "2021 – 2022",
              points: [
                "Delivered professional customer service to clients across various channels.",
                "Handled inquiries, resolved issues, and provided timely support with efficiency.",
                "Maintained detailed records and contributed to improved customer satisfaction rates."
              ]
            }].map((job, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl shadow border-l-4 border-cyan-500 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 hover:bg-gray-700"
              >
                <h3 className="text-xl font-semibold text-white">{job.title} — {job.company}</h3>
                <p className="text-sm text-gray-400">{job.duration}</p>
                <ul className="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 px-6 bg-gray-950">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Education</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-cyan-500 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 hover:bg-gray-700">
            <h3 className="text-xl font-semibold text-white">BS Information Management</h3>
            <p className="text-sm text-gray-400 mt-1">University of Education, Pakistan</p>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-20 px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
              title: "Data Science Certification",
              desc: "Certified through a government-accredited institute and supplemented with online self-paced learning."
            }, {
              title: "Artificial Intelligence Certification",
              desc: "Obtained via official government course and hands-on online learning."
            }].map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 hover:bg-gray-700"
              >
                <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-950">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Contact</h2>
          <div className="max-w-xl mx-auto text-center text-gray-300 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Mail className="text-cyan-400" size={18} />
              <a href="mailto:sh4subhan@gmail.com" className="text-cyan-400 underline">
                sh4subhan@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="text-cyan-400" size={18} />
              <span>+92 309 5472104</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Linkedin className="text-cyan-400" size={18} />
              <a href="https://www.linkedin.com/in/sh-subhan/" className="text-cyan-400 underline" target="_blank">
                linkedin.com/in/sh-subhan
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Github className="text-cyan-400" size={18} />
              <a href="https://github.com/RISEZEN-Tech" className="text-cyan-400 underline" target="_blank">
                github.com/RISEZEN-Tech
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}