import { useEffect, useState } from "react";
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

const iconDefs = [
  { Icon: BarChart3, size: 30 },
  { Icon: PieChart, size: 34 },
  { Icon: TrendingUp, size: 26 },
  { Icon: LineChart, size: 28 },
  { Icon: Table2, size: 24 },
  { Icon: FileSpreadsheet, size: 22 },
  { Icon: Database, size: 24 },
  { Icon: Activity, size: 28 },
  { Icon: LayoutDashboard, size: 26 },
  { Icon: ChartPie, size: 22 },
  { Icon: ChartBar, size: 24 },
  { Icon: ChartLine, size: 26 },
  { Icon: GitGraph, size: 22 },
  { Icon: Sigma, size: 20 },
  { Icon: Gauge, size: 26 },
  { Icon: Percent, size: 22 },
];

// Generate repeating icon positions spread across full page content
function generateIcons() {
  const result: {
    Icon: typeof BarChart3;
    x: string;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }[] = [];

  const rows = 20; // 20 rows of icons spread down the page
  const perRow = 3; // 3 icons per row

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < perRow; col++) {
      const idx = (row * perRow + col) % iconDefs.length;
      const { Icon, size } = iconDefs[idx];
      const xBase = (col / perRow) * 100 + 5 + Math.random() * 25;
      const yPx = row * 350 + Math.random() * 200;
      result.push({
        Icon,
        x: `${Math.min(xBase, 93)}%`,
        y: yPx,
        size,
        delay: Math.random() * 3,
        duration: 5 + Math.random() * 5,
      });
    }
  }
  return result;
}

const icons = generateIcons();

export default function FloatingDataIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" style={{ minHeight: "100%" }}>
      {icons.map(({ Icon, x, y, size, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 dark:text-primary/15"
          style={{ left: x, top: y }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{
            opacity: { duration: duration * 0.7, delay, repeat: Infinity, ease: "easeInOut" },
            y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
            x: { duration: duration * 1.2, delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: duration * 1.4, delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
