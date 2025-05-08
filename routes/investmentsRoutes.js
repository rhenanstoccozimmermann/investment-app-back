const express = require('express');

const buyAssetController = require('../controllers/buyAsset');
const sellAssetController = require('../controllers/sellAsset');

const validateJWT = require('../middlewares/validateJWT');

const investmentsRoutes = express.Router();


investmentsRoutes.post('/buy', validateJWT, buyAssetController.buyAsset);

investmentsRoutes.post('/sell', validateJWT, sellAssetController.sellAsset);

module.exports = investmentsRoutes;
