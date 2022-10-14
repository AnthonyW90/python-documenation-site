import { useEffect, useState } from "preact/hooks"
import { LightIcon, DarkIcon, SystemIcon } from "$/components/Icons.tsx"

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
]

export default function ThemeSelector(props) {
  const [selectedTheme, setSelectedTheme] = useState()

  useEffect(() => {
    if(selectedTheme) {
      // @ts-ignore TODO: Fix this later
      document.documentElement.setAttribute('data-theme', selectedTheme.value)
    } else {
      // @ts-ignore TODO: Fix this later
      setSelectedTheme(themes.find(theme => theme.value === document.documentElement.getAttribute('data-theme')))
    }
  }, [selectedTheme])
  
  useEffect(() => {
    const handler = () =>
    setSelectedTheme(
        // @ts-ignore TODO: Fix this later
        themes.find(
          (theme) => theme.value === (globalThis.localStorage.theme ?? 'system')
        )
      )

    globalThis.addEventListener('storage', handler)

    return () => globalThis.removeEventListener('storage', handler)
  }, [])

  return (
    <div class="relative">
      <label class="sr-only">Theme</label>
      <button class="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
        <LightIcon className="hidden h-4 w-4 [[data-theme=light]_&]:block" style={{fill: "#38bdf8"}}/>
        <DarkIcon className="hidden h-4 w-4 [[data-theme=dark]_&]:block" style={{fill: "#38bdf8"}}/>
        <LightIcon className="hidden h-4 w-4 [:not(.dark)[data-theme=system]_&]:block" style={{fill: "#94a3b8"}}/>
        <DarkIcon className="hidden h-4 w-4 [.dark[data-theme=system]_&]:block" style={{fill: "#94a3b8"}} />
      </button>
      <ul class="absolute top-full left-[-100%] mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {themes.map(theme => (
          <li class="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1" key={theme.value}>{theme.name}</li>
        ))}
      </ul>
    </div>
  )
}