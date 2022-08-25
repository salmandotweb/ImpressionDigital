import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScrollAnimation = () => {
	const [ref, inView] = useInView({
		threshold: 0.3,
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start("show");
		}
		if (!inView) {
			animation.start("hide");
		}
	}, [inView, animation]);

	return [ref, animation];
};

export default useScrollAnimation;
