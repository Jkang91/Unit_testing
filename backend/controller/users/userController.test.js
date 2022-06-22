const mongoose = require('mongoose')
const app = require('../../app')
const {expect} = require('chai')
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);



describe("Sign up process", () => {
    it('successful sign up', (done) => {
        chai.request(app)
            .post("/auth/signup")
            .send({
                username: "jkang111",
                password: "google",
                email: "jkang11@gmail.com"
            })
            .end((error, res) => {
                if(error) done(error);
                expect(res).to.have.status(200)
                expect(res).to.be.a("object")
            })
            done()
    })
}) 

afterAll(() => {
    mongoose.connection.close()
})


