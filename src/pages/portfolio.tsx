import { useEffect } from "react";
import Sidebar from "@/components/navigation/sidebar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Hussein Malkawi // Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-secondary overflow-x-hidden">
      <Sidebar />
      <main className="w-full pb-16 md:pb-0 max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Contact />
        <footer className="py-8 px-8 md:px-16 lg:px-24 border-t border-dark-border">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-secondary font-mono">
              © 2024 Hussein Malkawi. Built with{" "}
              <span className="text-accent">React</span> and{" "}
              <span className="text-accent">❤️</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
