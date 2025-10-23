var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Sistema de Biblioteca' });
});

router.get('/login', function(req, res, next) {
  res.send('Aqui vai aparecer um forum - aguarde...');
});

router.post('/login', function(req, res, next) {
  const {usuario, senha} = req.body;

  if(usuario == "nicolas@gmail.com" && senha === "123456") {
    res.send("Logado com sucesso!");
  } else {
    res.render('index', {titulo : "Sistema de Biblioteca", erro : "Usuario/Senha invalidos!"});
  }
});

router.get('/listagem', function(req, res, next) {
  res.send('Aqui vai aparecer a lista de livros - aguarde...');
});

module.exports = router;
