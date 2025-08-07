import { motion } from "framer-motion";

const skillCategories = {
  "Backend Development": [
    "Ruby on Rails", "Ruby", "PHP & Laravel", "PostgreSQL", "Redis", "REST APIs", "GraphQL"
  ],
  "Frontend Development": [
    "React", "JavaScript", "HTML/CSS", "Tailwind CSS", "React Native"
  ],
  "Tools & Technologies": [
    "Docker", "Sidekiq", "Postman", "Jira", "Git", "Linux"
  ]
};

const allSkills = [
  "Ruby on Rails", "React", "JavaScript", "Ruby", "PostgreSQL", "REST APIs",
  "PHP & Laravel", "HTML/CSS", "Tailwind CSS", "Redis", "GraphQL", "Docker",
  "Git", "Sidekiq", "Postman", "Jira", "React Native", "Linux"
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="font-mono text-2xl font-bold text-primary mb-8 text-center">Technical Skills</h3>
      
      {/* Skills Cloud */}
      <div className="mb-12">
        <div className="bg-cod-gray/20 p-8 rounded-3xl border border-dark-border/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-cod-gray/60 border border-dark-border/50 rounded-full text-sm font-mono text-primary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-cod-gray/30 p-6 rounded-2xl border border-dark-border/30 backdrop-blur-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: `${categoryIndex * 0.3}s`}}></div>
                <h4 className="ml-3 font-mono text-primary text-lg font-medium">{category}</h4>
              </div>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={skill} className="text-secondary text-sm font-mono hover:text-accent transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}