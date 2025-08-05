import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, PiggyBank, Landmark } from "lucide-react";
import { NFTIcon } from "@/components/icons";

const steps = [
    {
        icon: Search,
        title: "Browse Bus Projects",
        description: "Explore detailed proposals from bus financiers, complete with multimedia presentations including images, videos, and business plans."
    },
    {
        icon: NFTIcon,
        title: "Secure Your Stake",
        description: "Invest in the bus projects you believe in and receive a unique Bus-Fi NFT as proof of your investment."
    },
    {
        icon: PiggyBank,
        title: "Receive Your Share",
        description: "A portion of the bus's operational profits is automatically distributed to you as a dividend. You will receive a higher payout rate until the initial loan is repaid."
    },
    {
        icon: Landmark,
        title: "Govern the Future",
        description: "As an NFT holder, you can participate in the Bus-Fi DAO, having a say in the future of the platform and its projects."
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">
                        A Simple, Transparent, and Rewarding Process
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center p-6 border-border/50 hover:border-primary hover:shadow-lg transition-all duration-300">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    <step.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl text-primary-foreground">{step.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-base text-muted-foreground">
                                {step.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
