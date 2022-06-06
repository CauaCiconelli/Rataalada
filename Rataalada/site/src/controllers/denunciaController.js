var denunciaModel = require("../models/denunciaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA denunciaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    denunciaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function denuncia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var local = req.body.localServer;
    var tel = req.body.telServer;
    var dist = req.body.distServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (local == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (tel == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (dist == undefined) {
        res.status(400).send("Seu distrito está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo denunciaModel.js
        denunciaModel.denuncia(nome, local, tel, dist)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function ocorrencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tipo = req.body.tipoServer;
    var localOcor = req.body.localOcorServer;
    var desc = req.body.descServer;
    var nome = req.body.nomeServer;
    var local = req.body.localServer;
    var dist = req.body.distServer;

    // Faça as validações dos valores
    if (tipo == undefined) {
        res.status(400).send("Seu tipo está undefined!");
    } else if (localOcor == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (desc == undefined) {
        res.status(400).send("Sua descrição está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo denunciaModel.js
        denunciaModel.ocorrencia(tipo, localOcor, desc, nome, local, dist)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function grafico(req, res){
    var dist = req.body.distServer
    if (dist == undefined) {
        res.status(400).send("Seu distrito está undefined!");
    } else{
        denunciaModel.grafico(dist)
        .then(
            function (resultado){
            console.log('cHEGUEI AQUI');
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro pegar o grafico! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    grafico,
    ocorrencia,
    denuncia,
    listar,
    testar
}