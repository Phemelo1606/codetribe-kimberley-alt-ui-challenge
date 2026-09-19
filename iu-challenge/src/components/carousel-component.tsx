import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
  /** Pastel card background, e.g. '#d9cbe6' */
  bgColor?: string;
  /** Price pill background, e.g. '#8a3fc2' */
  pillColor?: string;
}

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_BG = ['#e8e2cb', '#d8c9e4', '#e9cfb6', '#b8dcdc'];
const DEFAULT_PILL = ['#e6b71c', '#8a3fc2', '#e8712a', '#e03a4a'];

/** Simple can drawn in SVG, used when an image is missing or fails to load. */
function CanPlaceholder({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 80 150" width="62%" role="img" aria-label="Product can">
      <rect x="8" y="10" width="64" height="130" rx="10" fill="#f3f1ea" />
      <rect x="8" y="10" width="64" height="16" rx="8" fill="#c9c9c4" />
      <rect x="8" y="124" width="64" height="16" rx="8" fill="#c9c9c4" />
      <circle cx="40" cy="76" r="18" fill={color} />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const bg = product.bgColor ?? DEFAULT_BG[index % DEFAULT_BG.length];
  const pill = product.pillColor ?? DEFAULT_PILL[index % DEFAULT_PILL.length];
  const showImage = product.imageUrl && !imageFailed;

  return (
    <article className="pc-card" style={{ background: bg }}>
      <div className="pc-image-wrap">
        {showImage ? (
          <img
            className="pc-image"
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <CanPlaceholder color={pill} />
        )}
      </div>
      <h3 className="pc-name">{product.name}</h3>
      <span className="pc-pill" style={{ background: pill }}>
        {product.price}
      </span>
    </article>
  );
}

export function ProductCarousel({ products, title, subtitle }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows, products.length]);

  // Scroll by one card (card width + gap)
  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap) });
  };

  return (
    <section className="pc-section">
      {title && <h2 className="pc-heading">{title}</h2>}
      {subtitle && <p className="pc-subtitle">{subtitle}</p>}

      <div className="pc-frame">
        <button
          type="button"
          className="pc-arrow pc-arrow--prev"
          aria-label="Previous products"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="pc-track" ref={trackRef} onScroll={updateArrows}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <button
          type="button"
          className="pc-arrow pc-arrow--next"
          aria-label="Next products"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}