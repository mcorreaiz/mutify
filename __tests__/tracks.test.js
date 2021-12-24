import request from 'supertest';
import app from '../app.js';
import mock from '../src/utils/mock_builder.js';
import { storeTrack } from '../src/repositories/tracks.js';
import { getUri, connect, closeDb } from '../src/db/index.js';

jest.mock("../src/repositories/tracks.js")

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
