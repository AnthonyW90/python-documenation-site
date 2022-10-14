import { ComponentChildren } from "preact";

export default function SubjectCard(
  props: {
    title: string,
    description: string,
    href: string,
    icon: ComponentChildren
  }) {
    const { title, description, href, icon: Icon } = props
    return (
      <div class="group relative rounded-xl border border-slate-200 dark:border-slate-800">
        <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100" />
        <div class="relative flex items-center overflow-hidden rounded-xl p-6" >
          <Icon />
          <h2 class="mt-4 mx-4 font-display text-base text-slate-900 dark:text-white">
            <a href={href}>
              <span class="absolute -inset-px rounded-xl" />
              {title}
            </a>
          </h2>
          {/* <p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
            {description}
          </p> */}
        </div>
      </div>
    )
}