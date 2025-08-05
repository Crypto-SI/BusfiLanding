import Image from "next/image";

export function Challenge() {
    return (
        <section id="challenge" className="py-12 md:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground mb-4">
                            Bridging the Gap in African Transit
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            In many African communities, a lack of reliable public transportation creates a significant barrier to economic growth and social mobility. Aspiring bus owners and operators often lack access to the necessary capital to launch or expand their services. This is where Bus-Fi comes in.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Frustrated individual waiting at a desolate bus stop"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="desolate bus stop"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
