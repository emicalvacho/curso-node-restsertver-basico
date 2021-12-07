const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre= 'No name', apikey} = req.query;

    res.json({ msg: 'GET - controlador', q, nombre, apikey})
};

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;

    res.status(201).json({ msg: 'POST - controlador', nombre, edad})
};

const usuariosPut = (req = request, res = response) => {
    const {id} = req.params;

    res.json({ msg: 'PUT - controlador', id})
};

const usuariosDelete = (req, res = response) => {
    res.json({ msg: 'DELETE - controlador'})
};

module.exports =  {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
