
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Twitter, MessageCircle, Send } from "lucide-react";

const socialLinks = [
    { 
        name: "Twitter", 
        icon: Twitter, 
        handle: "Crypto_SI",
        href: "https://twitter.com/Crypto_SI" 
    },
    { 
        name: "Discord", 
        icon: MessageCircle, 
        handle: "the Cryptosi channel",
        href: "#"
    },
    { 
        name: "Telegram", 
        icon: Send, 
        handle: "crypto waffle lite",
        href: "#"
    },
];

export function Join() {
    return (
        <section id="join" className="py-12 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                            Be a Part of the Bus-Fi Revolution
                        </h2>
                        <p className="text-lg text-foreground mb-8">
                            Whether you are an investor looking to make a meaningful impact, a bus operator seeking funding, or a developer passionate about Web3, there's a place for you in the Bus-Fi community.
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="text-lg">Get Involved</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className="font-headline text-2xl text-primary text-center">Connect With Us</DialogTitle>
                                    <DialogDescription className="text-center">
                                        Join the conversation and stay up-to-date.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-col space-y-4 pt-4">
                                    {socialLinks.map((social) => (
                                        <Button key={social.name} asChild variant="outline" size="lg" className="justify-start text-lg py-6">
                                            <Link href={social.href} target="_blank" rel="noopener noreferrer">
                                                <social.icon className="mr-4 h-6 w-6 text-primary" />
                                                <div className="text-left">
                                                    <p className="font-semibold">{social.name}</p>
                                                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                                                </div>
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div>
                        <Image
                            src="/images/three.png"
                            alt="Diverse group of people collaborating"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="global community collaboration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
