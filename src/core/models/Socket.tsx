import { EventEmitter } from 'eventemitter3';
import JSONbigint from "json-bigint";

export default class Socket {
  ws: WebSocket;
  ee: EventEmitter;
  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ee = new EventEmitter();

    this.ws.onmessage = this.message.bind(this);
    this.ws.onopen = this.open.bind(this);
    this.ws.onclose = this.close.bind(this);
    this.ws.onerror = this.error.bind(this);
  };

  on(name: string, fn: (data: any) => void) {
    this.ee.on(name, fn);
  };

  off(name: string, fn: (data: any) => void) {
    this.ee.removeListener(name, fn);
  };

  // open handles a connection to a websocket.
  open() {
    this.ee.emit('connect');
  };

  // close to handles a disconnection from a websocket.
  close() {
    this.ee.emit('disconnect');
  };

  // error handles an error on a websocket.
  error(e: any) {
    this.ee.emit('error', e);
  }

  // emit sends a message on a websocket.
  emit(name: string, data: any) {
    const message = JSONbigint.stringify({ name, data });
    this.ws.send(message);
  }

  // message handles an incoming message and forwards it to an event listener.
  message(e: any) {
    try {
      const message = JSONbigint.parse(e.data);
      this.ee.emit(message.name, message.data);
    }
    catch (err) {
      this.ee.emit('error', err);
    }
  }
}