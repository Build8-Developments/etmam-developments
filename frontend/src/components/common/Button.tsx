"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonComponentProps {
  label?: string;
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  openInNewTab?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export function Button({
  label,
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "left",
  openInNewTab = false,
  style,
  ariaLabel,
  ariaExpanded,
  ariaControls,
}: ButtonComponentProps) {
  const { language } = useLanguage();

  // Build class names using CSS button classes
  const baseClasses = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const iconClass = icon ? `btn-icon-${iconPosition}` : "";
  const loadingClass = loading ? "btn-loading" : "";
  const fullWidthClass = fullWidth ? "btn-block" : "";

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    iconClass,
    loadingClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}
      <span>{children || label}</span>
      {icon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        dir={language === "ar" ? "rtl" : "ltr"}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        {...(openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      style={style}
      dir={language === "ar" ? "rtl" : "ltr"}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {content}
    </button>
  );
}
