const { spec, request } = require('pactum');

const getPostsSchema = require('../data/response/get-comments-response-schema.json');

describe("Get all comments endpoint test suite", ()=>{
  before(()=>{
    request.setDefaultTimeout(5000)
  });
  
  it('get all comments test', async () => {
    await spec()
      .get('https://jsonplaceholder.typicode.com/comments')
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains('id labore ex et quam laborum')
      .expectJsonSchema(getPostsSchema);
  });
});
