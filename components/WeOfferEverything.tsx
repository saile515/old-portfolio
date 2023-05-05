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

export default function WeOfferEverything() {
	const style = "w-8 h-8 sm:w-12 sm:h-12 text-zinc-700 dark:text-zinc-400 opacity-50 m-auto";

	return (
		<div className="min-h-screen grid grid-cols-4 grid-flow-column">
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
			<LockClosedIcon className={style} />
			<div></div>
			<CircleStackIcon className={style} />
			<div></div>
			<div></div>
			<PencilSquareIcon className={style} />
			<div></div>
			<Cog8ToothIcon className={style} />
		</div>
	);
}
