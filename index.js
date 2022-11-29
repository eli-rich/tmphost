import fastify from 'fastify';
import fstatic from '@fastify/static';

import * as dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = fastify();

app.register(fstatic, {
  root: join(__dirname, 'public'),
  prefix: '/',
});

app.get('/hello', (req, reply) => {
  reply.send({ hello: 'world' });
});

app.listen({ port: process.env.PORT || 3000 });
