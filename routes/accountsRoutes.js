const express = require('express');

const depositIntoAccountController = require('../controllers/depositIntoAccount');
const withdrawFromAccountController = require('../controllers/withdrawFromAccount');
const getBalanceFromAccountController = require('../controllers/getBalanceFromAccount');
const createAccountController = require('../controllers/createAccount');
const removeAccountController = require('../controllers/removeAccount');
const updateAccountController = require('../controllers/updateAccount');

const validateJWT = require('../middlewares/validateJWT');

const accountsRoutes = express.Router();


accountsRoutes.post('/deposit', validateJWT, depositIntoAccountController.depositIntoAccount);

accountsRoutes.post('/withdraw', validateJWT, withdrawFromAccountController.withdrawFromAccount);

accountsRoutes.get('/account/:id', validateJWT, getBalanceFromAccountController.getBalanceFromAccount);

accountsRoutes.post('/account', createAccountController.createAccount);

accountsRoutes.delete('/account/:id', validateJWT, removeAccountController.removeAccount);

accountsRoutes.put('/account/:id', validateJWT, updateAccountController.updateAccount);

module.exports = accountsRoutes;
