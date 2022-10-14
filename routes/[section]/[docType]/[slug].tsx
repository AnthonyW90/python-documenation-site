import { Head } from "$fresh/runtime.ts";
import { PageProps, Handlers } from "$fresh/server.ts";
import { frontMatter, gfm } from "$/utils/markdown.ts";
import Layout from "$/components/Layout.tsx";
import navigation from "$/utils/navigation.ts";
import { Section } from "$/utils/docs.ts";

export const handler: Handlers = {
	async GET(req, ctx) {
		const { section, docType, slug } = ctx.params;
		const path = section + "/" + docType + "/" + slug;
		const url = new URL(`../../../docs/${path}.md`, import.meta.url);
		const fileContent = await Deno.readTextFile(url);
		const { content, data } = frontMatter(fileContent) as {
			content: string;
			data: Record<string, string>;
		};
		const page = { markdown: content, data: data ?? {} };
		const resp = await ctx.render({ page });
		return resp;
	},
};

interface Page {
	markdown: string;
	data: Record<string, string>;
}

interface Data {
	page: Page;
}

export default (props: PageProps<Data>) => {
  const html = gfm.render(props.data.page.markdown)
	const nav: Record<string, Section> = {}
	// @ts-ignore TODO: Fix navigation key type
	const section: Section = navigation[props.params.section]
	nav[props.params.section] = section

	return (
		<body class="bg-white dark:bg-slate-900">
			<Head>
				<title>{props.data.page.data.title} | {section.title}</title>
				<link rel="stylesheet" href={`../markdown.css`} />
			</Head>
			<Layout navigation={nav}>
        <div class={"" + "markdown-body"} dangerouslySetInnerHTML={{ __html: html }}></div>
      </Layout>
		</body>
	);
};
