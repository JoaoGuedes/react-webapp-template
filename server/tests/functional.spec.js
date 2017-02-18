/* eslint-env jest */

import restify from 'restify';

const client = restify.createJsonClient({
  url: 'http://127.0.0.1:3000',
  version: '*',
});

describe('Server', () => {
  it('should return number of elements', (done) => {
    client.post('/api/', {}, (err, req, res, data) => {
      expect(data.collection.length).toEqual(1);
      done();
    });
  });
});
