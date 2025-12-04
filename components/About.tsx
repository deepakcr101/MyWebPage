"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code, Terminal, Database, Cloud } from "lucide-react";
import { LeetCode, GFG } from "./Icons";

export default function About() {
    return (
        <section id="about" className="py-20 bg-accent/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-foreground">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                            Software Developer & <br />
                            <span className="text-primary">Problem-Solver at Heart</span>
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            I am a passionate software developer with a strong foundation in backend engineering,
                            data structures & algorithms, and scalable system design. I enjoy breaking down complex
                            problems and building clean, efficient, and reliable solutions that create real impact.
                        </p>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Over the years, I’ve worked across multiple parts of the stack—ranging from designing
                            robust backend architectures and microservices to building practical end-to-end projects
                            like a Hostel Mess Management System and an event-driven ShopFlow e-commerce platform.
                            My experience spans Java, Spring Boot, PostgreSQL, REST APIs, system design principles,
                            and cloud-native development workflows.
                        </p>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            I continually push myself to grow—whether it's mastering advanced DSA, sharpening
                            software design skills, or exploring the evolving world of AI/ML. I thrive in
                            environments that encourage learning, collaboration, and solving meaningful technical challenges.
                        </p>


                        <div className="flex gap-4">
                            <a
                                href="https://github.com/deepakcr101"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/deepak-kumar-10811a220/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://leetcode.com/u/deepakcr101/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                            >
                                <LeetCode className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.geeksforgeeks.org/profile/piomezc6k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                            >
                                <GFG className="h-5 w-5" />
                            </a>

                            {/* Add more social links as needed */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Code, label: "Frontend", desc: "React, Next.js, Tailwind" },
                            { icon: Terminal, label: "Backend", desc: "Spring Boot, Spring, Node.js, Java" },
                            { icon: Database, label: "Database", desc: "PostgreSQL, MySQL, MongoDB, Redis" },
                            { icon: Cloud, label: "DevOps", desc: "Docker, AWS, CI/CD" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
                            >
                                <item.icon className="h-8 w-8 text-primary mb-4" />
                                <h4 className="font-bold text-lg mb-2">{item.label}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
