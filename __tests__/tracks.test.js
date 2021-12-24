const request = require("supertest")

const app = require("../app")
const mock = require("../utils/mock_builder")
const { storeTrack } = require("../repositories/tracks")
const { getUri, connect, closeDb } = require("../db")

jest.mock("../repositories/tracks")

beforeAll(async () => {
    const uri = await getUri()
    await connect({ uri })
})

beforeEach(() => {
    storeTrack.mockReset()
})

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
        expect(storeTrack).toHaveBeenCalledWith(track)
    })
})

afterAll(async () => {
    await closeDb()
})
