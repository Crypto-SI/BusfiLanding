import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Twitter, Send, MessageCircle, Book } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#challenge" },
    { name: "Projects", href: "#how-it-works" },
    { name: "Litepaper", href: "#" },
    { name: "Contact", href: "#join" },
];

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Telegram", icon: Send, href: "#" },
    { name: "Discord", icon: MessageCircle, href: "#" },
    { name: "Medium", icon: Book, href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-card border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-start space-y-4">
                        <Link href="#" className="flex items-center space-x-2">
                            <Image src="/images/busfi-logo.png" alt="Bus-Fi Logo" width={40} height={40} />
                            <span className="font-headline text-2xl tracking-wider text-primary">BUS-FI</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">© 2025 Bus-Fi. All Rights Reserved.</p>
                    </div>

                    <div className="flex flex-col items-start md:items-center space-y-2">
                         <h3 className="font-headline text-lg text-primary-foreground">Navigate</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-4">
                        <h3 className="font-headline text-lg text-primary-foreground">Connect with us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon" className="bg-card hover:bg-secondary border-primary/20 hover:border-primary">
                                        <social.icon className="h-5 w-5 text-primary" />
                                        <span className="sr-only">{social.name}</span>
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
