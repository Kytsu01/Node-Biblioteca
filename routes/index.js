var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Sistema de Biblioteca' });
});

router.get('/login', function(req, res, next) {
  res.send('Aqui vai aparecer um forum - aguarde...');
});

router.post('/login', async function(req, res, next) {
  const {usuario, senha} = req.body;

  console.log("Dados recebido do usuario: ", usuario, senha);

  const user = await global.banco.getUsuario(usuario, senha);

  console.log("Dados recebido do DB ", user);

  if(user && user.length > 0) {
    res.redirect('/dashboard');
  } else {
    res.render('index', {titulo : "Sistema de Biblioteca", erro : "Usuario/Senha Invalido"});
  }
});

router.get('/listagem', function(req, res, next) {
  res.send('Aqui vai aparecer a lista de livros - aguarde...');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;


