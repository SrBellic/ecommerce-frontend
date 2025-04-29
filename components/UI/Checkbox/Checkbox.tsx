import React from 'react';

// Definición de las propiedades (props) que acepta el componente Checkbox
interface CheckboxProps {
	id: string; // Identificador único para el checkbox
	label: string; // Etiqueta que se mostrará junto al checkbox
	checked: boolean; // Estado actual del checkbox (marcado o no)
	onChange: (checked: boolean) => void; // Función callback para manejar cambios en el estado
}

// Componente funcional Checkbox
export const Checkbox: React.FC<CheckboxProps> = ({
	id, // Identificador único
	label, // Etiqueta del checkbox
	checked, // Estado actual del checkbox
	onChange, // Función para manejar cambios en el estado
}) => {
	return (
		<div className='flex items-center'>
			{/* Input del tipo checkbox */}
			<input
				type='checkbox' // Tipo de input: checkbox
				id={id} // Identificador único para asociarlo con la etiqueta
				checked={checked} // Estado actual del checkbox
				onChange={(e) => onChange(e.target.checked)} // Manejar cambios en el estado
				className='checkbox' // Clase CSS para estilos
			/>
			{/* Etiqueta asociada al checkbox */}
			<label
				htmlFor={id} // Asocia la etiqueta con el input mediante el atributo "id"
				className='ml-2 text-sm text-gray-700 cursor-pointer' // Estilos y cursor para interacción
			>
				{label} {/* Texto de la etiqueta */}
			</label>
		</div>
	);
};
