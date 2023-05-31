const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Delete post endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete existing post test", async () => {
   
    const postId = 1;

    await spec()
      .delete(`${baseUrl}/posts/${postId}`)
      .expectStatus(200)
      .expectResponseTime(3000)
  });
});