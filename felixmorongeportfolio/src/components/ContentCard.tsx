// src/components/ContentCard.tsx
import { motion } from 'framer-motion';
import '../styles/ContentCard.css';

type Props = {
  children?: React.ReactNode;
  imageUrl?: string;
  variant?: 'default' | 'plain' | 'image-only';
  title?: string;
  onClick?: () => void;
};

export default function ContentCard({ title, onClick, children, imageUrl, variant = 'default' }: Props) {
  return (
    <motion.div
      className={`content-card fade-in-up ${variant === 'plain' ? 'plain-card' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      whileHover={{ scale: 2.3 }}
      whileTap={{ scale: 0.50 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      {children ? (
        children
      ) : (
        <>
          {imageUrl && <img src={imageUrl} alt={title || 'card'} className="card-image" />}
          {variant !== 'image-only' && title && <h3>{title}</h3>}
        </>
      )}
      {title && <h3>{title}</h3>}
    </motion.div>
  );
}
