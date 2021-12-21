const request = require("supertest")

const app = require("../app")

describe("POST /tracks", () => {
    test("should store a new track", async () => {
        await request(app)
            .post("/tracks")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
    })
})
