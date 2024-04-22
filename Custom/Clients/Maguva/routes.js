import express from 'express';

var router = express.Router();

import { router as routerFromTransactions } from './Transactions/routes.js';

router.use('/Transactions', routerFromTransactions);

export { router };