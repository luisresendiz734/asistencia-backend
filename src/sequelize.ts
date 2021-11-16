import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "root", {
  dialect: "postgres",
  host: "localhost"
});

export const startDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Auth OK!");
  } catch (error) {
    console.error(error);
  }
};

export default sequelize;
