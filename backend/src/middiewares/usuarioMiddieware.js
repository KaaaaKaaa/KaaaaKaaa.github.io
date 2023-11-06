const validateNomeUsuario = (request, response, next) => {
    const {body} = request;

    if (body.nomeUsuario === undefined) {
        response.status(400).json({message:'nome é requerido'});
    }

    if (body.nomeUsuario === " ") {
        response.status(400).json({message:'nome não pode ser nulo'});
    }

    next();
};

const validateEmail = (request, response, next) => {
    const {body} = request;

    if (body.email === undefined) {
        response.status(400).json({message:'email é requerido'});
    }

    if (body.email === " ") {
        response.status(400).json({message:'nome não pode ser nulo'});
    }

    next();
};

const validateSenha = (request, response, next) => {
    const {body} = request;

    if (body.senha === undefined) {
        response.status(400).json({message:'senha é requerido'});
    }

    if (body.senha === " ") {
        response.status(400).json({message:'senha não pode ser nulo'});
    }

    next();
};

module.exports = {
    validateNomeUsuario,
    validateEmail,
    validateSenha
}