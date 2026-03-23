import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Lightbulb, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import { teamMembers } from "@/data/mockData";

const features = [
  { icon: Lightbulb, title: "Data Əsaslı Yanaşma", desc: "Hər qərarı data ilə dəstəkləyirik" },
  { icon: Shield, title: "Etibar və Məxfilik", desc: "Datanızın təhlükəsizliyi bizim prioritetimizdir" },
  { icon: Users, title: "Ekspert Komanda", desc: "Təcrübəli data analitikləri ilə işləyirik" },
  { icon: Award, title: "Nəticəyə Fokus", desc: "Ölçülə bilən nəticələr təmin edirik" },
];

export default function About() {
  return (
    <div className="pt-16">
      <section className="hero-gradient section-padding">
        <div className="container">
          <SectionHeader badge="Haqqımızda" title="Haqqımızda" subtitle="Metric — Azərbaycanın aparıcı data analitikası agentliyidir" />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-muted-foreground" style={{ lineHeight: "1.8" }}>
            Metric 2019-cu ildə Azərbaycanda data analitikası sahəsindəki boşluğu doldurmaq məqsədi ilə yaradılıb. Biz inanırıq ki, hər şirkətin datalarında gizlənmiş böyük potensial var. Missiyamız bu potensialı aşkarlayaraq bizneslərin daha ağıllı qərarlar verməsinə kömək etməkdir.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding-sm bg-card/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glow-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Target size={24} /></div>
              <h3 className="mb-3 text-xl font-bold">Missiyamız</h3>
              <p className="text-muted-foreground" style={{ lineHeight: "1.7" }}>Azərbaycan şirkətlərinin data potensialını maksimum səviyyədə istifadə etmələrinə kömək etmək və data əsaslı qərar qəbulu mədəniyyətini yaymaq.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glow-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent"><Eye size={24} /></div>
              <h3 className="mb-3 text-xl font-bold">Vizyonumuz</h3>
              <p className="text-muted-foreground" style={{ lineHeight: "1.7" }}>Regionda data analitikası sahəsində lider şirkət olmaq və hər şirkətin datalarından maksimum fayda əldə edə bildiyi bir ekosistem yaratmaq.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader title="Komandamız" subtitle="Təcrübəli mütəxəssislərdən ibarət komandamız" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glow-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/10 text-xl font-bold text-primary">
                  {m.initials}
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <SectionHeader title="Niyə biz?" subtitle="Metric-i seçməyiniz üçün əsas səbəblər" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glow-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><f.icon size={24} /></div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding-sm">
        <div className="container text-center">
          <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Partnyorlarımız</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {["Supertoys", "Metak", "Şam-fi", "AzRetail"].map((c) => (
              <span key={c} className="text-xl font-bold text-muted-foreground/40">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
