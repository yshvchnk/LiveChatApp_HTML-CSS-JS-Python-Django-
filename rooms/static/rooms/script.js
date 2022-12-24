const roomName = JSON.parse(document.getElementById('json-roomname').textContent);
const userName = JSON.parse(document.getElementById('json-username').textContent);

const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/'
    + roomName
    + '/'
);

chatSocket.onmessage = function (event) {
    console.log(onmessage);
    const data = JSON.parse(event.data);
    if(data.message){
        let html = `
        <div class="p-2 bg-indigo-400 rounded-lg">
            <p class="font-bold">${data.username}</p>
            <p>${data.message}</p>
        </div>
        `;
        document.querySelector('#messages').innerHTML += html;
        scroll();
    } else {
        alert('Failed to get message');
    }
};

chatSocket.onclose = function (event) {
    console.log('onclose');
};

document.querySelector('#message-send').onclick = function (event) {
    event.preventDefault();
    const messageContent = document.querySelector('#message-input');
    const message = messageContent.value;

    console.log({
        'message': message,
        'username': userName,
        'room': roomName
    });

    chatSocket.send(JSON.stringify({
        'room': roomName,
        'username': userName,
        'message': message
    }));

    messageContent.value = '';
    messageContent.focus();
};

function scroll() {
    const chatField = document.querySelector('#messages');
    chatField.scrollTop = chatField.scrollHeight;
}

scroll();