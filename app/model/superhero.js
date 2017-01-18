var mongoose = require('mongoose');

module.exports = mongoose.model('Superhero', {
	nombreFicticio: string;
	nombreOriginal: string; //o identidadSecreta
	aliados: string;
	habilidades: string;
	superpoder: string;
	enemigos: string;
	conexiones: string;
	pareja: string;
	padre: string;
	madre: string;
	hijos: string;
	residencia: string;
	origen {
		type: string;
		enum: ['No humano', 'Natural', 'Experimento científico', 'Tecnología/Artefactos', 'Traumas'];
	};
	editorial {
		type: string;
		enum: ['Marvel', 'DC', 'Otros'];
	};
})