var database = require("../database/config")

function listar() {
    console.log("ACESSEI O DENUNCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM denuncia;
        SELECT * FROM ocorrencia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function denuncia(nome, local, tel, dist) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function denuncia():", nome, local, tel, dist);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO denuncia (nome, localDenuncia, telefone, distrito, dataHora) VALUES ('${nome}', '${local}', '${tel}', ${dist}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ocorrencia(tipo, localOcor, desc, nome, local, dist) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ocorrencia():", tipo, localOcor, desc, nome, local, dist);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO ocorrencia VALUES ((select idDen from denuncia where nome = '${nome}' and localDenuncia = '${local}' and distrito = ${dist} order by idDen desc limit 1), ${dist}, ${tipo}, '${localOcor}', '${desc}', now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    denuncia,
    ocorrencia,
    listar,
};