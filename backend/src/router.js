const express = require('express');

const lembreteController = require('./controllers/lembreteController');
const lembreteMiddieware = require('./middiewares/lembreteMiddieware');
const usuarioController = require('./controllers/usuarioController');
const usuarioMiddieware = require('./middiewares/usuarioMiddieware');

const router = express.Router();


router.get('/lembretes', lembreteController.getAll);
router.post('/criarlembrete', lembreteMiddieware.validateName, lembreteController.criarLembrete);
router.delete('/lembrete/:id', lembreteController.deletaLembrete);
router.put('/lembrete/:id',
    lembreteMiddieware.validateName,
    lembreteController.updateLembrete,
    )


router.get('/usuarios', usuarioController.getAll);
router.post('/criarUsuario', usuarioMiddieware.validateNomeUsuario, usuarioMiddieware.validateEmail, usuarioMiddieware.validateSenha, usuarioController.criarUsuario);
router.delete('/usuario/:id', usuarioController.deletaUsuario);
router.put('/usuario/:id',
    usuarioMiddieware.validateNomeUsuario,
    usuarioController.updateUsuario,
    )
    
module.exports = router;