import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What is Bus-Fi?",
        answer: "Bus-Fi is a decentralized crowdfunding platform built on the Hedera network that finances bus networks in underserved African communities."
    },
    {
        question: "How do I invest?",
        answer: "You can invest by browsing bus projects on our platform and purchasing NFTs that represent a stake in the project."
    },
    {
        question: "What are the returns on my investment?",
        answer: "You will receive dividends from the operational revenue of the bus you invest in, with a higher payout rate until the initial loan is repaid."
    },
    {
        question: "What is the on-chain reputation system?",
        answer: "It's a system that tracks the repayment performance of bus financiers, creating a trust score that impacts their ability to raise future funds."
    },
    {
        question: "Why was Hedera chosen for this project?",
        answer: "Hedera offers fast, fair, and secure transactions with low fees, making it an ideal network for a project focused on financial inclusion and real-world asset tokenization."
    }
];

export function Faq() {
    return (
        <section id="faq" className="py-12 md:py-24 bg-card">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left font-semibold hover:text-primary">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
