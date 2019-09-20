import socket from "socket.io";

export default http => {
  const io = socket(http);

  io.on("connection", function(socket) {
    socket.on("DIALOGS:JOIN", (dialogId) => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
      console.log("JOINED", dialogId);
  
      socket.emit("DIALOGS:SUCCESS", `you joined to dialog with id ${dialogId}`);
    });
    socket.on("MESSAGE",text => {
  
      if (text === 'Уебан') {
        socket.emit("DIALOGS:SUCCESS", `сам ты ${text}`)
      } else {
        socket.emit("DIALOGS:SUCCESS", `ой все`)
      }
      
    })
    // socket.on("DIALOGS:TYPING", (obj) => {
    //   console.log(obj);
    //   socket.emit("DIALOGS:TYPING", obj);
    // });
  });
  

  return io;
};