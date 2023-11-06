const validateName = (request, response, next) => {
    const {body} = request;

    if (body.nome === undefined) {
        response.status(400).json({message:'titulo é requerido'});
    }

    if (body.nome === " ") {
        response.status(400).json({message:'titulo não pode ser nulo'});
    }

    next();
};

module.exports = {
    validateName
}