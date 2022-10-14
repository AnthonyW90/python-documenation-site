import { useState, useEffect } from "preact/hooks"
import { Section } from "$/utils/docs.ts";
import MobileNavigation from "$/islands/MobileNavigation.tsx"
import ThemeSelector from "$/islands/ThemeSelector.tsx";
import { HomeIcon } from "$/components/Icons.tsx";

const Header = (props: { navigation: Record<string, Section> }) => {

  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(globalThis.scrollY > 0)
    }
    onScroll()
    globalThis.addEventListener("scroll", onScroll, {passive: true})
    return () => {
      globalThis.removeEventListener("scroll", onScroll)
    }
  }, [])
  
  return (
    <header class={`sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 ${isScrolled ? "dark:bg-slate-900 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900" : "dark:bg-transparent"}`}>
      <div class="hidden lg:flex items-center">
          <a href="/" class="text-slate-900 flex gap-2 dark:text-white hover:text-sky-500 dark:hover:text-sky-300 sticky top-10">
						<HomeIcon />
						Home
					</a>
      </div>
      <div className="mr-6 lg:hidden">
        <MobileNavigation navigation={props.navigation} />
      </div>
      <div class="mr-6 sm:mr-8 md:mr-0">
      <div class="flex lg:hidden items-center">
          <a href="/" class="text-slate-900 flex gap-2 dark:text-white hover:text-sky-500 dark:hover:text-sky-300 sticky top-10">
						<HomeIcon />
						Home
					</a>
      </div>
      </div>
      <div class="flex justify-end gap-6 sm:gap-8 md:flex-grow">
        {/* <ThemeSelector class="z-10"/> */}
      </div>
    </header>
  )
}

export default Header