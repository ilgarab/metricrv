import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";
import FloatingDataIcons from "@/components/FloatingDataIcons";
import { services, projects, blogPosts } from "@/data/mockData";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Data Analitika Agentliyi
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              style={{ lineHeight: "1.08" }}
            >
              Biznesinizi{" "}
              <span className="gradient-text">datalar</span>{" "}
              idarə etsin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
              style={{ lineHeight: "1.7" }}
            >
              Korporativ analitik hesabatlar və data əsaslı qərar qəbulu ilə biznesinizi növbəti səviyyəyə aparın.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link to="/services">
                <Button size="lg" className="gap-2 active:scale-[0.97]">
                  Xidmətlərimiz <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="active:scale-[0.97]">
                  Bizimlə əlaqə
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm border-y border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <StatCounter value={50} suffix="+" label="Tamamlanmış layihə" index={0} />
            <StatCounter value={30} suffix="+" label="Müştəri" index={1} />
            <StatCounter value={5} suffix="+" label="İl təcrübə" index={2} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Xidmətlər"
            title="Data əsaslı həllər"
            subtitle="Biznesinizin ehtiyaclarına uyğun analitik xidmətlər təqdim edirik"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {services.slice(3).map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i + 3} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-200">
              Bütün xidmətlər <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <SectionHeader
            badge="Layihələr"
            title="Uğur hekayələri"
            subtitle="Müştərilərimiz üçün həyata keçirdiyimiz layihələrdən nümunələr"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} {...p} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-200">
              Bütün layihələr <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Rəylər"
            title="Müştərilərimiz nə deyir?"
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding bg-card/30">
        <div className="container">
          <SectionHeader
            badge="Bloq"
            title="Son məqalələr"
            subtitle="Data analitikası sahəsindəki ən son trendlər və tövsiyələr"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((p, i) => (
              <BlogCard key={p.id} {...p} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-200">
              Bütün məqalələr <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
