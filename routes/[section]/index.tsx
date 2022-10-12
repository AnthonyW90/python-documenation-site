import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx"
import { Section } from "@/utils/docs.ts";
import navigation from "@/utils/navigation.ts";

const Document = (props: PageProps) => {
  const nav: Record<string, Section> = {}
	// @ts-ignore valid key is being used
	const section: Section = navigation[props.params.section]
	nav[props.params.section] = section
  return (
    <body class="bg-white dark:bg-slate-900">
    <Head>
      <title>{section.title}</title>
    </Head>
    <Layout navigation={nav}>
      <div>Hi there</div>
    </Layout>
  </body>
  )
}

export default Document