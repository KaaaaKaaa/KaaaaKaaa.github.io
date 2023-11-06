const conexao = require('./conexao');

const getAll = async () => {
    const lembrete =  await conexao.execute('SELECT * FROM lembrete');
    return lembrete;
};

const criarLembrete = async (lembrete) => {
    
    const {nome} = lembrete;
    const {descricao} = lembrete;

    const dateUTC = new Date(Date.now()).toUTCString();

    const criadaLembrete = await conexao.execute('insert into lembrete( create_time, nome, descricao) values ( ?, ?, ?)', [ dateUTC, nome, descricao]);
    return criadaLembrete;
};

const deletaLembrete = async (id) => {
    const [deletadoLembrete] = await conexao.execute('DELETE FROM lembrete WHERE id = ?', [id]);
    return deletadoLembrete;
};
  
const updateLembrete = async (id, lembrete) => {
    
    const {nome} = lembrete;
    const {descricao} = lembrete;

    const query = 'UPDATE lembrete SET  nome = ?, descricao = ? WHERE id = ?';
  
    const [updatedLembrete] = await conexao.execute(query, [ nome, descricao, id]);
    return updatedLembrete;
};

module.exports = {
    getAll,
    criarLembrete,
    deletaLembrete,
    updateLembrete,
};