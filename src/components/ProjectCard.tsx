import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  company: string;
  title: string;
  serviceType: string;
  shortDesc: string;
  index?: number;
}

export default function ProjectCard({ id, company, title, serviceType, shortDesc, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/projects/${id}`} className="group block h-full">
        <div className="glow-card flex h-full flex-col overflow-hidden">
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
            <span className="text-4xl font-bold text-primary/30">{company[0]}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {serviceType}
            </span>
            <h3 className="mb-1 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mb-1 text-sm font-medium text-muted-foreground">{company}</p>
            <p className="mb-4 flex-1 text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>{shortDesc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-3">
              Ətraflı bax <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
