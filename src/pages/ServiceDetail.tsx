import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Search, Package, ShieldAlert, MessageSquare, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/mockData";

const iconMap: Record<string, any> = { BarChart3, Search, Package, ShieldAlert, MessageSquare };

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Xidmət tapılmadı</h1>
          <Link to="/services" className="mt-4 inline-block text-primary hover:underline">Xidmətlərə qayıt</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || BarChart3;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={14} /> Xidmətlər
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={28} />
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h1>
            </div>
            <p className="max-w-2xl text-muted-foreground" style={{ lineHeight: "1.7" }}>{service.fullDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Service image */}
      {service.image && (
        <section className="container -mt-8 mb-8">
          <div className="mx-auto max-w-3xl">
            <img src={service.image} alt={service.title} className="w-full rounded-2xl border border-border shadow-lg" />
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <h2 className="mb-10 text-2xl font-bold">Necə işləyir?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glow-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <h2 className="mb-10 text-2xl font-bold">Xidmətə daxildir</h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {service.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Check size={18} className="shrink-0 text-primary" />
                <span>{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-2xl font-bold">Bu xidmət üçün müraciət edin</h2>
          <p className="mt-3 text-muted-foreground">Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın</p>
          <Link to="/contact">
            <Button size="lg" className="mt-8 active:scale-[0.97]">Müraciət et</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
