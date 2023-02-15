
const fs = require('fs');
const path = require('path');
const jsonFile = path.join(process.cwd(), 'dataAccess/data', 'summaryData.json');

const getLatest = async (days) => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile)).days.slice(0, days);

	return parsed;
}

const findAll = async () => {
    const parsed = JSON.parse(fs.readFileSync(jsonFile)).days.slice(0, 10);

	return parsed;
}


// PROD
exports.getLatest = getLatest;
exports.findAll = findAll;