function sendMessage(){
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if(message){
        const messageDiv = document.getElementById("messages");
        const newMsg = document.createElement("div");
        newMsg.textContent = message;
        messageDiv.appendChild(newMsg);

        input.value = "";
        messageDiv.scrollTop = messageDiv.scrollHeight;
    }
}