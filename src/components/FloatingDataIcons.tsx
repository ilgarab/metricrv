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
} from "lucide-react";

const icons = [
  { Icon: BarChart3, x: "8%", y: "15%", size: 28, delay: 0, duration: 7 },
  { Icon: PieChart, x: "85%", y: "20%", size: 32, delay: 1.2, duration: 8 },
  { Icon: TrendingUp, x: "20%", y: "70%", size: 24, delay: 0.5, duration: 6.5 },
  { Icon: LineChart, x: "75%", y: "65%", size: 26, delay: 2, duration: 7.5 },
  { Icon: Table2, x: "50%", y: "12%", size: 22, delay: 0.8, duration: 9 },
  { Icon: FileSpreadsheet, x: "90%", y: "50%", size: 20, delay: 1.5, duration: 6 },
  { Icon: Database, x: "5%", y: "45%", size: 22, delay: 3, duration: 8.5 },
  { Icon: Activity, x: "35%", y: "80%", size: 26, delay: 0.3, duration: 7 },
  { Icon: LayoutDashboard, x: "65%", y: "85%", size: 24, delay: 2.5, duration: 8 },
  { Icon: ChartPie, x: "45%", y: "35%", size: 18, delay: 1.8, duration: 6.8 },
  { Icon: ChartBar, x: "15%", y: "90%", size: 20, delay: 3.5, duration: 7.2 },
  { Icon: ChartLine, x: "92%", y: "80%", size: 22, delay: 0.7, duration: 9.5 },
];

export default function FloatingDataIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, x, y, size, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/[0.07] dark:text-primary/[0.12]"
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
