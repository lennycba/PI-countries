const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountriesById = require('../Controllers/getCountriesById');
const getCountriesByName = require('../Controllers/getCountriesByName');
const postActivity = require('../Controllers/postActivities');
const getActivities = require('../Controllers/getActivities');



const router = Router();


/* router.get('/countries',getCountries); */
router.get('/countries',getCountriesByName);
router.get('/countries/:IdPais',getCountriesById);
router.post('/activities',postActivity);
router.get('/activities',getActivities);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
