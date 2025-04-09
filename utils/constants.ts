export const ERROR_MESSAGE = (err: string, restr: string) => {
	return `${err} contiene datos inválidos. ${restr}`;
};

export const TEXT_RESTRICTION = {
	NUMERIC: /\d/,
	ALPHABETIC: /[a-zA-Z]/,
	SQL: /[`"]/,
};
