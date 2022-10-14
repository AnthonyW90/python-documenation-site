import { useState, useEffect } from "preact/hooks";
import Navigation from "$/components/Navigation.tsx";
import { Section } from "../utils/docs.ts";

function MenuIcon(props) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="2"
			strokeLinecap="round"
			{...props}
		>
			<path d="M4 7h16M4 12h16M4 17h16" />
		</svg>
	);
}

function CloseIcon(props) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="2"
			strokeLinecap="round"
			{...props}
		>
			<path d="M5 5l14 14M19 5l-14 14" />
		</svg>
	);
}

export default function MobileNavigation(props: {
	navigation: Record<string, Section>;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className={isOpen ? "hidden " : "block " + "mx-4 sm:mx-5"}
				aria-label="Open navigation"
			>
				<MenuIcon className="h-6 w-6" style={{ stroke: "#64748b" }} />
			</button>
			<div
				class={`fixed inset-0 z-50 items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden ${isOpen ? "flex" : "hidden"}` 
				}
				style={{backdropFilter: "blur(8px)"}}
			>
				<div
					class={
						"min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6"
					}
				>
					<div class="flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close navigation"
						>
							<CloseIcon className="h-6 w-6" style={{ stroke: "#64748b" }} />
						</button>
					</div>
					<Navigation navigation={props.navigation} />
				</div>
			</div>
		</>
	);
}
