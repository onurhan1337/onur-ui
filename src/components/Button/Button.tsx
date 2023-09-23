import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva("inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
{
  variants: {
    variant: {
      default: "bg-zinc-100 text-zinc-600 hover:bg-zinc-100/90",
      primary: "bg-blue-600 text-zinc-200 hover:bg-blue-600/90",
      outline: "bg-transparent border border-zinc-200 text-zinc-600 hover:bg-zinc-100/90",
      ghost: "bg-transparent text-zinc-600 hover:bg-zinc-100/90",
      link: "bg-transparent text-zinc-600 hover:underline underline-zinc-900 underline-offset-2",
      destructive: "bg-red-400 text-red-900 hover:bg-red-400/90",
      success: "bg-green-400 text-green-900 hover:bg-green-400/90",
      warning: "bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90",
    },
    size: {
      default: "h-10 px-4 py-2 space-x-2",
      sm: "h-9 px-3 space-x-2",
      md: "h-10 px-4 space-x-2",
      lg: "h-11 px-8 space-x-2",
      icons: "h-10 w-10",
    },
    rounded: {
      default: "rounded-md",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = "default", size = "default", rounded = "default", asChild = false, ...props }, ref) { 
  const Comp = asChild ? Slot : "button";

  return (
    <Comp ref={ref} className={buttonVariants({ variant, size, className, rounded })} {...props} />
  );
});

Button.displayName = "Button";

export { Button };
export type { buttonVariants };