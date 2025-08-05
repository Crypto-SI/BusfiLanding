import { promises as fs } from 'fs';
import path from 'path';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Bus-Fi Litepaper',
    description: 'The official litepaper for the Bus-Fi project, detailing our mission, technology, and roadmap.',
};

export default async function LitepaperPage() {
    const markdownPath = path.join(process.cwd(), 'litepaper.md');
    const markdown = await fs.readFile(markdownPath, 'utf-8');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <Button asChild variant="outline" className="mb-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <article className="prose prose-invert max-w-none text-foreground prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-3xl prose-h2:text-primary-foreground prose-h3:font-headline prose-h3:text-2xl prose-h3:text-primary-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-primary-foreground">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}
