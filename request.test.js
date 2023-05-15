const request = require('./request.js');

describe('a request function', () => {
    it('when request given url http://error.com ', async () => {
        await expect(request('http://error.com')).rejects.toThrow('network error');
    })

    it('when request given url http://succes.com',async () => {
        await expect(request('http://succes.com')).resolves.toEqual({messsage:'succes'});
    })
})