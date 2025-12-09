import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // 2. Force the browser window to scroll to the top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen dark bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-slate-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-blue-500/20 bg-slate-900/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Dhanur Motwani Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}