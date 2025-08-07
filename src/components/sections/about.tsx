import { motion } from "framer-motion";
import Skills from "./skills";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-12">
              About Me
            </h2>

            <div className="space-y-8 text-secondary text-left max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed">
                I'm Hussein Malkawi, a software engineer with a product mindset. With 1 year of professional experience, I've developed a unique approach to software development that combines technical expertise with business understanding.
              </p>

              <p className="text-lg leading-relaxed">
                What sets me apart is my ability to own features end-to-end. I gather requirements from stakeholders, design technical solutions, and implement them across our tech stack. While I'm more backend-focused, I enjoy working on full-stack projects that challenge me to think beyond just code.
              </p>

              <p className="text-lg leading-relaxed">
                Currently, I work with Ruby on Rails as our unified backend, contribute to multiple React websites, and have gained valuable experience with React Native mobile applications. I also have experience with PHP and Laravel from previous projects and training.
              </p>
            </div>

          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-mono text-2xl font-bold text-primary mb-8 text-center">Professional Journey</h3>
            <div className="bg-cod-gray/30 p-8 rounded-3xl border border-dark-border/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                  <div className="ml-4 flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
                  <span className="ml-4 font-mono text-sm text-accent">Aug 2024 - Present</span>
                </div>
                <h4 className="font-mono text-xl text-primary mb-3">Software Engineer @ Chaizer</h4>
                <p className="text-secondary mb-4 leading-relaxed">
                  Working as a software engineer with a product engineering approach. I take ownership of features from requirements 
                  gathering to deployment, working across Ruby on Rails backend, multiple React websites, and have experience with React Native mobile applications. 
                  I collaborate with stakeholders to understand business needs and translate them into technical solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">Ruby on Rails</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">React</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">React Native</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">API Integration</span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">Product Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <Skills />
        </div>
      </div>
    </section>
  );
}
