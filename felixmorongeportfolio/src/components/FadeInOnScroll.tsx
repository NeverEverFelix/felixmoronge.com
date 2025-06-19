import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  text?: string; // ✅ Add this to support raw string word-by-word animation
  textMode?: boolean;
};

export default function FadeInOnScroll({ children, text, textMode = false }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  if (textMode && text) {
    const words = text.split(' ');

    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={child}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  const normalizedChildren = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {normalizedChildren.map((childNode, idx) => (
        <motion.div key={idx} variants={child}>
          {childNode}
        </motion.div>
      ))}
    </motion.div>
  );
}
