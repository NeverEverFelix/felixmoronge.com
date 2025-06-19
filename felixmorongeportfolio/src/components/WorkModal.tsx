import { motion } from 'framer-motion';
import '../styles/WorkModal.css';

type WorkModalProps = {
  logo: string;
  company: string;
  role: string;
  description: string;
  onClose: () => void;
};

export default function WorkModal({ logo, company, role, description, onClose }: WorkModalProps) {
  return (
    <motion.div
      className="work-modal"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <motion.button
        className="modal-exit-button"
        onClick={onClose}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 250 }}
      >
        EXIT
      </motion.button>

      <motion.img
        src={logo}
        alt={`${company} logo`}
        className="modal-logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      />

      <motion.h2
        className="modal-company"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {company}
      </motion.h2>

      <motion.h3
        className="modal-role"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {role}
      </motion.h3>

      <motion.p
        className="modal-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
