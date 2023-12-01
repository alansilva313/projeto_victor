const bcrypt = require('bcrypt');
const prisma = require('../src/Client/PrismaClient');

module.exports = class LoginController {
    static async login(req, res) {
        const { email, password } = req.body;

        if(!email || email === ""){
            res.status(400).json({message: "O email é obrigatorio!"})
            return;
        }

        if(!password || password === ""){
            res.status(400).json({message: "A senha é obrigatória!"})
            return;
        }




        // Procurar usuário no banco de dados pelo e-mail
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        // Verificar se o usuário existe e se a senha está correta
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({ message: "Autenticado com sucesso!", success: true});
        } else {
            res.status(401).json({ message: "Credenciais inválidas!", success: false});
            return;
        }
    }
};
