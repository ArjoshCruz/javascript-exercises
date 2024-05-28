const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  tesSt('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
