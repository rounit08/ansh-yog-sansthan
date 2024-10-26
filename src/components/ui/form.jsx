import * as React from "react"
import { cn } from "../../lib/utils"
// import { Label } from "../../components/ui/label"

const FormItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
))
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("", className)} {...props} ></p>
))
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} className="mt-2" {...props} />
))
FormControl.displayName = "FormControl"

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  if (!children) return null
  return (
    <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {children}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export { FormItem, FormLabel, FormControl, FormMessage }