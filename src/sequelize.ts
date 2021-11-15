import { Sequelize } from "sequelize";
import { createUserTable } from "./models/user.model";

const sequelize = new Sequelize('testdb', 'root', 'root',  {
    dialect: 'mariadb',
    host: 'localhost'
});

export const startDatabase = async () => {
    try {
        await sequelize.authenticate();
        await createUserTable();
    } catch (error) {
        console.error(error);
    }
};

export default sequelize;