import sql from "mssql";
import config from "../../config.js";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  instanceName: config.dbInstaceName,
  port: config.dbport,
  options: {
    encrypt: true, // for azure
    trustedconnection : true,
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };