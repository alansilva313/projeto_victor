
const prisma = require('../src/Client/PrismaClient');



module.exports = class ReadUsersController{

    static async readUsers(req, res){

        const read = await prisma.user.findMany();


        res.status(200).json({message: "Listagem de usuários",  success: true, read});
         
    }
}