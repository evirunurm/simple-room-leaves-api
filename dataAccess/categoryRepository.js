
const fs = require('fs');
const path = require('path');
const jsonFile = path.join(process.cwd(), 'dataAccess/data', 'categoriesData.json');

const findOne = async (id) => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile));

	// Buscar la planta con el "id" especificado
	return parsed.categories.find(plant => plant.id == id);
}

const findAll = async () => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile));

	// Buscar la planta con el "id" especificado
	return parsed.categories;
}


// PROD
exports.findAll = findAll;
exports.findOne = findOne;