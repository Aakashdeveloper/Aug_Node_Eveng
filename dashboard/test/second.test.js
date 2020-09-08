let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing Rest Api',() => {
    it('Should do user route check',(done) => {
        chai
        .request('http://localhost:6700')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err;
        })
    })
    it('user route not found',(done) => {
        chai
        .request('http://localhost:6700')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done();
        })
        .catch((err) => {
            throw err;
        })
    })
    it('Check post api',(done) => {
        chai
        .request('http://localhost:6700')
        .post('/addUser')
        .send({"_id":9999,name:"Test User"})
        .then((res) => {
            expect(res).to.have.status(202);
            done();
        })
        .catch((err) => {
            throw err;
        })
    })
})
