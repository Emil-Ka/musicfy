export const shortWord = (word: string, len: number): string => {
	if (word.length <= len) {
		return word;
	}

	return `${word.slice(0, len + 1)}...`;
};
