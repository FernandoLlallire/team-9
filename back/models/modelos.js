

var postulado = new Postulado({
	id:         { type: Number},
	nombre: 	{ type: String },
	apellido: 	{ type: String },
	edad: 		{ type: Number },
	campo:   	{ type: String },
    provincia: 	{ type: String },
	motivoPost:	{ type: String },
	extra:  	{ type: String },
	foto:    	{ type: String },
    video:   	{ type: String },
	audio: 		{ type: String},
	mail:  	    { type: String },
    mailTercero: { type: String},
    telefono:   { type: String},
    telefonoTercero: { type: String},	
});

var aceptado = new Aceptado({
	id:           { type: Number },
    id_postulado: { type: Number },
    fecha:  	  { type: String },
	motivo:       { type: String },
	});
	
var rechazado = new Rechazado ({
	id:           { type: Number },
    id_postulado: { type: Number },
   	motivo:       { type: String },
	});
		
module.exports = mongoose.model('postulado',Postulado);
module.exports = mongoose.model('aceptado',Aceptado);
module.exports = mongoose.model('rechazado',Rechazado);
