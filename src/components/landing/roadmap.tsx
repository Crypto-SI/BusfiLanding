const phases = [
    {
        phase: "Phase 1: Preparation",
        date: "June 1 – July 31, 2025",
        milestones: [
            "Hackathon Registration & Hedera Certification",
            "Concept Refinement & Technical Stack Selection"
        ]
    },
    {
        phase: "Phase 2: Hacking & Mentorship",
        date: "August 1 – September 30, 2025",
        milestones: [
            "Smart Contract & Reputation System Development",
            "UI Development & Off-chain Integration Concept"
        ]
    },
    {
        phase: "Phase 3: Submission & Evaluation",
        date: "September 30 – November 3, 2025",
        milestones: [
            "Final Project Submission & Evaluation"
        ]
    },
    {
        phase: "Phase 4: Post-Hackathon & Future Growth",
        date: "Q4 2025 & Beyond",
        milestones: [
            "Iteration & Pilot Testing",
            "Regional Pilot (e.g., Kenya, Nigeria)",
            "Platform Expansion & DAO Voting"
        ]
    }
];

export function Roadmap() {
    return (
        <section id="roadmap" className="py-12 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl text-primary">
                        Our Journey to Reshape African Transit
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border rounded-full" aria-hidden="true"></div>
                    <div className="relative flex flex-col gap-12">
                        {phases.map((item, index) => (
                            <div key={index} className="flex items-center w-full">
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground">
                                    {index + 1}
                                </div>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                    <div className={`p-6 rounded-lg bg-card shadow-lg border border-border/50 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <p className="text-sm text-primary font-semibold">{item.date}</p>
                                        <h3 className="font-headline text-2xl text-primary-foreground mt-1 mb-3">{item.phase}</h3>
                                        <ul className="space-y-1 text-muted-foreground">
                                            {item.milestones.map((milestone, i) => (
                                                <li key={i}>- {milestone}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
