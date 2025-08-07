import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Join() {
    return (
        <section id="join" className="py-12 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                            Be a Part of the Bus-Fi Revolution
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether you are an investor looking to make a meaningful impact, a bus operator seeking funding, or a developer passionate about Web3, there's a place for you in the Bus-Fi community.
                        </p>
                        <Button asChild size="lg" className="text-lg">
                            <Link href="#">Get Involved</Link>
                        </Button>
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
