// src/components/ContentCard.tsx
import '../styles/ContentCard.css';

type Props = {
  imageUrl?: string;
};

export default function ContentCard({ imageUrl }: Props) {
  return (
    <div className="content-card fade-in-up">
      {imageUrl && <img src={imageUrl} className="card-image" />}
    </div>
  );
}
