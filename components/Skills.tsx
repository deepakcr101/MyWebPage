"use client";

import { motion } from "framer-motion";

const skills = {
    "Backend Engineering": [
        "Java",
        "Spring Boot",
        "Microservices",
        "Event-Driven Architecture",
        "Node.js",
        "Express"
    ],
    "Frontend & UI": [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "HTML5/CSS3"
    ],
    "Database & Storage": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis"
    ],
    "Cloud & DevOps": [
        "Docker",
        "Kubernetes",
        "AWS",
        "Git",
        "CI/CD",
        "Linux"
    ],
    "Data & Machine Learning (Learning)": [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
        "Deep Learning (MIT Intro DL Course)"
    ],
    "Core Strengths": [
        "DSA",
        "System Design",
        "API Design",
        "Scalable Architectures",
        "Problem Solving"
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-foreground">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Technologies, tools, and core engineering skills that I use to build
                        scalable, efficient, and impactful software solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-accent/20 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary border-b border-border/50 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-background border border-border text-foreground/80 hover:text-primary hover:border-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
