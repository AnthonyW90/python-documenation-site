import navigation from "$/utils/navigation.ts";
import { PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Section } from "$/utils/docs.ts";
import {
	DocumentIcon,
	LabIcon,
	MobIcon,
	PracticeIcon,
} from "$/components/Icons.tsx";

export default (props: {
	navigation: Record<string, Section>;
	className?: string;
}) => {
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
														href={
															navigation[subject].pathPrefix +
															docType +
															"/" +
															link.href
														}
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
