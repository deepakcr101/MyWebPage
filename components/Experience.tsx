"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Ciena",
        period: "Jan,2026 - Present",
        description: "Working on Blue Planet Inventory(BPI) team as a Software Developer Intern",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-foreground">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border/50"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                            <div className="bg-accent/10 p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                            <Briefcase className="h-4 w-4" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-accent px-3 py-1 rounded-full">
                                        <Calendar className="h-3 w-3" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
