import { Container } from "@/components/ui/Container";
import { PricingSection } from "@/components/home/PricingSection";

export default function PricingPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Container className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display text-white">Pricing</h1>
                <p className="text-slate-400 text-xl">Choose the plan that fits your shop.</p>
            </Container>
            <PricingSection />
        </div>
    );
}
