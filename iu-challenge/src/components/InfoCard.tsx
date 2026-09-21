// InfoCard.tsx
import React from "react";




interface InfoCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  image?: string | null;
  imageAlt?: string;
  backgroundColor?: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  children,
  image = null,
  imageAlt = "",
  backgroundColor = "#ffffff",
  className = "",
}) => {
  return (
    <section
      className={`info-card ${image ? "" : "info-card--no-image"} ${className}`.trim()}
      style={{ backgroundColor }}
    >
      {image && <img src={image} alt={imageAlt} className="info-card-image" />}

      <div className="info-card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
};

export default InfoCard;