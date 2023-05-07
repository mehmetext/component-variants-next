//React
import {ReactNode} from "react"

//Utils
import {cn} from "@/utils/cn"

//cva
import {cva} from "class-variance-authority"
import {VariantProps} from "class-variance-authority"

//Props
interface Props extends VariantProps<typeof buttonVariants> {
  children?: ReactNode
  className?: string
}

const buttonVariants = cva("text-white flex items-center justify-center", {
  variants: {
    color: {
      blue: "bg-blue-500 hover:bg-blue-600",
      red: "bg-red-500 hover:bg-red-600",
      green: "bg-green-500 hover:bg-green-600"
    },
    size: {
      sm: "px-2 py-1 rounded text-sm gap-1",
      md: "px-4 py-2 rounded-md text-base gap-2",
      lg: "px-6 py-4 rounded-lg text-xl gap-4"
    }
  },
  defaultVariants: {
    color: "blue",
    size: "md"
  }
})

export default function Button({children, className, color, size}: Props) {
  return <button className={cn(buttonVariants({color: color, size: size}), className)}>{children}</button>
}
