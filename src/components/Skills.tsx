import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript [ES6]", "TypeScript"],
      color: "from-teal-400 to-blue-500",
    },
    {
      category: "Backend",
      skills: ["Spring MVC", "Spring Boot", "Hibernate ORM", "JPA", "Node.js"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      category: "Databases",
      skills: ["MySQL", "Microsoft SQL Server", "MongoDB", "H2"],
      color: "from-indigo-400 to-violet-500",
    },
    {
      category: "Cloud & DevOps",
      skills: ["Kubernetes", "Docker", "OpenShift", "Jenkins", "Argo CD", "Terraform"],
      color: "from-teal-500 to-cyan-500",
    },
     {
      category: "Frontend",
      skills: ["HTML", "CSS", "jQuery", "Bootstrap"],
      color: "from-teal-500 to-cyan-500",
    },
     {
      category: "Tools & Platforms",
      skills: ["Git", "Postman", "Splunk", "Dynatrace", "Jira"],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-mono mb-2">// Skills</h2>
            <h3 className="text-slate-100">Technologies I work with</h3>
          </motion.div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-blue-900/20 border border-blue-400/20 rounded-lg p-6 hover:border-teal-400/50 transition-all backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h4 className="text-slate-100 font-mono">
                    {category.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 2 : -2 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <Badge
                        variant="secondary"
                        className={`bg-blue-800/30 text-blue-100 hover:bg-blue-700/40 border border-blue-400/20 cursor-pointer transition-all ${
                          hoveredSkill === skill ? "ring-2 ring-teal-400" : ""
                        }`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}