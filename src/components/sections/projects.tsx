import { motion } from "framer-motion";
// Professional achievements showcase

const achievements = [
  {
    id: "1",
    title: "Unified Backend Architecture",
    description: "Working on Ruby on Rails as the unified backend serving multiple client applications, ensuring consistent API design and scalable architecture across all company projects.",
    category: "Backend Development",
    impact: "Supports multiple platforms",
    tags: ["Ruby on Rails", "API Design", "PostgreSQL", "System Architecture"],
    icon: "🏗️"
  },
  {
    id: "2",
    title: "React Web Applications",
    description: "Contributing to multiple in-house React websites, implementing new features and maintaining existing functionality with modern React patterns and best practices.",
    category: "Frontend Development",
    impact: "Multiple live websites",
    tags: ["React", "JavaScript", "Component Architecture", "State Management"],
    icon: "⚛️"
  },
  {
    id: "3",
    title: "React Native Mobile Apps",
    description: "Despite not being a mobile developer, successfully learned and contributed to two React Native applications, implementing features and bug fixes across iOS and Android platforms.",
    category: "Mobile Development",
    impact: "Two production apps",
    tags: ["React Native", "Mobile UI", "Cross-platform", "App Store"],
    icon: "📱"
  },
  {
    id: "4",
    title: "Product Feature Leadership",
    description: "Leading full-cycle feature development from requirements gathering to deployment. Gathering stakeholder needs, proposing technical solutions, and managing implementation timelines.",
    category: "Product Engineering",
    impact: "Multiple features shipped",
    tags: ["Requirements Analysis", "Stakeholder Management", "Solution Design", "Project Leadership"],
    icon: "🎯"
  },
  {
    id: "5",
    title: "Technical Problem Solving",
    description: "Approaching each new scope as a mini-project, analyzing requirements, designing solutions, presenting proposals to stakeholders, and iterating based on feedback before implementation.",
    category: "Problem Solving",
    impact: "Streamlined development process",
    tags: ["Analysis", "Solution Architecture", "Communication", "Agile Development"],
    icon: "🧠"
  },
  {
    id: "6",
    title: "Full-Stack Integration",
    description: "Bridging backend and frontend development by ensuring seamless integration between Ruby on Rails APIs and React/React Native clients, maintaining data consistency and optimal performance.",
    category: "Full-Stack Development",
    impact: "Cohesive user experience",
    tags: ["API Integration", "Data Flow", "Performance", "Testing"],
    icon: "🔄"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-4">
            Professional Impact
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            Key achievements and contributions during my journey as a product engineer, showcasing the real-world impact of my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-cod-gray/40 p-8 rounded-3xl border border-dark-border/40 backdrop-blur-sm h-full relative overflow-hidden hover:border-accent/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</span>
                    <div>
                      <h3 className="font-mono text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-secondary mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-primary">
                      Impact: <span className="text-accent">{achievement.impact}</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-dark-bg/50 border border-dark-border rounded-full text-xs font-mono text-secondary group-hover:text-primary group-hover:border-accent/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
