const express = require('express');
const route = express.Router();
const user = require('../controller/user.controller');

//
route.post('/', user.register);

//
route.get('/', user.getAll);

//
route.get('/:username', user.getUser);

module.exports = route;
