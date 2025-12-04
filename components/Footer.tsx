import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Deepak Kumar. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/deepakcr101" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/deepak-kumar-10811a220/" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://twitter.com/iamdeepakcr" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
