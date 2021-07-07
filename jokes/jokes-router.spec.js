const server = require("../api/server.js");
const request = require("supertest");

describe("jokes router", () => {
  it("should status 401 without auth", async () => {
    const res = await request(server).get("/api/jokes");

    expect(res.status).toBe(401);
  });

  it("should be json", async () => {
    const res = await request(server).get("/api/jokes");

    expect(res.type).toBe("application/json");
  });
});
