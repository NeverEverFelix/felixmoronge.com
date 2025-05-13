// src/components/ContentCard.tsx
import '../styles/ContentCard.css';

type Props = {
  children?: React.ReactNode;
  imageUrl?: string;
  variant?: 'default' | 'plain';
};

export default function ContentCard({ children,imageUrl,variant = 'default' }: Props){
  return (
    <div className={`content-card fade-in-up ${variant === 'plain' ? 'plain-card' : ''}`}>
      {children ? children : imageUrl && <img src={imageUrl} alt="card" className="card-image" />}
    </div>
  );
}
