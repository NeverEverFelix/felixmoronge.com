// src/components/ContentCard.tsx
import '../styles/ContentCard.css';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

type Props = {
  children?: React.ReactNode;
  imageUrl?: string;
  variant?: 'default' | 'plain' | 'image-only';
  title?: string;
  onClick?: () => void;
};

export default function ContentCard({ title, onClick, children, imageUrl, variant = 'default' }: Props) {
  return (
    <div
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
    </div>
  );
}