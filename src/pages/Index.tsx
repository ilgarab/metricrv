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
import { services, projects, blogPosts } from "@/data/mockData";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      {/* Floating data elements */}
      <svg className="absolute top-32 left-[10%] h-8 w-8 animate-float text-primary/10" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="8" height="20" rx="1" />
        <rect x="14" y="8" width="8" height="14" rx="1" />
      </svg>
      <svg className="absolute top-52 right-[15%] h-6 w-6 animate-float text-accent/10" style={{ animationDelay: "2s" }} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg className="absolute bottom-32 left-[20%] h-10 w-10 animate-float text-primary/8" style={{ animationDelay: "4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="4 18 8 14 12 16 16 10 20 12" />
      </svg>
    </div>
  );
}

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
        <HeroBackground />
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
