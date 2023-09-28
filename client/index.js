import { io } from 'socket.io-client';

console.log('test');

// const socket = io('http://localhost:3000');



const chatSection = document.querySelector('.chat-section');

const displayChat = (message) => {
  console.log('wo')
  const chatBox = document.createElement('div');
  chatBox.classList.add = 'chat-box';
  chatBox.innerHTML = message;
  chatSection.appendChild(chatBox);
}

displayChat('Hello coy');