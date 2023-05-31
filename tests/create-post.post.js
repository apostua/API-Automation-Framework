const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Create post endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new post test", async () => {
    const requestBody = {
      title: "oana",
      body: "lorem ipsum",
    };

    await spec()
      .post(`${baseUrl}/posts`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains("lorem ipsum");
  });
});
