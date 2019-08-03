const assert = chai.assert;

describe(`#generateMatrix`, function() {
  it(`returns [] if passed 0`, function() {
    const output = [];
    assert.deepEqual(generateMatrix(0),output);
  });
  it(`returns [[]] if passed 1`, function() {
    const output = [['']];
    assert.deepEqual(generateMatrix(1),output);
  });
  it(`returns [['',''], ['','']] if passed 2`, function() {
    const output = [['',''], ['','']];
    assert.deepEqual(generateMatrix(2),output);
  });
  it(`returns 10x10 matrix if passed nothing (default value)`, function() {
    const output = [
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','',''],
      ['','','','','','','','','','']];
    assert.deepEqual(generateMatrix(),output);
  });
});