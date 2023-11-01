const express = require('express');

const router = express.Router();

router.get('/lembretes', (req,res) => res.status(200).send('router funcionando'))

module.exports = router;