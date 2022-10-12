import { ComponentChildren } from "preact";
import { Content } from "./Content.tsx";
import { Section } from "../utils/docs.ts";
import Navigation from "./Navigation.tsx";

const HomeIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="w-5 h-5"
		>
			<path
				fillRule="evenodd"
				d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const Layout = (props: {
	children?: ComponentChildren;
	navigation: Record<string, Section>;
}) => {
	const { navigation } = props;
	const isRoot = Object.keys(navigation).length > 1;
	return (
		<div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
			<div className="hidden lg:relative lg:block lg:flex-none">
				<div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
				{!isRoot && (
					<a href="/" class="text-slate-900 mt-8 flex gap-2 dark:text-white hover:text-sky-500 dark:hover:text-sky-300 sticky top-10">
						<HomeIcon />
						Home
					</a>
				)}
				<div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
					<div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
					<div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
					<Navigation navigation={props.navigation} />
				</div>
			</div>
			<div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
				<article>
					<Content>{props.children}</Content>
				</article>
			</div>
		</div>
	);
};

export default Layout;
