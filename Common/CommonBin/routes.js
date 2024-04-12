import express from 'express';

var router = express.Router();

import { router as routerFromFilesWithData } from './FilesWithData/routes.js';

router.use('/FilesWithData', routerFromFilesWithData);
router.use('/FileNames', routerFromFilesWithData);

export { router };