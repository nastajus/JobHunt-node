const express = require('express');
//const db      = require('../../models');
const base64Img = require('base64-img');

const router = express.Router();

router.get('/', (req, res) => {


	const mock = require ('../../data/mock');
	let foo = "";
	base64Img.img( mock.companies[1].logo, './public/mock', mock.companies[1].name, function(err, filepath) { foo = filepath;})
	console.log(foo);
	const logoPath = '/mock/' + mock.companies[1].name + '.png'; //todo remove very hacky tack-on extension
	res.render('companiesPage.ejs', { companies: mock.companies, convertedImage: logoPath });


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