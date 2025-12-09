import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Container className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display text-white">Contact Us</h1>
                <p className="text-slate-400 text-xl mb-12">We'd love to hear from you.</p>

                <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Name</label>
                            <input type="text" className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-secondary)]" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email</label>
                            <input type="email" className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-secondary)]" placeholder="your@email.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Message</label>
                        <textarea className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-[var(--color-secondary)]" placeholder="How can we help?" />
                    </div>

                    <Button className="w-full" size="lg" variant="gradient">Send Message</Button>
                </form>
            </Container>
        </div>
    );
}
