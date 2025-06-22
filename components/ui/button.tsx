import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const getButtonStyles = (variant?: string, size?: string) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-glass text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 touch-manipulation";
  
  const variantStyles = {
    default: "glass-container text-foreground hover:bg-white/20 active:bg-white/30",
    primary: "bg-gradient-to-r from-neon-coral to-electric-azure text-white hover:from-neon-coral/90 hover:to-electric-azure/90 hover:scale-105 hover:shadow-xl active:scale-100 shadow-lg",
    secondary: "bg-gradient-azure-citrine text-deep-charcoal hover:scale-105 hover:shadow-lg active:scale-100",
    accent: "bg-gradient-citrine-coral text-deep-charcoal hover:scale-105 hover:shadow-lg active:scale-100",
    outline: "border-2 border-white/30 glass-container hover:bg-white/10 hover:border-white/50",
    ghost: "hover:bg-white/10 hover:text-accent-foreground active:bg-white/20",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: "h-11 px-6 py-3 text-sm",
    sm: "h-9 rounded-lg px-4 text-xs",
    lg: "h-12 rounded-xl px-8 text-base",
    icon: "h-11 w-11",
  };

  return cn(
    baseStyles,
    variantStyles[variant as keyof typeof variantStyles] || variantStyles.default,
    sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.default
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(getButtonStyles(variant, size), className || ""),
        ref,
        ...props,
      } as any);
    }

    return (
      <button
        className={cn(getButtonStyles(variant, size), className || "")}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"

export { Button } 