var mongoose = require('mongoose');

module.exports = mongoose.model('Superhero', {
	nombreFicticio: string;
	nombreOriginal: string; //o identidadSecreta
	aliados: string;
	habilidades: string;
	superpoder: string;
	origen {
		type: string;
		enum: ['No humano', 'Natural', 'Experimento científico', 'Tecnología/Artefactos', 'Traumas'];
	};
	editorial {
		type: string;
		enum: ['Marvel', 'DC', 'Otros'];
	};
})