import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import navigation from "$/utils/navigation.ts"
import SubjectCard from "$/components/SubjectCard.tsx";
import { PythonIcon, CodeIcon, HtmlIcon, JavascriptIcon, CapstoneIcon } from "$/components/Icons.tsx";

const themeScript = `
  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`

const subjects = [
  { title: "Introduction", description: "", href: "/intro/docs/course-overview", icon: CodeIcon},
  { title: "Python", description: "", href: "/python/docs/overview", icon: PythonIcon},
  { title: "HTML/CSS", description: "", href: "/htmlcss/docs/html-overview", icon: HtmlIcon},
  { title: "Django", description: "", href: "/django/docs/overview", icon: PythonIcon},
  { title: "JavaScript", description: "", href: "/javascript/docs/overview", icon: JavascriptIcon},
  { title: "Capstone and Beyond", description: "", href: "/capstone/docs/capstone-proposal", icon: CapstoneIcon},
]

export default function App() {
  return (
    <body class="bg-white dark:bg-slate-900">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <title>Python Fullstack Documentation</title>
      </Head>
      <Layout navigation={navigation}>
        <div class="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {subjects.map(subject => <SubjectCard title={subject.title} description={subject.description} href={subject.href} icon={subject.icon}/>)}
        </div>
      </Layout>
    </body>
  );
}
