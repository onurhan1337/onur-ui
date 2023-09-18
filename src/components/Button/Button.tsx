import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva("inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
{
  variants: {
    variant: {
      default: "bg-zinc-200 text-zinc-600 hover:bg-primary/90",
      primary: "bg-blue-600 text-white hover:bg-blue-600/90",
      outline: "bg-transparent border border-zinc-200 text-zinc-600 hover:bg-zinc-200/90",
      ghost: "bg-transparent text-zinc-600 hover:bg-zinc-200/90",
      link: "bg-transparent text-zinc-600 hover:underline underline-zinc-900 underline-offset-2",
      destructive: "bg-red-400 text-red-900 hover:bg-red-400/90",
      success: "bg-green-400 text-green-900 hover:bg-green-400/90",
      warning: "bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      md: "h-10 rounded-md px-4",
      lg: "h-11 rounded-md px-8",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ variant, size, rounded, asChild = false, ...props }, ref) { 
  const Comp = asChild ? Slot : "button";

  return (
    <Comp ref={ref} className={buttonVariants({ variant, size, rounded })} {...props} />
  );
});

Button.displayName = "Button";

export { Button };
export type { buttonVariants };