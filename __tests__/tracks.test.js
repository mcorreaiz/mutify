const request = require("supertest")

const app = require("../app")
const mock = require("../utils/mock_builder")

describe("POST /tracks", () => {
    test("should store a new track", async () => {
        const track = mock.track()
        const response = await request(app)
            .post("/tracks")
            .send(track)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)

        expect(response.body).toEqual(track)
    })
})
