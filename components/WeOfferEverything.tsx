import {
	Bars3BottomLeftIcon,
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

export default function WeOfferEverything() {
	const style =
		"w-10 h-10 bg-teal-400 dark:bg-teal-600 text-zinc-900 dark:text-zinc-50 p-1 rounded-lg";

	return (
		<div className="mx-auto w-fit sm:w-full grid gap-2 sm:gap-6 grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 justify-items-center">
			<CodeBracketSquareIcon className={style} />
			<PencilIcon className={style} />
			<PhotoIcon className={style} />
			<ChatBubbleLeftEllipsisIcon className={style} />
			<CreditCardIcon className={style} />
			<PresentationChartLineIcon className={style} />
			<GlobeAltIcon className={style} />
			<CloudIcon className={style} />
			<LockClosedIcon className={style} />
			<CircleStackIcon className={style} />
			<PencilSquareIcon className={style} />
			<Cog8ToothIcon className={style} />
		</div>
	);
}
