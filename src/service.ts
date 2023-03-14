export const service = {
	get: async (query: string) => {
		return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
			.then((response) => response.json())
			.then((data) => data[0]);
	},
};
