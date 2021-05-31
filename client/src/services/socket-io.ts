import IO from 'socket.io-client';

export const appSocket = IO('localhost:5000/', {});
