import { useState, useEffect } from "preact/hooks"
import { Section } from "$/utils/docs.ts";
import MobileNavigation from "$/islands/MobileNavigation.tsx"

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
    <header class={"sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8"
    + isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"}>
      <div className="mr-6 lg:hidden">
        <MobileNavigation navigation={props.navigation} />
      </div>
      {/* <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logomark className="h-9 w-9 lg:hidden" />
          <Logo className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
      </div> */}
    </header>
  )
}

export default Header