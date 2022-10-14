import navigation from "$/utils/navigation.ts";
import { PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Section } from "$/utils/docs.ts";

const DocumentIcon = (props: { class?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={"w-6 h-6" + props.class}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			/>
		</svg>
	);
};

const LabIcon = (props: { class?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={"w-6 h-6" + props.class}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
			/>
		</svg>
	);
};

const MobIcon = (props: { class?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
			/>
		</svg>
	);
};

const PracticeIcon = (props: { class?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
			/>
		</svg>
	);
};
export default (props: { navigation: Record<string, Section>, className?: string }) => {
	const { navigation } = props;
	return (
		<>
		<nav class="text-base font-sans lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
			<ul role="list" class="space-y-9">
				{Object.keys(navigation).map((subject) => (
					<li key={subject} class="relative">
						<h2 class="font-display font-medium lg:text-lg text-slate-900 dark:text-white border-b-2">
							{navigation[subject].title}
						</h2>
						<ul role="list" class="mt-2 space-y-2 lg:mt-4 lg:space-y-4">
							{Object.keys(navigation[subject].pages).map((docType) => (
								<li key={docType} class="relative">
									<h3 class="font-display font-medium lg:text-sm text-slate-900 dark:text-white">
										{docType.toUpperCase()}
									</h3>
									<ul
										role="list"
										class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
									>
										{/* @ts-ignore */}
										{navigation[subject].pages[docType].map((link) => (
											<li key={link.title} class="relative">
												<a
													href={navigation[subject].pathPrefix + docType + "/" + link.href}
													class="block items-center w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
												>
													<p class="flex items-center gap-3">
														{docType === "docs" && (
															<DocumentIcon class="text-base lg:text-sm flex-shrink-0" />
														)}
														{docType === "labs" && (
															<LabIcon class="text-base lg:text-sm flex-shrink-0" />
														)}
														{docType === "mob" && (
															<MobIcon class="text-base lg:text-sm flex-shrink-0" />
														)}
														{docType === "practice" && (
															<PracticeIcon class="text-base lg:text-sm flex-shrink-0" />
														)}
														{link.title}
													</p>
												</a>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
		</>
	);
};

/*
{props.navigation.map((section) => (
					<li key={section.title}>
						<h2 class="font-display font-medium text-slate-900 dark:text-white">
							{section.title}
						</h2>
						<ul
							role="list"
							class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
						>
							{section.links.map((link) => (
								<li key={link.href} class="relative">
									<a
										href={section.pathPrefix + link.href}
										class="block items-center w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
									>
                    <p class="flex items-center gap-3">
                    {link.type === "doc" ? <DocumentIcon class="text-base lg:text-sm flex-shrink-0"/> : <LabIcon class="text-base lg:text-sm flex-shrink-0"/>}
										{link.title}
                    </p>
									</a>
								</li>
							))}
						</ul>
					</li>
				))}
*/
