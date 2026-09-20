import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const repositoryUrl = "https://github.com/SolarianVulpine/ThemedResponsiveApp";
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

function Footer() {
        return (
                <footer className="mt-auto border-t bg-card text-card-foreground">
                        <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-[2fr_1fr_1fr]">
                                <div>
                                        <p className="text-lg font-semibold">The Workshop</p>
                                        <p className="mt-2 max-w-md text-sm text-muted-foreground">
                                                A themed and responsive React storefront project created for academic study.
                                        </p>
                                </div>

                                <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm">
                                        <p className="font-medium">Explore</p>
                                        <Link className="text-muted-foreground hover:text-foreground" to="/">
                                                Home
                                        </Link>
                                        <Link className="text-muted-foreground hover:text-foreground" to="/products">
                                                Products
                                        </Link>
                                        <Link className="text-muted-foreground hover:text-foreground" to="/about">
                                                About
                                        </Link>
                                </nav>

                                <div className="flex flex-col gap-3 text-sm">
                                        <p className="font-medium">Project links</p>
                                        {repositoryUrl ? (
                                                <Button asChild className="w-fit" size="sm" variant="outline">
                                                        <a href={repositoryUrl} target="_blank" rel="noreferrer">
                                                                <Github className="size-4" />
                                                                View source on GitHub
                                                        </a>
                                                </Button>
                                        ) : (
                                                <p className="text-muted-foreground">
                                                        Add <code>VITE_GITHUB_URL</code> to link the public repository.
                                                </p>
                                        )}
                                        {contactEmail && (
                                                <a
                                                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                                                        href={`mailto:${contactEmail}`}
                                                >
                                                        <Mail className="size-4" />
                                                        Contact the student developer
                                                </a>
                                        )}
                                </div>
                        </div>
                        <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground">
                                Academic project · Built with React, Tailwind CSS, and shadcn/ui
                        </div>
                </footer>
        );
}

export { Footer };
