export const getGenresListEach = (index, length, name) =>
	index + 1 === length ? name : name + ', '
