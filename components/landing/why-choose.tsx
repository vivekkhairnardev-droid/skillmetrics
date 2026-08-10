import {
    ShieldCheck,
    Lightning,
    Plugs,
    ChartLineUp,
    HeadCircuit,
    Handshake,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const reasons = [
    {
        icon: HeadCircuit,
        title: "AI-First Architecture",
        description:
            "Built from the ground up with AI at the core — not bolted on as an afterthought. Every assessment, recommendation, and insight is powered by intelligent algorithms.",
        accent: "primary" as const,
    },
    {
        icon: Lightning,
        title: "Lightning-Fast Setup",
        description:
            "Go from sign-up to your first competency report in under 30 minutes. No complex configurations, no lengthy onboarding — just results.",
        accent: "red" as const,
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Security",
        description:
            "SOC 2 compliant, end-to-end encryption, and role-based access controls. Your workforce data is protected with the highest security standards.",
        accent: "primary" as const,
    },
    {
        icon: Plugs,
        title: "Seamless Integrations",
        description:
            "Connect with your existing HRMS, LMS, and productivity tools. SkillMetrics fits into your workflow — not the other way around.",
        accent: "red" as const,
    },
    {
        icon: ChartLineUp,
        title: "Actionable Insights",
        description:
            "Move beyond data collection to genuine insight. Every dashboard, report, and metric is designed to drive decisions and measurable outcomes.",
        accent: "primary" as const,
    },
    {
        icon: Handshake,
        title: "Dedicated Support",
        description:
            "From implementation to scale, our customer success team works alongside you. Get expert guidance, training, and priority assistance whenever you need it.",
        accent: "red" as const,
    },
];

const accentStyles = {
    primary: {
        icon: "bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
        number: "text-primary/20 group-hover:text-primary/40",
    },
    red: {
        icon: "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white",
        number: "text-brand-red/20 group-hover:text-brand-red/40",
    },
};

export function WhyChoose() {
    return (
        <section id="why-choose" className="relative border-y border-border/60 bg-muted/40 py-24 sm:py-32">

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">

                    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Why leading organizations choose SkillMetrics
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We&apos;re not just another HR tool. SkillMetrics is purpose-built
                        for organizations that take skill development seriously.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => {
                        const styles = accentStyles[reason.accent];
                        const Icon = reason.icon;

                        return (
                            <article
                                key={reason.title}
                                className="group relative rounded-lg border border-border/80 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
                            >
                                {/* Step number watermark */}
                                <span
                                    className={cn(
                                        "absolute top-4 right-5 font-heading text-4xl font-bold transition-colors duration-300",
                                        styles.number
                                    )}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div
                                    className={cn(
                                        "mb-5 inline-flex size-12 items-center justify-center rounded-md transition-all duration-300",
                                        styles.icon
                                    )}
                                >
                                    <Icon className="size-5" weight="duotone" />
                                </div>

                                <h3 className="font-heading text-lg font-semibold text-foreground">
                                    {reason.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {reason.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
