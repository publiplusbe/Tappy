import { motion, useReducedMotion } from 'motion/react';
import basis from '../assets/logo/tappy-icoon-basis.png';
import pijl from '../assets/logo/tappy-icoon-pijl.png';

// Dezelfde tik-animatie als onderaan de Tappy-mails: het pijltje trekt terug, tikt op de T,
// het icoon veert even in en er loopt een golf vanaf de punt. Daarna ± 1,4 s rust.
const LUS = {
  duration: 1.9,
  times: [0, 0.73, 0.76, 0.79, 0.81, 0.84, 0.86, 0.89, 0.92, 0.95, 1],
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export function TappyIcon({ size = 36 }: { size?: number }) {
  const stil = useReducedMotion();
  const u = size * 0.055;
  const pijlPad = [0, 0, u * 0.5, u, u * 0.5, -u * 0.6, -u * 0.6, -u * 0.3, 0, 0, 0];

  return (
    <motion.span
      aria-hidden="true"
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width: size, height: size, borderRadius: size * 0.22 }}
      animate={stil ? undefined : { scale: [1, 1, 1, 1, 0.985, 0.94, 0.93, 0.97, 1.03, 1, 1] }}
      transition={LUS}
    >
      <img src={basis} alt="" width={size} height={size} className="absolute inset-0 h-full w-full" />
      {!stil && (
        <motion.span
          className="absolute rounded-full border-solid border-white"
          style={{
            left: '71%',
            top: '53%',
            width: size * 0.6,
            height: size * 0.6,
            marginLeft: -size * 0.3,
            marginTop: -size * 0.3,
            borderWidth: Math.max(1, size * 0.035),
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 0, 0, 0, 0, 0.1, 0.25, 0.4, 0.57, 0.73, 0.9],
            opacity: [0, 0, 0, 0, 0, 0.9, 0.8, 0.63, 0.47, 0.3, 0],
          }}
          transition={LUS}
        />
      )}
      <motion.img
        src={pijl}
        alt=""
        width={size}
        height={size}
        className="absolute inset-0 h-full w-full"
        animate={stil ? undefined : { x: pijlPad, y: pijlPad }}
        transition={LUS}
      />
    </motion.span>
  );
}

export default function TappyLogo({
  size = 36,
  tekstClassName = 'text-indigo-600',
}: {
  size?: number;
  tekstClassName?: string;
}) {
  return (
    <span className="flex items-center gap-2">
      <TappyIcon size={size} />
      <span className={`font-logo leading-none ${tekstClassName}`} style={{ fontSize: size * 0.85 }}>
        Tappy
      </span>
    </span>
  );
}
