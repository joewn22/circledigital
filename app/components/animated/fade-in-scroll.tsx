import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FadeInOnScroll({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 30 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	);
}
