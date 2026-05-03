import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HandwritingAnimation() {
  const name = "M.Dinesh";
  const controls = useAnimation();
  const drawDuration = 2.8;

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, drawDuration * 1000));
      controls.start({
        fillOpacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#000000]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
          .handwriting-text {
            font-family: 'Dancing Script', cursive;
            font-size: 90px;
          }
          @media (min-width: 768px) {
            .handwriting-text { font-size: 130px; }
          }
          @media (min-width: 1024px) {
            .handwriting-text { font-size: 160px; }
          }
        `}
      </style>

      <svg viewBox="0 0 1000 250" className="w-full max-w-5xl h-auto" aria-label={name}>
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <clipPath id="clip-path-draw">
            <motion.rect
              x="0" y="0" width="1000" height="250"
              initial={{ width: 0 }}
              animate={{ width: 1000 }}
              transition={{ duration: drawDuration, ease: "easeInOut" }}
            />
          </clipPath>
        </defs>
        <motion.text
          x="50%" y="50%" dy="30px" textAnchor="middle"
          className="handwriting-text"
          clipPath="url(#clip-path-draw)"
          stroke="url(#textGradient)"
          strokeWidth="1.5"
          fill="url(#textGradient)"
          initial={{ fillOpacity: 0 }}
          animate={controls}
        >
          {name}
        </motion.text>
      </svg>
    </div>
  );
}
