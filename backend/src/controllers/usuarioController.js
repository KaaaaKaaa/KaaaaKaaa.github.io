const usuarioModel = require('../models/usuarioModel');

const getAll = async (request, response) => {

    const usuario =  await usuarioModel.getAll();
    
    return response.status(200).json(usuario);
};

const criarUsuario = async (request, response) => {

    const criadaUsuario = await usuarioModel.criarUsuario(request.body);
    return response.status(201).json(criadaUsuario);

};

const deletaUsuario = async (request, response) => {
    const { id } = request.params;
  
    await usuarioModel.deletaUsuario(id);
    return response.status(204).json();
};
  
const updateUsuario = async (request, response) => {
    const { id } = request.params;
  
    await usuarioModel.updateUsuario(id, request.body);
    return response.status(204).json();
};
  

module.exports = {
    getAll,
    criarUsuario,
    deletaUsuario,
    updateUsuario,
};