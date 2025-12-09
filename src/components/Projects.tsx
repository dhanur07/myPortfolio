import { ExternalLink, Github, Brain, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Projects() {
   const projects = [
    {
      title: "Health Navigator Multi-agent app",
      description: "A multi-agent health navigator that provides safe medical information, misinformation checking, and travel health advice using Google’s ADK",
      technologies: ["Google ADK (Agent Development Kit)","Vertex AI Agent Engine ","MCP Toolset (medical content server)","Python", "google-generativeai", "google-genai", "Google Cloud"],
      github: "https://github.com/dhanur07/Health-navigator-multi-agent.git",
      //demo: "https://example.com",
      aiPowered: true,
    },
    {
      title: "AI Recipe Generator",
      description: "A full-stack web application that generates unique recipes from the ingredients you have on hand. It features a smart shopping list, user accounts, and social login, all powered by a Java Spring Boot backend and a modern AI.",
      technologies: ["Java", "Spring Boot", "Spring Security (OAuth2/JWT)","Google Gemini API"],
      github: "https://github.com/dhanur07/Ingredia---AIRecipeGenerator.git",
      //demo: "https://example.com",
      aiPowered: true,
    },
    {
      title: "Rental House Application",
      description: "An end-to-end web application using Node Js that facilitates all kind of house rental activities to users with features like registration, login, renting and selling houses, and search houses by location.",
      technologies: ["Angular", "Node.js", "Rest API", "HTML", "CSS", "MongoDB"],
      github: "https://github.com/dhanur07/Rental-House-Application.git",
      //demo: "https://example.com",
      aiPowered: false,
    },
    {
      title: "Hospital Management System",
      description: "A Java Swing–based stroke-emergency app that lets patients trigger an SOS and share their medical profile for rapid care. Designed workflows to automatically notify nearby hospitals, ambulances, neurologists, labs, pharmacies, insurers, and police to reduce door-to-needle time.",
      technologies: ["Java", "H2", "OOP"],
      github: "https://github.com/dhanur07/Hospital-Managemt-System.git",
      //demo: "https://example.com",
      aiPowered: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-blue-950/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-mono mb-2">// Projects</h2>
            <h3 className="text-slate-100">Things I've built</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-blue-900/20 border-blue-400/20 hover:border-teal-400/50 transition-all h-full relative overflow-hidden group backdrop-blur-sm">
                  {project.aiPowered && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Brain className="w-6 h-6 text-indigo-400" />
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-teal-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:via-teal-400/10 group-hover:to-indigo-400/10 transition-all duration-500" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-slate-100">{project.title}</CardTitle>
                      {project.aiPowered && (
                        <Badge variant="outline" className="border-indigo-400/50 text-indigo-400 bg-indigo-400/10">
                          <Zap className="w-3 h-3 mr-1" />
                          AI
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-blue-200/80">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-teal-400/30 text-teal-300 bg-teal-400/5"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-blue-400/30 text-blue-200 hover:bg-blue-400/10"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {/* <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}