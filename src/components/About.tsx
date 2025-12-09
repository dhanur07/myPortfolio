import { Code2, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { InteractiveTerminal } from "./InteractiveTerminal";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
      color: "text-teal-400",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions.",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly learning new technologies and staying updated with industry trends.",
      color: "text-indigo-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-blue-950/20 relative">
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
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-mono mb-2">// About Me</h2>
            <h3 className="text-slate-100">Get to know me</h3>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-blue-200/80 mb-4">
              I'm a passionate software engineer with a strong foundation in building web applications 
              and solving complex problems. With expertise in modern technologies, AI/ML, and frameworks, 
              I create solutions that are not only functional but also user-friendly and performant.
            </p>
            <p className="text-blue-200/80">
              When I’m not writing code, I’m usually working on my personal projects, watching movies, 
              planning my next trip, or working out.
              I like having a mix of deep technical learning and simple offline time to reset my brain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              >
                <Card className="bg-blue-900/20 border-blue-400/20 hover:border-teal-400/50 transition-all h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                    </motion.div>
                    <h4 className="text-slate-100 mb-2">{item.title}</h4>
                    <p className="text-blue-200/80">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}