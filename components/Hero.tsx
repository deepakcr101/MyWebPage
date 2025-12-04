"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-2 mb-6 rounded-full bg-accent border border-border/50"
                        >
                            <span className="text-sm font-medium text-primary">
                                Looking for Full-time opportunities
                            </span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                            Building Scalable <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Digital Systems
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I'm a Software Developer passionate about designing reliable, scalable, and impactful
                            software systems. I specialize in backend engineering, system design, and building
                            full-stack solutions that solve real-world problems.
                            Currently focused on crafting efficient architectures, refining problem-solving skills,
                            and developing human-centered products powered by clean, maintainable code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="https://github.com/deepakcr101?tab=repositories"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-background border border-border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Illustration/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Abstract decorative elements representing code/tech */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl rotate-3 transform transition-transform hover:rotate-6 duration-500" />
                            <div className="absolute inset-0 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                                <div className="text-9xl font-serif text-primary/10 select-none">
                                    {"< />"}
                                </div>
                                {/* Placeholder for actual image if user provides one */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
