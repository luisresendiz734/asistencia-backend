import app from "./app";
import { startDatabase } from "./sequelize";

const main = async () => {
  app.listen(app.get("port"), () =>
    console.log(`Server on: http://localhost:${app.get("port")}`)
  );
  await startDatabase();
  console.log("Auth OK!");
};

main();
