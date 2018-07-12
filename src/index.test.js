import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe("Our first test", () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//note: this test will pass - you need to call it asychronesly as shown below. Not sure why.
// describe('index.html', () => {
//   it('should say hello', () => {
//     const index = fs.readFileSync('./src/index.html', 'utf-8');
//     jsdom.env(index, function(err, window){
//       const h1 = window.document.getElementsByTagname('h1')[0];
//       expect(h1.innerHTML).to.equal("Hello, World?");
//       window.close();
//     });
//   });
// });

//here is the async of the test above - notice the "done" paramitor and the function
describe('index.html', () => {
  //this is the actual test - all items below do the work of the test
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    //the below makes this an async test - specifically, the "function(err, window) and subsequent lines in the function"
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello, World!");
      //now, call the 'done' function to indicate the test is complete
      done();
      //close the window to free resources
      window.close();
    });
  });
});
