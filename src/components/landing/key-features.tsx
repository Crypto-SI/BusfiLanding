import { Gem, Star, Users, Presentation, ShoppingCart, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
    {
        icon: Gem,
        title: "Asset Tokenization & Dynamic Dividends",
        description: "We tokenize real-world buses into NFTs, making investment accessible to all. Our tiered dividend structure rewards early investors with higher returns."
    },
    {
        icon: Star,
        title: "On-Chain Reputation System",
        description: "Our innovative reputation system incentivizes timely repayments from bus financiers, building trust and ensuring the long-term sustainability of the ecosystem."
    },
    {
        icon: Users,
        title: "DAO-Governed Operations",
        description: "The Bus-Fi DAO allows our community to manage the platform, bid on tasks, and collectively shape our future."
    },
    {
        icon: Presentation,
        title: "Transparent Pitch Process",
        description: "Bus financiers can present their proposals with rich multimedia content, empowering investors to make informed decisions."
    },
    {
        icon: ShoppingCart,
        title: "Secondary NFT Marketplace",
        description: "Our platform will feature a secondary market for Bus-Fi NFTs, providing liquidity and new opportunities for investors."
    },
    {
        icon: Rocket,
        title: "Future Innovations",
        description: "We are constantly evolving with features like evolving NFTs, a financier leaderboard, multi-language support, and underwriter bonds on our roadmap."
    }
];

export function KeyFeatures() {
    return (
        <section id="features" className="py-12 md:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary">
                        The Bus-Fi Advantage
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-background border-border/50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-xl text-primary">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
