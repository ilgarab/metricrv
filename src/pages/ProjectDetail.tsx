import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import { projects } from "@/data/mockData";
import CTABanner from "@/components/CTABanner";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Layihə tapılmadı</h1>
          <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">Layihələrə qayıt</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="hero-gradient section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={14} /> Layihələr
            </Link>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{project.serviceType}</span>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{project.company}</p>
          </motion.div>
        </div>
      </section>

      {/* Company logo & image */}
      {project.logo && (
        <section className="container -mt-8 mb-8">
          <div className="mx-auto max-w-3xl">
            <img src={project.logo} alt={project.company} className="h-20 rounded-xl border border-border bg-card p-3 shadow-lg" />
          </div>
        </section>
      )}

      {/* Metrics */}
      <section className="section-padding-sm border-b border-border">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {project.metrics.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{m.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-xl font-bold">Şirkət haqqında</h2>
            <p className="text-muted-foreground" style={{ lineHeight: "1.8" }}>{project.shortDesc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-xl font-bold">Çağırış</h2>
            <p className="text-muted-foreground" style={{ lineHeight: "1.8" }}>{project.challenge}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-xl font-bold">Həll</h2>
            <p className="text-muted-foreground" style={{ lineHeight: "1.8" }}>{project.solution}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-xl font-bold">Nəticələr</h2>
            <p className="text-muted-foreground" style={{ lineHeight: "1.8" }}>{project.results}</p>
          </motion.div>

          {/* Testimonial */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glow-card p-8">
            <Quote className="mb-4 text-primary/30" size={32} />
            <p className="text-lg" style={{ lineHeight: "1.8" }}>"{project.testimonial}"</p>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Sizin üçün də belə nəticələr əldə edək" buttonText="Layihə müzakirə et" />
    </div>
  );
}
