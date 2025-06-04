const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserController {
    
    static async createUsers(req, res) {
        const {idUser, name, email, password } = req.body;

        try {
            const senhaCriptografada = await bcrypt.hash(password, 10);
            const user = await User.createUsers({
                idUser,
                name,
                email,
                password: senhaCriptografada
            });

            res.status(201).json({ message: 'Usuário criado com sucesso', user });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário', detalhes: error.message });
        }
    }
    
    static async findAllUsers(req, res) {
        try {
            const users = await User.findAllUsers({
                attributes: { exclude: ['senha'] } // não retornar senha
            });

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários', detalhes: error.message });
        }
    }
    
    static async updateUsers(req, res) {
        const { idUser } = req.params;
        const { name, email, password } = req.body;

        try {
            const user = await User.findByPk(idUser);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            user.name = name;
            user.email = email;

            if (password) {
                const senhaCriptografada = await bcrypt.hash(password, 10);
                user.password = senhaCriptografada;
            }

            await user.save();

            res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário', detalhes: error.message });
        }
    }
    
    static async deleteUsers(req, res) {
        const { idUser } = req.params;

        try {
            const user = await User.findByPk(idUser);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            await user.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário', detalhes: error.message });
        }
    }
}

module.exports = UserController;