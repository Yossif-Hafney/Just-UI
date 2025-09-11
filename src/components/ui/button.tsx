import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        facebook:
          "bg-[#1877f2] text-white font-bold rounded-md border-none hover:bg-[#166fe5] active:bg-[#1464d0] focus:outline-none transition-all duration-100 ease-in-out",
        "facebook-green":
          "bg-[#42b883] text-white font-bold rounded-md border-none hover:bg-[#369870] active:bg-[#2d7a5d] focus:outline-none transition-all duration-100 ease-in-out",
        "facebook-gray":
          "bg-[#e4e6ea] text-[#1c1e21] font-semibold rounded-md border-none hover:bg-[#dddfe2] active:bg-[#d4d6da] focus:outline-none transition-all duration-100 ease-in-out",
        "facebook-light-gray":
          "bg-[#f0f2f5] text-[#1c1e21] font-medium rounded-md border-none hover:bg-[#e4e6ea] active:bg-[#dddfe2] focus:outline-none transition-all duration-100 ease-in-out",
        "facebook-login":
          "bg-[#0866ff] text-white font-bold rounded-lg border-none hover:bg-[#0653d3] active:bg-[#0653d3] focus:outline-none transition-all duration-100 ease-in-out w-[364px] h-12 text-[20px]",
        "facebook-register":
          "bg-[#42b72a] text-white font-bold rounded-lg border-none hover:bg-[#36a420] active:bg-[#36a420] focus:outline-none transition-all duration-100 ease-in-out w-full h-12 text-[17px]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6 text-lg",
        "facebook-sm": "h-8 px-3 py-1 text-sm font-semibold",
        "facebook-md": "h-9 px-4 py-2 text-[15px] font-semibold",
        "facebook-lg": "h-10 px-6 py-2 text-[17px] font-bold",
        "facebook-login": "h-12 px-6 py-3 text-[20px] font-bold w-full",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
