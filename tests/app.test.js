const request = require("supertest");
const app = require("../src/index");

describe("API CI/CD Pipeline", () => {
  test("GET / responde correctamente", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola mundo!");
  });

  test("GET /suma funciona correctamente", async () => {
    const res = await request(app).get("/suma?a=2&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("GET /suma sin parámetros da error", async () => {
    const res = await request(app).get("/suma");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("GET /resta funciona correctamente", async () => {
    const res = await request(app).get("/resta?a=7&b=2");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("GET /multiplicacion funciona correctamente", async () => {
    const res = await request(app).get("/multiplicacion?a=3&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(9);
  });

  test("Ruta no existente devuelve 404", async () => {
    const res = await request(app).get("/nada");
    expect(res.statusCode).toBe(404);
  });
});
