import React from 'react';

// Definición de las propiedades (props) que acepta el componente Slider
interface SliderProps {
	value: [number, number]; // Valores actuales del rango (mínimo y máximo)
	min?: number; // Valor mínimo permitido en el slider
	max?: number; // Valor máximo permitido en el slider
	step?: number; // Incremento entre valores del slider
	onValueChange: (value: [number, number]) => void; // Función callback para manejar cambios en los valores
}

// Componente funcional Slider
export const Slider: React.FC<SliderProps> = ({
	value, // Valores actuales del rango
	min = 0, // Valor mínimo por defecto
	max = 100, // Valor máximo por defecto
	step = 1, // Incremento por defecto
	onValueChange, // Función para manejar cambios en los valores
}) => {
	// Función para manejar los cambios en los inputs del slider
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>, // Evento del input
		index: number // Índice del valor que se está modificando (0 para mínimo, 1 para máximo)
	) => {
		// Crear una copia del array de valores actuales
		const newValue = [...value] as [number, number];
		// Actualizar el valor correspondiente (mínimo o máximo)
		newValue[index] = Number(e.target.value);
		// Llamar a la función callback con los nuevos valores
		onValueChange(newValue);
	};

	return (
		<div className='flex items-center space-x-2'>
			{/* Input para el valor mínimo del rango */}
			<input
				type='range' // Tipo de input: slider
				min={min} // Valor mínimo permitido
				max={max} // Valor máximo permitido
				step={step} // Incremento entre valores
				value={value[0]} // Valor actual del mínimo
				onChange={(e) => handleChange(e, 0)} // Manejar cambios en el valor mínimo
				className='slider' // Clase CSS para estilos
			/>
			{/* Input para el valor máximo del rango */}
			<input
				type='range' // Tipo de input: slider
				min={min} // Valor mínimo permitido
				max={max} // Valor máximo permitido
				step={step} // Incremento entre valores
				value={value[1]} // Valor actual del máximo
				onChange={(e) => handleChange(e, 1)} // Manejar cambios en el valor máximo
				className='slider' // Clase CSS para estilos
			/>
		</div>
	);
};
