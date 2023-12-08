const express = require('express');
const app = express();
const puerto = 80;


app.use(express.json());

const CarrerasController=require('./controllers/carrerasControllers');
app.get('/carreras',CarrerasController.indexGet);
app.get('/carreras/:id([0-9]+)', CarrerasController.ItemGet);
app.post('/carreras', CarrerasController.indexPost);
app.put('/carreras/:id([0-9]+)', CarrerasController.itemPut);
app.patch('/carreras/:id([0-9]+)', CarrerasController.itemPatch);

const estudiantesController=require('./controllers/estudiantesControllers');
app.get('/estudiantes',estudiantesController.indexGet);
app.get('/estudiantes/:id([0-9]+)', estudiantesController.ItemGet);
app.post('/estudiantes', estudiantesController.indexPost);
app.put('/estudiantes/:id([0-9]+)', estudiantesController.itemPut);
app.patch('/estudiantes/:id([0-9]+)', estudiantesController.itemPatch);

const preguntastestController=require('./controllers/preguntastestControllers');
app.get('/preg_test',preguntastestController.indexGet);
app.get('/preg_test/:id([0-9]+)', preguntastestController.ItemGet);
app.post('/preg_test', preguntastestController.indexPost);
app.put('/preg_test/:id([0-9]+)', preguntastestController.itemPut);
app.patch('/preg_test/:id([0-9]+)', preguntastestController.itemPatch);

const respuestastestController=require('./controllers/respuestastestControllers');
app.get('/resp_test',respuestastestController.indexGet);
app.get('/resp_test/:id([0-9]+)', respuestastestController.ItemGet);
app.post('/resp_test', respuestastestController.indexPost);
app.put('/resp_test/:id([0-9]+)', respuestastestController.itemPut);
app.patch('/resp_test/:id([0-9]+)', respuestastestController.itemPatch);

const resultadosapreController=require('./controllers/resultadosapreControllers');
app.get('/res_apre',resultadosapreController.indexGet);
app.get('/res_apre/:id([0-9]+)', resultadosapreController.ItemGet);

const resoriController=require('./controllers/resoriControllers');
app.get('/res_ori',resoriController.indexGet);
app.get('/res_ori/:id([0-9]+)', resoriController.ItemGet);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡FUNCIONANDO!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});

/*

*/
//consultar categorias, productos y buscar individualmente el elemento que se especifica.
//Respuestas que deben devolver cada metodo POST,GET