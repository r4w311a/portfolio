import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/r4w311a", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/r4w311a/", label: "LinkedIn" },
];

export default function Contact() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/Hussein-Resume.pdf';
    link.download = 'Hussein-Malkawi-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-8">
          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cod-gray/40 p-8 rounded-3xl border border-dark-border/40 backdrop-blur-sm relative overflow-hidden group hover:border-accent/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center space-x-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-primary mb-2">Email Me</h3>
                <a 
                  href="mailto:hussmalkawi@gmail.com" 
                  className="text-lg text-accent hover:text-accent/80 transition-colors duration-300 font-mono"
                >
                  hussmalkawi@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleResumeDownload}
              className="bg-accent text-black px-8 py-4 rounded-xl font-mono font-medium hover:bg-accent/90 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-accent/20 flex items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-cod-gray/40 rounded-2xl flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 hover:border-accent/20 transition-all duration-300 hover:scale-110 border border-dark-border/40 backdrop-blur-sm"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
