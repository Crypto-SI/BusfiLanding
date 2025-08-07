import Image from "next/image";

export function Solution() {
    return (
        <section id="solution" className="py-12 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="/images/funding.png"
                            alt="Investors and an African entrepreneur using the Bus-Fi platform"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                            Democratizing Investment, Empowering Communities
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Bus-Fi leverages the power of the Hedera network to connect investors directly with bus financiers in Africa. Through our transparent and secure platform, you can fund essential transportation infrastructure and receive a share of the profits. We are not just funding buses; we are building a sustainable ecosystem that fosters financial inclusion and drives the adoption of Web3 technologies for real-world impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
