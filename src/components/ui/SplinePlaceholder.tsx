"use client";

import { motion } from "framer-motion";

interface SplinePlaceholderProps {
  /** Paste your Spline scene URL here when ready, e.g. https://prod.spline.design/xxx/scene.splinecode */
  sceneUrl?: string;
  className?: string;
}

export default function SplinePlaceholder({
  sceneUrl,
  className = "",
}: SplinePlaceholderProps) {
  // When you have a real Spline scene, uncomment the iframe / @splinetool/react-spline below:
  //
  // import Spline from "@splinetool/react-spline";
  // return <Spline scene={sceneUrl} className={className} />;
  //
  // OR use the iframe embed URL from Spline's share panel:
  // return (
  //   <iframe
  //     src={sceneUrl}
  //     frameBorder="0"
  //     className={`w-full h-full rounded-3xl ${className}`}
  //     allow="autoplay"
  //   />
  // );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`spline-placeholder w-full h-full min-h-[480px] ${className}`}
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 rounded-full border border-dashed"
          style={{ borderColor: "rgba(184, 137, 94, 0.2)" }}
        />
        {/* Mid ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute w-52 h-52 rounded-full border border-dashed"
          style={{ borderColor: "rgba(216, 176, 122, 0.3)" }}
        />
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 rounded-full border"
          style={{ borderColor: "rgba(184, 137, 94, 0.4)" }}
        />

        {/* Center pulse */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(184, 137, 94, 0.15)", border: "1px solid rgba(184, 137, 94, 0.4)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B8895E"
            strokeWidth="1.5"
            className="w-8 h-8"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        {/* Labels */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
        >
          <p
            className="text-xs font-display font-semibold uppercase tracking-widest"
            style={{ color: "#B8895E" }}
          >
            3D Object — Spline
          </p>
          <p
            className="text-xs font-body mt-1"
            style={{ color: "rgba(182, 173, 162, 0.6)" }}
          >
            Replace with your Spline scene URL in{" "}
            <code className="text-xs" style={{ color: "#D8B07A" }}>
              SplinePlaceholder.tsx
            </code>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
