import { Container } from "@/components/ui/Container";

export default function FeaturesPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Container>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display text-white">Features</h1>
                <p className="text-slate-400 text-xl">Explore the power of WhatsApp-based shop management.</p>
                <div className="mt-12 p-8 border border-white/10 rounded-2xl bg-white/5">
                    <p className="text-white">Detailed feature breakdown coming soon.</p>
                </div>
            </Container>
        </div>
    );
}
