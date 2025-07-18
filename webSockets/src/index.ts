import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080});

let userCount = 0;
let allSocket: WebSocket[] = [];


interface User{
   socket: WebSocket;
   room: String;
}

wss.on('connection', function ws(socket){
   socket.on('error', console.error);

   allSocket.push(socket);

   userCount = userCount + 1;
   console.log(userCount);
   

   socket.send("Server has been started");



   socket.on('message', function message(data){
      console.log("message recieved" + data.toString());

      for(let i=0; i<allSocket.length; i++){
         allSocket[i].send(data.toString() + "sent from server to all clients");
      }
   });

   // if people leave the ws server, need to remove them from allsocket array
   socket.on("disconnect", ()=>{
      allSocket = allSocket.filter(x => x != socket);
   })

});