import { Container } from "@/components/ui/Container";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Container>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display text-white">About Us</h1>
                <p className="text-slate-400 text-xl mb-12">We are on a mission to digitize every Kirana store in India.</p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-slate-400">To provide simple, accessible, and powerful technology to the millions of small shop owners who power India's economy.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
                        <p className="text-slate-400">Started in 2025, Dukaan Saathi realized that while technology advanced, shop management remained complex. We decided to change that using the app everyone already knows - WhatsApp.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
