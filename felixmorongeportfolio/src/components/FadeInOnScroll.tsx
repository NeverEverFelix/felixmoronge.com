import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function FadeInOnScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}
