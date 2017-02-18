import restify from 'restify';
import { controller } from './controllers';

const server = restify.createServer({
  name: 'React-webapp-template',
  version: '1.0.0',
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());

server.post('/api/route', controller);

server.listen(process.env.PORT || 3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
