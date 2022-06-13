const mongoose = require('mongoose')
const app = require("../../app")
const request = require('supertest')

describe("Sign up process", () => {
    it('tests /signup endpoint', async() => {
        const response = await request(app).get("/auth/signup")
        expect(response.statusCode).toBe(200)
    })
}) 

afterAll(() => {
    mongoose.connection.close()
})


