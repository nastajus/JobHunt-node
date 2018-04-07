const express = require('express');
//const db      = require('../../models');
const base64Img = require('base64-img');

const router = express.Router();

router.get('/', (req, res) => {

	const mock = require ('../../data/mock');

	mock.companies.forEach( (entry, index) => {
		let name = index + "_" + entry.name;
		base64Img.img(entry.logo, './public/mock', name, function (err, filepath) {});
		entry.convertedLogoPath = '/mock/' + name + mock.getExtensionBase64(entry.logo);
	});

	res.render('companiesPage.ejs', { companies: mock.companies });


	/*
	db.sequelize.models.Companies.findAll({
		attributes: ['compId', 'name', 'logo', 'address']
		//TODO: TBD consider removing such explicit column name duplication, replace with *.
	}).then(function(companies) {
		res.render('companiesPage.ejs', { companies: companies })
	}).catch(function(err) {
		console.error(err);
	});
	*/

});

module.exports = router;