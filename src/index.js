import app from "./app";
import http from "http";
import config from "./config";

const server = http.createServer(app);

server.listen(config.listenport, config.serverIPV4 || 'localhost', function(){
    console.log('Servidor NodeJs en ' + config.serverIPV4 + ' : ' + config.listenport + ' iniciado...');
});