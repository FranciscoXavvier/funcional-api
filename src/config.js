import { config } from "dotenv";
config();

export default {
  listenport: process.env.LISTEN_PORT || 3000,
  dbport: process.env.DB_PORT || 1433,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
  dbInstaceName : process.env.DB_INSTANCENAME || "",
  serverIPV4 : process.env.SERVER_IPV4 || "localhost" 
};