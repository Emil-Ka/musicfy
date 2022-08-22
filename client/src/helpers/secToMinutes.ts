const addZero = (num: number): string => {
	if (num < 10) {
		return `0${num}`;
	}

	return `${num}`;
};

export const secToMinutes = (sec: number): string => {
	return `${addZero(Math.floor(sec / 60))}:${addZero(sec % 60)}`;
};
