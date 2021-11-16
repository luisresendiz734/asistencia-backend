import { Sequelize } from "sequelize";
import { createUserTable } from "./models/user.model";
import { createWorkerTable } from "./models/worker.model";

const sequelize = new Sequelize("testdb", "root", "root", {
  dialect: "mariadb",
  host: "localhost",
});

export const startDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Auth OK!");
    //await createUserTable();
    await createWorkerTable();
  } catch (error) {
    console.error(error);
  }
};

export default sequelize;
