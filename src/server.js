const express = require('express');
const database = require('./config/database');
const userRouter = require('./routes/userRoutes');
// const projectController = require('./controllers/projectController');


const app = express();
app.use(express.json());

console.log('Starting server....');

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
});
/*
const userController = require('./controllers/userController');
app.post('/users', userController.insert);
app.get('/users', userController.findAll);
app.put('/users/:id', userController.update);
app.delete('/users/:id', userController.delete);

const taskController = require('./controllers/taskController');
app.post('/tasks', taskController.insert);
app.get('/tasks', taskController.findAll);
app.get('/tasks/:id', taskController.findById);
app.put('/tasks/:id', taskController.update);
app.delete('/tasks/:id', taskController.delete);


// Rotas públicas
app.post('/project', projectController.insert);
app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);

// Rotas protegidas
app.use(userApi.validarToken); 
app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);
*/

app.use('/user', userRouter);

database.sync() 
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
