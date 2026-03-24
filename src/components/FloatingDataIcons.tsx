import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  LineChart,
  Table2,
  FileSpreadsheet,
  Database,
  Activity,
  LayoutDashboard,
  ChartPie,
  ChartBar,
  ChartLine,
  GitGraph,
  Sigma,
  Gauge,
  Percent,
} from "lucide-react";

const icons = [
  // Spread across full page height using vh-based positions
  { Icon: BarChart3, x: "8%", y: "5vh", size: 28, delay: 0, duration: 7 },
  { Icon: PieChart, x: "85%", y: "12vh", size: 32, delay: 1.2, duration: 8 },
  { Icon: TrendingUp, x: "20%", y: "25vh", size: 24, delay: 0.5, duration: 6.5 },
  { Icon: LineChart, x: "75%", y: "30vh", size: 26, delay: 2, duration: 7.5 },
  { Icon: Table2, x: "50%", y: "18vh", size: 22, delay: 0.8, duration: 9 },
  { Icon: FileSpreadsheet, x: "92%", y: "42vh", size: 20, delay: 1.5, duration: 6 },
  { Icon: Database, x: "5%", y: "50vh", size: 22, delay: 3, duration: 8.5 },
  { Icon: Activity, x: "35%", y: "55vh", size: 26, delay: 0.3, duration: 7 },
  { Icon: LayoutDashboard, x: "65%", y: "65vh", size: 24, delay: 2.5, duration: 8 },
  { Icon: ChartPie, x: "45%", y: "38vh", size: 18, delay: 1.8, duration: 6.8 },
  { Icon: ChartBar, x: "15%", y: "75vh", size: 20, delay: 3.5, duration: 7.2 },
  { Icon: ChartLine, x: "88%", y: "80vh", size: 22, delay: 0.7, duration: 9.5 },
  { Icon: GitGraph, x: "30%", y: "88vh", size: 20, delay: 1.0, duration: 7.8 },
  { Icon: Sigma, x: "70%", y: "92vh", size: 18, delay: 2.2, duration: 8.2 },
  { Icon: Gauge, x: "55%", y: "78vh", size: 24, delay: 0.4, duration: 6.2 },
  { Icon: Percent, x: "10%", y: "95vh", size: 20, delay: 1.7, duration: 7.5 },
];

export default function FloatingDataIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {icons.map(({ Icon, x, y, size, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/[0.06] dark:text-primary/[0.10]"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -18, 0, 18, 0],
            x: [0, 8, 0, -8, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            opacity: { duration: 2, delay, times: [0, 0.1, 0.9, 1] },
            y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
            x: { duration: duration * 1.3, delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: duration * 1.5, delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
