const lembreteModel = require('../models/lembreteModel');

const getAll = async (request, response) => {

    const lembrete =  await lembreteModel.getAll();
    
    return response.status(200).json(lembrete);
};

const criarLembrete = async (request, response) => {

    const criadaLembrete = await lembreteModel.criarLembrete(request.body);
    return response.status(201).json(criadaLembrete);

};

const deletaLembrete = async (request, response) => {
    const { id } = request.params;
  
    await lembreteModel.deletaLembrete(id);
    return response.status(204).json();
};
  
const updateLembrete = async (request, response) => {
    const { id } = request.params;
  
    await lembreteModel.updateLembrete(id, request.body);
    return response.status(204).json();
};
  

module.exports = {
    getAll,
    criarLembrete,
    deletaLembrete,
    updateLembrete,
};