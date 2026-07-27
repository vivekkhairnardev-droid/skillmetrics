import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-sm border border-transparent text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-brand-dark text-brand-yellow border border-brand-yellow/30 hover:bg-black hover:border-brand-yellow/60 font-extrabold shadow-2xs active:scale-[0.98]",
        outline: "border border-border bg-card text-foreground hover:bg-muted font-medium shadow-2xs active:scale-[0.98]",
        secondary: "bg-brand-yellow text-slate-950 hover:bg-brand-yellow/90 font-extrabold shadow-2xs active:scale-[0.98]",
        ghost: "hover:bg-muted hover:text-foreground active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold active:scale-[0.98]",
        link: "text-foreground underline-offset-4 hover:underline font-medium",
        dark: "border border-slate-700/80 bg-slate-950 text-brand-yellow hover:bg-slate-900 font-semibold shadow-2xs active:scale-[0.98]",
      },
      size: {
        default: "h-10 gap-2 px-5 text-sm rounded-sm",
        xs: "h-7 gap-1 px-2.5 text-xs rounded-sm [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-3.5 text-xs rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 px-7 text-base rounded-sm",
        xl: "h-14 gap-3 px-8 text-base font-extrabold rounded-sm",
        icon: "size-9 rounded-sm",
        "icon-xs": "size-7 rounded-sm [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-sm",
        "icon-lg": "size-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
