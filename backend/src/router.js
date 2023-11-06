const express = require('express');

const lembreteController = require('./controllers/lembreteController');
const lembreteMiddieware = require('./middiewares/lembreteMiddieware');

const router = express.Router();


router.get('/lembretes', lembreteController.getAll);
router.post('/criarlembrete', lembreteMiddieware.validateName, lembreteController.criarLembrete);
router.delete('/lembrete/:id', lembreteController.deletaLembrete);
router.put('/lembrete/:id',
    lembreteMiddieware.validateName,
    lembreteController.updateLembrete,
    )

module.exports = router;