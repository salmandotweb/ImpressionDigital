// homepage animations
export const parent = {
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const children = {
	hidden: {
		opacity: 0,
		scale: 0.75,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			type: "spring",
		},
	},
};

export const scaleOut = {
	hidden: {
		opacity: 0,
		scale: 0.75,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};
