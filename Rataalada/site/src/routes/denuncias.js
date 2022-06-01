var express = require("express");
var router = express.Router();

var denunciaController = require("../controllers/denunciaController");

router.get("/", function (req, res) {
    denunciaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    denunciaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de denunciaController.js
router.post("/denuncia", function (req, res) {
    denunciaController.denuncia(req, res);
});

module.exports = router;