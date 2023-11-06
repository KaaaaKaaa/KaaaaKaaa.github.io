const conexao = require('./conexao');

const getAll = async () => {
    const usuario =  await conexao.execute('SELECT * FROM usuario');
    return usuario;
};

const criarUsuario = async (usuario) => {
    
    const {nomeUsuario} = usuario;
    const {email} = usuario;
    const {dataNascimento} = usuario;
    const {senha} = usuario;


    const criadaUsuario = await conexao.execute('insert into usuario(nomeUsuario, email, dataNascimento, senha) values (?, ?, ?, ?)', [ nomeUsuario, email, dataNascimento, senha]);
    return criadaUsuario;
};

const deletaUsuario = async (id) => {
    const [deletadoUsuario] = await conexao.execute('DELETE FROM usuario WHERE id = ?', [id]);
    return deletadoUsuario;
};
  
const updateUsuario = async (id, usuario) => {
    
    const {nomeUsuario} = usuario;
    const {email} = usuario;
    const {dataNascimento} = usuario;
    const {senha} = usuario;

    const query = 'UPDATE usuario SET  nomeUsuario = ?, email = ?, dataNascimento = ?, senha = ? WHERE id = ?';
  
    const [updatedUsuario] = await conexao.execute(query, [ nomeUsuario, email, dataNascimento, senha, id]);
    return updatedUsuario;
};

module.exports = {
    getAll,
    criarUsuario,
    deletaUsuario,
    updateUsuario,
};