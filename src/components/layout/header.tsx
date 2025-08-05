"use client";

import Link from "next/link";
import { useState } from "react";
import { BusFiLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "The Challenge", href: "#challenge" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="#" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <BusFiLogo className="h-8 w-auto" />
                            <span className="font-headline text-xl font-bold tracking-wider text-primary">BUS-FI</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center">
                         <Button asChild>
                            <Link href="#join">Get Involved</Link>
                        </Button>
                    </div>
                    <div className="flex items-center md:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <Link href="#" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                                            <BusFiLogo className="h-8 w-auto" />
                                            <span className="font-headline text-xl font-bold tracking-wider text-primary">BUS-FI</span>
                                        </Link>
                                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </div>
                                    <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                                        {navLinks.map((link) => (
                                            <Link key={link.name} href={link.href} className="text-xl font-medium text-foreground transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                                                {link.name}
                                            </Link>
                                        ))}
                                        <Button asChild size="lg" className="mt-4">
                                            <Link href="#join" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
                                        </Button>
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
