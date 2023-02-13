const jsonFile = "dataAccess/data/plantsData.json";
const fs = require('fs');


const findOne = async (id) => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile));

	// Buscar la planta con el "id" especificado
	return parsed.plants.find(plant => plant.id == id);
}

const findAll = async () => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile));

	// Buscar la planta con el "id" especificado
	return parsed.plants;
}


// PROD
exports.findAll = findAll;
exports.findOne = findOne;