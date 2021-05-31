//estructura básica generada con express-generator
//importar dependencias
var express = require('express');             //express.js
var path = require('path');                   //tratamiento de rutas de ficheros
var cookieParser = require('cookie-parser');  //módulo para coockies
var logger = require('morgan');               //módulo para log de las peticiones http

//se definen las rutas de la aplicación
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//se crea la aplicación
var app = express();

//se inicializan los módulos
//módulo para generar un log de las peticiones que recibe el servidor y verlas por consola
app.use(logger('dev'));
//middleware que traduce las peticiones json para facilitar su tratamiento
app.use(express.json());
//middleware para decodificar el contenido de losparámetros que vengan codificados en las peticiones
app.use(express.urlencoded({ extended: false }));
//módulo para facilitar el tratamiento de las cookies
app.use(cookieParser());
//módulo para facilitar el tratamiento de los recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//módulos que hacen referencia a las rutas de la aplicación
app.use('/', indexRouter);
app.use('/users', usersRouter);

//se exporta la aplicación para que pueda ser utilizada desde otros ficheros que incluyan app.js
module.exports = app;
