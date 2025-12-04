"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "ShopFlow – E-Commerce Platform",
        description:
            "A microservices-based e-commerce platform with 5+ services, Kafka-powered async communication, JWT auth, Redis caching, and a React.js SPA. Achieved 30% faster order processing and 40% lower API latency.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "React.js", "Docker", "JWT"],
        github: "https://github.com/deepakcr101/shopflow-frontend",  // add link
        demo: "https://shopflow-frontend-eight.vercel.app/",    // add link
        image: "/shopflow.jpg",
    },
    {
        title: "Event Ticket Platform",
        description:
            "A secure, high-concurrency ticketing system with dynamic QR codes, real-time validation, and Keycloak-based access control. Implemented PostgreSQL pessimistic locking to prevent overselling during peak loads.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Keycloak", "Docker"],
        github: "https://github.com/deepakcr101/event-ticket-platform",  // add link
        demo: "#",    // add link
        image: "/event-ticketing.jpg",
    },
    {
        title: "Mess Record Management System",
        description:
            "A full-stack system for 1,000+ users with meal tracking, menu planning, role-based dashboards, and Stripe-powered payments. Includes 20+ REST APIs, real-time analytics, and a responsive React + TypeScript UI.",
        tech: ["Java", "Spring Boot", "React.js", "TypeScript", "PostgreSQL", "Stripe"],
        github: "https://github.com/deepakcr101/mess-management-system",  // add link
        demo: "#",    // add link
        image: "/mess-management.jpg",
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js and Framer Motion to showcase my work.",
        tech: ["Next.js", "Framer Motion", "TailwindCSS"],
        github: "#",
        demo: "#",
        image: "/project4.jpg", // Placeholder
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-accent/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-foreground">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work, demonstrating my ability to build robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl"
                        >
                            {/* Project Image Placeholder / Gradient */}
                            <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Folder className="h-16 w-16 text-primary/20" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/deepakcr101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                    >
                        View All Projects
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
