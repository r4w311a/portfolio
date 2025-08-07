import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleLiveDemo = () => {
    if (project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleViewCode = () => {
    if (project.codeUrl && project.codeUrl !== "#") {
      window.open(project.codeUrl, "_blank");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-cod-gray rounded-2xl overflow-hidden border border-dark-border hover:border-accent transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-mono text-xl font-bold text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-secondary mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-dark-border text-accent px-3 py-1 rounded-full text-xs font-mono"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleLiveDemo}
            className="bg-accent text-black px-4 py-2 rounded-lg font-mono text-sm font-medium hover:bg-accent/90 transition-colors duration-300 flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button
            onClick={handleViewCode}
            variant="outline"
            className="border border-accent text-accent px-4 py-2 rounded-lg font-mono text-sm font-medium hover:bg-accent hover:text-black transition-colors duration-300 flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
