import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/data/mockData";

export default function Projects() {
  return (
    <div className="pt-16">
      <section className="hero-gradient section-padding">
        <div className="container">
          <SectionHeader badge="Layihələr" title="Layihələrimiz" subtitle="Müştərilərimiz üçün həyata keçirdiyimiz data analitikası layihələri" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
