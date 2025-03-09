
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  className,
  titleClassName,
  subtitleClassName,
  alignment = 'left'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn("mb-12", alignmentClasses[alignment], className)}>
      {subtitle && (
        <p className={cn("inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider uppercase rounded-full bg-secondary text-codeforce-blue", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <h2 className={cn("font-bold gradient-text", titleClassName)}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
