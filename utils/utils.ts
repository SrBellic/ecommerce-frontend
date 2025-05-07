export function Capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
} // Capitaliza la primera letra de una cadena

export function maxDescriptionLength(description: string, length: number) {
	if (!description) {
		return 'No hay descripción disponible.';
	}
	return description.length > length
		? description.slice(0, length) + '...'
		: description;
} // Longitud máxima de la descripción
