import {
	ChatBubbleLeftEllipsisIcon,
	CircleStackIcon,
	CloudIcon,
	CodeBracketSquareIcon,
	Cog8ToothIcon,
	CreditCardIcon,
	GlobeAltIcon,
	LockClosedIcon,
	PencilIcon,
	PencilSquareIcon,
	PhotoIcon,
	PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

function Background() {
	const style = "w-8 h-8 sm:w-12 sm:h-12 text-zinc-700 dark:text-zinc-400 opacity-50 m-auto";

	return (
		<div className="min-h-screen w-full grid grid-cols-4 grid-flow-column absolute">
			<CodeBracketSquareIcon className={style} />
			<div></div>
			<PencilIcon className={style} />
			<div></div>
			<div></div>
			<PhotoIcon className={style} />
			<div></div>
			<ChatBubbleLeftEllipsisIcon className={style} />
			<CreditCardIcon className={style} />
			<div></div>
			<PresentationChartLineIcon className={style} />
			<div></div>
			<div></div>
			<GlobeAltIcon className={style} />
			<div></div>
			<CloudIcon className={style} />
			<PencilSquareIcon className={style} />
			<div></div>
			<LockClosedIcon className={style} />
			<div></div>
			<div></div>
			<CircleStackIcon className={style} />
			<div></div>
			<Cog8ToothIcon className={style} />
		</div>
	);
}

export default function WeOfferEverything() {
	return (
		<div className="relative min-h-screen flex flex-col justify-center items-center">
			<Background />
			<div className="w-10/12 max-w-lg text-xl xs:text-3xl xs:leading-loose font-bold font-title text-teal-950 dark:text-teal-50 bg-teal-600 dark:bg-teal-600 border-teal-500 dark:border-teal-900 rounded-2xl shadow backdrop-blur-sm bg-opacity-60 dark:bg-opacity-40 px-8 py-2 mb-4 border translate-x-4">
				<h2>Vi erbjuder allt</h2>
			</div>
			<div className="w-10/12 max-w-lg xs:text-xl xs:leading-loose text-teal-950 dark:text-teal-50 bg-teal-400 dark:bg-teal-400 border-teal-100 dark:border-teal-700 rounded-2xl shadow backdrop-blur-sm bg-opacity-50 dark:bg-opacity-40 p-8 border -translate-x-2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit odit rerum
				deleniti reprehenderit pariatur, a velit rem voluptatibus. Amet optio numquam
				commodi voluptatem, beatae laboriosam a. Neque, officia. Praesentium, reiciendis.
			</div>
		</div>
	);
}
