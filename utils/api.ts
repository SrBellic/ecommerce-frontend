import axios from 'axios';

// Crear una instancia de axios con la URL base de la API
// y el tipo de contenido JSON

const api = axios.create({
	baseURL: 'http://localhost:3001/api/', // URL base de la API
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export default api;
