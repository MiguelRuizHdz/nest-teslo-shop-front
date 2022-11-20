import { connectToServer } from './socket-client';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>

    <span id="server-status">offline</span>

    <ul id="clients-ul">
      <li>JHSAGDJJD</li>
    </ul>

    <form id="message-form">
      <input placeholder="message" id="message-input">
    </form>


  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();