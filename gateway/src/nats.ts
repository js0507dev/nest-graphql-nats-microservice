import { Codec, connect, NatsConnection, StringCodec } from 'nats';

export let nc: NatsConnection;
export const sc: Codec<string> = StringCodec();
export async function connectNats() {
  nc = await connect({ servers: 'localhost:4222' });
}
