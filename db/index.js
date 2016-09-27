const Sequelize = require('sequelize');
const db = new Sequelize("postgres://localhost/acme_assignments_angular", {logging: false});

var Regions = db.define('regions', {
	zip: Sequelize.INTEGER
});

var SalesPeople = db.define('salesPeople', {
	name: Sequelize.STRING
});

var Assignments = db.define('assignments', {});

SalesPeople.hasMany(Assignments);
Regions.hasMany(Assignments);
Assignments.belongsTo(Regions);
Assignments.belongsTo(SalesPeople);

function sync(){
	return db.sync({});
}

module.exports = {
	models: {
	  Regions,
	  SalesPeople
	},
	db,
	sync
};