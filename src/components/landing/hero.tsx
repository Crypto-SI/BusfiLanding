
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative text-white overflow-hidden">
             <div className="absolute inset-0">
                <Image
                    src="/images/hero.png"
                    alt="A modern bus in a bustling African city"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="modern bus african city"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-wide text-primary drop-shadow-lg">
                    Invest in Africa&apos;s Future,<br /> One Bus at a Time.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md">
                    Bus-Fi is a decentralized crowdfunding platform on the Hedera network that empowers you to finance bus networks in underserved African communities. Earn rewards, support local economies, and drive real-world change with Web3 technology.
                </p>
                <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                    <Button asChild size="lg" className="text-lg">
                        <Link href="#how-it-works">Explore Bus Projects</Link>
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" size="lg" className="text-lg">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Watch Our Story
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl p-0">
                             <DialogHeader className="sr-only">
                                <DialogTitle>Bus-Fi Story Video</DialogTitle>
                             </DialogHeader>
                            <div className="aspect-video">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/xJSgzBco1Jc" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button asChild variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary/10 hover:text-primary">
                        <Link href="#">Read Our Litepaper</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
