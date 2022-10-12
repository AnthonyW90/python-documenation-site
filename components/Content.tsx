
import { ComponentChildren } from "preact"

export function Content(props: {className?: string, children: ComponentChildren }) {
  return (
    <div class='w-full dark:text-slate-400'> 
      {props.children}
      </div>
  )
}