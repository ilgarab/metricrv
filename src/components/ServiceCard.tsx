import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Search, Package, ShieldAlert, MessageSquare, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  BarChart3, Search, Package, ShieldAlert, MessageSquare,
};

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  index?: number;
}

export default function ServiceCard({ id, icon, title, shortDesc, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/services/${id}`} className="group block h-full">
        <div className="glow-card flex h-full flex-col p-6 md:p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={24} />
          </div>
          <h3 className="mb-3 text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mb-5 flex-1 text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>{shortDesc}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-3">
            Ətraflı <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
