import express from 'express';

var router = express.Router();

import { router as routerFromAssArray } from './AssArray/routes.js';

router.use('/AsArray', routerFromAssArray);

export { router };