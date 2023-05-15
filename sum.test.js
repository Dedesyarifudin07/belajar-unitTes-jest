const sum = require('./sum.js');
// describe('a sum function', () => {
//     test(' should throw new error when given non-numbers',() => {
//         expect(() => sum(2,2),toThrow());
//         expect(() => sum(4,2),toThrow());
//     })
// })
describe('a sum function', () => {
    it('should throw error when given a non-numbers',() => {
        expect(() => sum(2,'2')).toThrow();
        expect(() => sum('a',10)).toThrow();
        expect(() => sum('a','a')).toThrow();
    })

    it('should return  of two numbers', () => {
        expect(sum(2 ,3)).toBe(5);
        expect(sum(3,6)).toBe(9);
        expect(sum(10,-6)).toBe(4)
    })

})




//halaman request
// const {test} = require('tap');

// test(' a request function, should throw  error  when given url error', async (assert) => {
//     assert.rejects(() => request('http://error.com'),new Error('network error'));
// })


// test(' a request function, should throw  succes  when given url succes', async (assert) => {
//     assert.resolves(() => request('http://succes.com'),{message : 'succes'});
// })


// test(' a request function, should throw  succes  when given url succes', async (assert) => {
//      const result = await request('http://succes.com');
//      assert.equal(result.messsage,'succes');
// })



//pake tap
//ubah jadi destructuring obect
// const {test} = require('tap');

// //kita ubah jadi async walaupun tidak ada proses async cronus  //karen kita takut lupa jika tidak memakai async 
// test('a sum function,should throw errors when given value non-numbers', async (assert) => {
//     assert.throws(() =>sum('a',1),new Error('inputs must be numbers'));
//     assert.throws(() => sum(1,1),new Error('inputs must be numbers'));
//     assert.throws(() => sum(1,'b'),new Error('inputs must be numbers'));


// })

// test('a sum, should be return a + b  ',async (assert) => {
//     assert.equal(sum(1,1),3);
//     assert.equal(sum(3,4),7);
//     assert.equal(sum(4,4),8);
// })






//caranya kurang efektif
// const tap = require('tap');
// const sum = require('./index.js');

//masih pake assert end //takut lupa
// tap.test('a sum function,should throw errors when given value non-numbers',(assert) => {
//     assert.throws(() =>sum('a',1),new Error('inputs must be numbers'));
//     assert.throws(() => sum(1,1),new Error('inputs must be numbers'));
//     assert.throws(() => sum(1,'b'),new Error('inputs must be numbers'));


//     assert.end();
// })

//menegetest sebuah fungsi menggunakan assert bawaan node js/core modul

// const assert = require('assert');

// assert.equal(sum(1,2),3);
// assert.throws(() => sum(1,'2'),new Error('inputs must be numbers'));
// assert.equal(sum(2,5),7);