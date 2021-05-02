import { app } from "./app";
import request from "supertest";

describe("gateway test", () => {
  it("Should say bismillah", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Bismillah");
  });
});
