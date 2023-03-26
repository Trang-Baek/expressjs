const express = require('express');
const app = express();
const router = express.Router();

const newsController = require('../app/controllers/NewController');
// newsController.index()

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
