import { useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "~/lib/utils";

const AnimatedNavLink = ({
	index,
	option,
	closeDrawer,
}: {
	index: number;
	option: {
		label: string;
		path: string;
	};
	closeDrawer: () => void;
}) => {
	const router = useNavigate();
	const [isHovering, setIsHovering] = useState(false);
	const [activeOption, setActiveOption] = useState<string>();

	return (
		<div
			onClick={() => {
				router(option.path);
				closeDrawer();
			}}
			className="cursor-pointer"
			key={index}
		>
			<motion.p
				whileHover={{
					x: 20,
				}}
				onHoverEnd={() => setIsHovering(false)}
				onHoverStart={() => {
					setActiveOption(option.label);
					setIsHovering(true);
				}}
				transition={{
					type: "tween",
					duration: 0.3,
					ease: "easeOut",
				}}
				className={cn(
					"sm:text-sm text-xs cursor-pointer hover:text-lightBlue",
					isHovering && activeOption == option.label && "underline"
				)}
				key={index}
			>
				{option.label}
			</motion.p>
		</div>
	);
};

export default AnimatedNavLink;
