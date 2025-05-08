const express = require('express');

const getAssetsByAccountIdController = require('../controllers/getAssetsByAccountId');
const getAssetByAssetIdController = require('../controllers/getAssetByAssetId');
const getAllAssetsController = require('../controllers/getAllAssets');

const validateJWT = require('../middlewares/validateJWT');

const assetsRoutes = express.Router();


assetsRoutes.get('/', validateJWT, getAllAssetsController.getAllAssets);

assetsRoutes.get('/account/:id', validateJWT, getAssetsByAccountIdController.getAssetsByAccountId);

assetsRoutes.get('/asset/:id', validateJWT, getAssetByAssetIdController.getAssetByAssetId);

module.exports = assetsRoutes;
