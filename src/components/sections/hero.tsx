import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            <span className="glitch" data-text="Hussein Malkawi">Hussein Malkawi</span> <span className="text-accent">//</span> <span className="typing-animation">Software Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Software engineer with a product mindset. I bridge the gap between business requirements and technical solutions, 
            leading features from conception to deployment. Passionate about building scalable systems with Ruby on Rails, 
            React, and React Native.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-accent text-black px-8 py-4 rounded-xl font-mono font-medium hover:bg-accent/90 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            My Journey
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-mono font-medium hover:bg-accent hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-cod-gray p-6 rounded-2xl border border-dark-border max-w-lg mx-auto shadow-2xl matrix-bg"
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="ml-auto text-sm text-secondary font-mono">~/terminal</span>
          </div>
          <div className="font-mono text-sm text-left">
            <span className="text-accent">const</span>{" "}
            <span className="text-primary">engineer</span>{" "}
            <span className="text-accent">=</span>{" "}
            <span className="text-primary">{"{"}</span>
            <br />
            &nbsp;&nbsp;<span className="text-accent">name:</span>{" "}
            <span className="text-accent">'Hussein Malkawi'</span>
            <span className="text-primary">,</span>
            <br />
            &nbsp;&nbsp;<span className="text-accent">role:</span>{" "}
            <span className="text-accent">'Software Engineer'</span>
            <span className="text-primary">,</span>
            <br />
            &nbsp;&nbsp;<span className="text-accent">focus:</span>{" "}
            <span className="text-accent">'Product Engineering'</span>
            <span className="text-primary">,</span>
            <br />
            &nbsp;&nbsp;<span className="text-accent">stack:</span>{" "}
            <span className="text-primary">[</span>
            <span className="text-accent">'Ruby on Rails'</span>
            <span className="text-primary">,</span>{" "}
            <span className="text-accent">'React'</span>
            <span className="text-primary">,</span>{" "}
            <span className="text-accent">'React Native'</span>
            <span className="text-primary">],</span>
            <br />
            &nbsp;&nbsp;<span className="text-accent">experience:</span>{" "}
            <span className="text-accent">'1 year professional'</span>
            <br />
            <span className="text-primary">{"}"}</span>
            <br />
            <span className="text-accent">{'>'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
