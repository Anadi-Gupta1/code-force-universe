
import React from 'react';
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  onClick?: () => void;
  asLink?: boolean;
  href?: string;
  target?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glassEffect = false,
  onClick,
  asLink = false,
  href,
  target,
}) => {
  const baseClasses = "rounded-xl overflow-hidden";
  
  const classes = cn(
    baseClasses,
    glassEffect ? "glass-card" : "bg-card border border-border shadow-lg",
    hoverEffect && "transition-all duration-300 hover:shadow-glow hover:-translate-y-1",
    onClick && "cursor-pointer",
    className
  );

  const content = <div className={classes}>{children}</div>;

  if (asLink) {
    return (
      <a href={href} target={target} className="block">
        {content}
      </a>
    );
  }

  if (onClick) {
    return <div onClick={onClick}>{content}</div>;
  }

  return content;
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <h3 className={cn("text-xl font-bold", className)}>{children}</h3>;
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <p className={cn("text-muted-foreground", className)}>{children}</p>;
};

export default Card;
