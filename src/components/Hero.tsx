import { Terminal, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { TypewriterText } from "./TypewriterText";
import { CodeRain } from "./CodeRain";

export function Hero() {
  const handleDownloadResume = () => {
   
    const link = document.createElement('a');
    link.href = './Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <CodeRain />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style prompt */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg font-mono backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4 text-teal-400" />
            <span className="text-blue-400">~$</span>
            <span className="text-blue-200">whoami</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-slate-100 mb-4">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text">Dhanur Motwani</span>
            </h1>
          </motion.div>
          
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-block bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 text-transparent bg-clip-text">
              <h2>
                <TypewriterText 
                  texts={[
                    "Software Engineer",
                    "Backend Developer",
                    "AI Enthusiast",
                    "Problem Solver",
                    "Code Architect"
                  ]} 
                />
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-blue-200/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I build exceptional digital experiences that live on the web. Passionate about clean code, 
            AI-powered solutions, and turning ideas into reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a
              href="https://github.com/dhanur07?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-900/30 border border-blue-500/30 rounded-lg hover:border-teal-400 hover:bg-blue-900/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-blue-200" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhanurmotwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-900/30 border border-blue-500/30 rounded-lg hover:border-teal-400 hover:bg-blue-900/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-blue-200" />
            </motion.a>
            <motion.a
              href="mailto:dhanurmotwani07@gmail.com"
              className="p-3 bg-blue-900/30 border border-blue-500/30 rounded-lg hover:border-teal-400 hover:bg-blue-900/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-blue-200" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}