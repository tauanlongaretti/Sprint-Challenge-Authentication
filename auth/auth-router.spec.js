const request = require("supertest");
const server = require("../api/server.js");

describe("POST / Register", () => {
  it("should return a status of 201 if creating unique user", async () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "Tauan13",
        password: "password",
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  it("should return a problems with the db message", async () => {
    return request(server)
      .post("/api/auth/register")
      .catch((res) => {
        expect(res.body).toBe({ message: "problems with the db" });
      });
  });
});

describe("POST / Login", () => {
  it("should return a status of 401", async () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "Tauan",
        password: "wrongPassword",
      })
      .then((res) => {
        expect(res.status).toBe(401);
      });
  });

  it("should return a status of 200", async () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "Tauan",
        password: "password",
      })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it("should return a 'You shall not pass!' message", async () => {
    return request(server)
      .post("/api/auth/login")
      .catch((res) => {
        expect(res.body).toBe({ message: "You shall not pass" });
      });
  });
});
