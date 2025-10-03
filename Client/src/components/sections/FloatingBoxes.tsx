"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const investmentItems = [
  { name: "Insurance", color: "bg-cyan-500" },
  { name: "Future-Driven", color: "bg-amber-500" },
  { name: "Expansion", color: "bg-rose-500" },
  { name: "Customer's Loyalty", color: "bg-pink-500" },
  { name: "Mutual Respect", color: "bg-orange-500" },
  { name: "Integrity", color: "bg-orange-400" },
  { name: "Responsibilty", color: "bg-teal-500" },
  { name: "Innovation", color: "bg-violet-600" },
  { name: "Professionalism", color: "bg-emerald-500" },
];

export default function FloatingBoxes() {
  const centerX = 50; // center percentage
  const centerY = 50; // center percentage
  const radius1 = 35; // inner orbit radius (percentage)
  const radius2 = 45; // outer orbit radius (percentage)

const getCircularPosition = (
  index: number,
  total: number,
  radius: number
): { x: string; y: string } => {
  const angle = (index / total) * 2 * Math.PI;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x: `${x}%`, y: `${y}%` };
};


  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Center content */}
      <div className="text-center max-w-xl z-10 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Our Core <span className="text-[#023e8a]">Values</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We believe in transparency and uphold the highest ethical standards in every Loan and Real Estate Investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
          href="/properties"
          className="bg-[#caf0f8] hover:bg-[#caf0f8] text-[#023e8a] px-8 py-3 rounded-full shadow-lg font-semibold transition-all transform hover:scale-105">
            View Properties
          </Link>
          <Link 
            href="/loans"
            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
            View Loan Programs
          </Link>
        </div>
      </div>

      {/* Floating investment terms */}
      {investmentItems.map((item, i) => {
        const isInnerOrbit = i < 10;
        const orbitIndex = isInnerOrbit ? i : i - 10;
        const orbitTotal = isInnerOrbit ? 10 : 10;
        const radius = isInnerOrbit ? radius1 : radius2;
        const position = getCircularPosition(orbitIndex, orbitTotal, radius);
        
        return (
          <motion.div
            key={i}
            className={`absolute ${item.color} text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg transform -translate-x-1/2 -translate-y-1/2 border border-white/20`}
            style={{
              left: position.x,
              top: position.y,
              zIndex: 1,
            }}
            animate={{
              y: [0, -15, 0, 12, 0],
              x: [0, 10, 0, -8, 0],
              rotate: [0, 4, 0, -4, 0],
              scale: [1, 1.05, 1, 0.98, 1],
            }}
            transition={{
              duration: 4 + (i % 4) * 0.5, // varied timing
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, // stagger the animations
            }}
            whileHover={{
              scale: 1.1,
              zIndex: 20,
            }}
          >
            {item.name}
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full opacity-80"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </motion.div>
        );
      })}

      {/* Additional floating dollar signs for depth */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`dollar-${i}`}
          className="absolute text-emerald-400/30 text-xl font-bold select-none"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          $
        </motion.div>
      ))}
    </div>
  );
}